import React from "react";
import i18n from '@dhis2/d2-i18n';
import {DetailArea} from "../DetailArea";
import {AreaContainer} from "../AreaContainer";
import {useData} from "../../hooks/data";
import {Button, ButtonStrip, Modal, ModalActions, ModalContent, ModalTitle} from '@dhis2/ui'
import {FormProvider, useForm} from "react-hook-form";
import {useBoolean} from "usehooks-ts";
import {RHFDHIS2FormField, VALUE_TYPE} from "@hisptz/dhis2-ui";
import {useAlert, useDataMutation} from "@dhis2/app-runtime";


const teiMutation: any = {
    resource: "trackedEntityInstances",
    id: ({id}: any) => id,
    data: ({data}: any) => data,
    type: "update"
}

function ProfileEditModal({hide, onClose}: { hide: boolean; onClose: () => void; }) {
    const {refetch, profileData: profile} = useData();
    const form = useForm({
        defaultValues: profile?.getProfileFormValues()
    });

    const {show, hide: hideAlert} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}))

    const [update, {loading}] = useDataMutation(teiMutation, {
        onComplete: () => {
            show({
                message: i18n.t("Profile updated successfully"),
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

    const onSubmit = async (newValues: Record<string, any>) => {
        const updatedTei = profile?.updateProfile(newValues);
        await update({
            id: updatedTei?.trackedEntityInstance,
            data: updatedTei
        });
    }

    const fields = profile?.getProfileFormFields();

    return (
        <Modal position="middle" hide={hide} onClose={onClose}>
            <ModalTitle>
                {i18n.t("Edit enrollment")}
            </ModalTitle>
            <ModalContent>
                <FormProvider {...form}>
                    <div className="column gap-8">
                        {
                            fields?.map((dhis2Field) => (
                                <RHFDHIS2FormField
                                    key={`${dhis2Field.id}-field`}
                                    required={dhis2Field.mandatory}
                                    valueType={dhis2Field.valueType as VALUE_TYPE}
                                    name={dhis2Field?.id as string}
                                    label={dhis2Field?.displayName}
                                    validations={{
                                        required: i18n.t("{{field}} is required", {
                                            field: dhis2Field.displayName
                                        })
                                    }}
                                />
                            ))
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

export function Profile() {
    const {profileData} = useData();
    const {value: hide, setTrue: hideModal, setFalse: openModal} = useBoolean(true)

    return (<>
        <AreaContainer onEdit={openModal} heading={i18n.t("Profile")}>
            <div className="column gap-8">
                {
                    profileData?.getProfileData()?.map(data => (
                        <DetailArea key={`${data.id}-profile-details`} {...data} />))
                }
            </div>
        </AreaContainer>
        <ProfileEditModal hide={hide} onClose={hideModal}/>
    </>)

}

const updateEnrollmentMutation: any = {
    resource: "enrollments",
    type: "update",
    id: ({id}: any) => id,
    data: ({data}: any) => data
}

function EnrollmentEditModal({hide, onClose}: { hide: boolean; onClose: () => void }) {
    const {refetch, profileData: profile} = useData();
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
                                <RHFDHIS2FormField
                                    key={`${field.name}-field`}
                                    required={field.required}
                                    label={field.label}
                                    valueType={field.valueType as VALUE_TYPE}
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
            <EnrollmentEditModal hide={hide} onClose={hideModal}/>
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
        <div style={{position: "sticky", top: 0, left: 0}}>
            <div className="column gap-16 w-100">
                <Profile/>
                <Enrollment/>
                <Relationships/>
            </div>
        </div>
    )
}
