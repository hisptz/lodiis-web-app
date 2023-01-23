import React from "react";
import i18n from '@dhis2/d2-i18n';
import {DetailArea} from "../DetailArea";
import {AreaContainer} from "../AreaContainer";
import {useData} from "../../hooks/data";
import {ProfileData} from "../../../../../../shared/models/data";
import {Button, ButtonStrip, Modal, ModalActions, ModalContent, ModalTitle} from '@dhis2/ui'
import {FormProvider, useForm} from "react-hook-form";
import {useBoolean} from "usehooks-ts";
import {RHFTextInputField} from "@hisptz/dhis2-ui";
import {useAlert, useDataMutation} from "@dhis2/app-runtime";

export function Profile() {
    const {profileData} = useData();
    return (<AreaContainer heading={i18n.t("Profile")}>
        <div className="column gap-8">
            {
                profileData?.getProfileData()?.map(data => (
                    <DetailArea key={`${data.id}-profile-details`} {...data} />))
            }
        </div>
    </AreaContainer>)

}

const updateEnrollmentMutation: any = {
    resource: "enrollments",
    type: "update",
    id: ({id}: any) => id,
    data: ({data}: any) => data
}

function EnrollmentEditModal({hide, onClose, profile}: { hide: boolean; onClose: () => void; profile?: ProfileData }) {
    const {refetch} = useData();
    const form = useForm<{ enrollmentDate: string; orgUnit: string; }>({
        defaultValues: profile?.getEnrollmentFormValues()
    });
    const {show, hide: hideAlert} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}))

    const [update, {loading}] = useDataMutation(updateEnrollmentMutation, {
        onComplete: () => {
            show({
                message: i18n.t("Enrollment updated successfully"),
                type: {
                    success: true
                }
            });
            refetch();
            onClose();
        },
        onError: (error) => {
            show({message: error.message || error.details.message, type: {critical: true}});
            setTimeout(hideAlert, 5000);
        }
    });

    const onSubmit = async (newValues: { enrollmentDate: string; orgUnit: string; }) => {
        const updatedEnrollment = profile?.updateEnrollment(newValues);
        await update({
            id: updatedEnrollment?.enrollment,
            data: updatedEnrollment
        });
    }

    const fields = profile?.getEnrollmentFormFields();

    return (
        <Modal position="middle" hide={hide} onClose={onClose}>
            <ModalTitle>
                {i18n.t("Edit enrollment")}
            </ModalTitle>
            <ModalContent>
                <FormProvider {...form}>
                    <div className="column gap-8">
                        {
                            fields?.map(field => (
                                <RHFTextInputField
                                    required={field.required}
                                    label={field.label}
                                    type={field.valueType}
                                    name={field.name}
                                    validations={field.validations}
                                />))
                        }
                    </div>
                </FormProvider>
            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
                    <Button
                        loading={loading}
                        onClick={form.handleSubmit(onSubmit)}
                        primary>
                        {loading ? `${i18n.t("Updating")}...` : i18n.t("Update")}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}

export function Enrollment() {
    const {profileData} = useData();
    const {value: hide, setTrue: hideModal, setFalse: openModal} = useBoolean(true)

    const onEdit = () => {
        openModal()
    }

    return (
        <>
            <AreaContainer onEdit={onEdit} heading={i18n.t("Enrollment")}>
                <div className="column gap-8">
                    {
                        profileData?.getEnrollmentData()?.map(data => (
                            <DetailArea key={`${data.id}-profile-details`} {...data}/>))
                    }
                </div>
            </AreaContainer>
            <EnrollmentEditModal hide={hide} onClose={hideModal} profile={profileData}/>
        </>
    )
}

export function Relationships() {
    return (
        <AreaContainer heading={i18n.t("Relationships")}>

        </AreaContainer>
    )
}

export function ProfileArea() {

    return (
        <div className="column gap-16 w-100 h-100">
            <Profile/>
            <Enrollment/>
            <Relationships/>
        </div>
    )
}
