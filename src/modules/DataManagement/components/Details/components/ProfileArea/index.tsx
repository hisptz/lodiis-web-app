import React from "react"
import i18n from "@dhis2/d2-i18n"
import { DetailArea } from "../DetailArea"
import { AreaContainer } from "../AreaContainer"
import { useProfileData } from "../../hooks/data"
import {
  Button,
  ButtonStrip,
  IconFullscreen24,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
} from "@dhis2/ui"
import { FormProvider, useForm } from "react-hook-form"
import { useBoolean } from "usehooks-ts"
import {
  CustomDataTable,
  CustomDataTableColumn,
  RHFDHIS2FormField,
  VALUE_TYPE,
} from "@hisptz/dhis2-ui"
import { useAlert, useDataMutation } from "@dhis2/app-runtime"
import { isEmpty } from "lodash"
import { useProfileRelationships } from "../../hooks/relationships"
import FullPageLoader from "../../../../../../shared/components/Loaders"
import { getAttributeValue } from "../../../../../../shared/utils/metadata"
import { ATTRIBUTES } from "../../../../../../constants/metadata"
import { uid } from "@hisptz/dhis2-utils"
import { useNavigate } from "react-router-dom"

const teiMutation: any = {
  resource: "trackedEntityInstances",
  id: ({ id }: any) => id,
  data: ({ data }: any) => data,
  type: "update",
}

export function Profile() {
  const { profile } = useProfileData()
  const {
    value: hide,
    setTrue: hideModal,
    setFalse: openModal,
  } = useBoolean(true)

  return (
    <>
      <AreaContainer
        onEdit={openModal}
        heading={i18n.t("Profile")}
      >
        <div className="column gap-8">
          {profile?.getProfileData()?.map((data) => (
            <DetailArea
              key={`${data.id}-profile-details`}
              {...data}
            />
          ))}
        </div>
      </AreaContainer>
      <ProfileEditModal
        hide={hide}
        onClose={hideModal}
      />
    </>
  )
}

function ProfileEditModal({
  hide,
  onClose,
}: {
  hide: boolean
  onClose: () => void
}) {
  const { refresh, profile } = useProfileData()
  const form = useForm({
    defaultValues: profile?.getProfileFormValues(),
  })

  const { show, hide: hideAlert } = useAlert(
    ({ message }) => message,
    ({ type }) => ({ ...type, duration: 3000 })
  )

  const [update, { loading }] = useDataMutation(teiMutation, {
    onComplete: () => {
      show({
        message: i18n.t("Profile updated successfully"),
        type: {
          success: true,
        },
      })
      refresh()
      onClose()
    },
    onError: (error) => {
      show({
        message: error.message || error.details.message,
        type: { critical: true },
      })
      setTimeout(hideAlert, 5000)
    },
  })

  const onSubmit = async (newValues: Record<string, any>) => {
    const updatedTei = profile?.updateProfile(newValues)
    await update({
      id: updatedTei?.trackedEntityInstance,
      data: updatedTei,
    })
  }

  const fields = profile?.getProfileFormFields()

  return (
    <Modal
      position="middle"
      hide={hide}
      onClose={onClose}
    >
      <ModalTitle>{i18n.t("Edit enrollment")}</ModalTitle>
      <ModalContent>
        <FormProvider {...form}>
          <div className="column gap-8">
            {fields?.map((dhis2Field, index) => (
              <RHFDHIS2FormField
                key={`${dhis2Field.id}-field-${index}`}
                required={dhis2Field.mandatory}
                valueType={dhis2Field.valueType as VALUE_TYPE}
                name={dhis2Field?.id as string}
                label={dhis2Field?.displayName}
                validations={{
                  required: {
                    value: dhis2Field.mandatory,
                    message: i18n.t("{{field}} is required", {
                      field: dhis2Field.displayName,
                    }),
                  },
                }}
              />
            ))}
          </div>
        </FormProvider>
      </ModalContent>
      <ModalActions>
        <ButtonStrip>
          <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
          <Button
            loading={loading}
            onClick={form.handleSubmit(onSubmit)}
            primary
          >
            {loading ? `${i18n.t("Updating")}...` : i18n.t("Update")}
          </Button>
        </ButtonStrip>
      </ModalActions>
    </Modal>
  )
}

const updateEnrollmentMutation: any = {
  resource: "enrollments",
  type: "update",
  id: ({ id }: any) => id,
  data: ({ data }: any) => data,
}

function EnrollmentEditModal({
  hide,
  onClose,
}: {
  hide: boolean
  onClose: () => void
}) {
  const { refresh, profile: profile } = useProfileData()
  const form = useForm<{ enrollmentDate: string; orgUnit: string }>({
    defaultValues: profile?.getEnrollmentFormValues(),
  })
  const { show, hide: hideAlert } = useAlert(
    ({ message }) => message,
    ({ type }) => ({ ...type, duration: 3000 })
  )

  const [update, { loading }] = useDataMutation(updateEnrollmentMutation, {
    onComplete: () => {
      show({
        message: i18n.t("Enrollment updated successfully"),
        type: {
          success: true,
        },
      })
      refresh()
      onClose()
    },
    onError: (error) => {
      show({
        message: error.message || error.details.message,
        type: { critical: true },
      })
      setTimeout(hideAlert, 5000)
    },
  })

  const onSubmit = async (newValues: {
    enrollmentDate: string
    orgUnit: string
  }) => {
    const updatedEnrollment = profile?.updateEnrollment(newValues)
    await update({
      id: updatedEnrollment?.enrollment,
      data: updatedEnrollment,
    })
  }

  const fields = profile?.getEnrollmentFormFields()

  return (
    <Modal
      position="middle"
      hide={hide}
      onClose={onClose}
    >
      <ModalTitle>{i18n.t("Edit enrollment")}</ModalTitle>
      <ModalContent>
        <FormProvider {...form}>
          <div className="column gap-8">
            {fields?.map((field) => (
              <RHFDHIS2FormField
                key={`${field.name}-field`}
                required={field.required}
                label={field.label}
                valueType={field.valueType as VALUE_TYPE}
                name={field.name}
                validations={field.validations}
              />
            ))}
          </div>
        </FormProvider>
      </ModalContent>
      <ModalActions>
        <ButtonStrip>
          <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
          <Button
            loading={loading}
            onClick={form.handleSubmit(onSubmit)}
            primary
          >
            {loading ? `${i18n.t("Updating")}...` : i18n.t("Update")}
          </Button>
        </ButtonStrip>
      </ModalActions>
    </Modal>
  )
}

export function Enrollment() {
  const { profile } = useProfileData()
  const {
    value: hide,
    setTrue: hideModal,
    setFalse: openModal,
  } = useBoolean(true)

  const onEdit = () => {
    openModal()
  }

  return (
    <>
      <AreaContainer
        onEdit={onEdit}
        heading={i18n.t("Enrollment")}
      >
        <div className="column gap-8">
          {profile?.getEnrollmentData()?.map((data) => (
            <DetailArea
              key={`${data.id}-profile-details`}
              {...data}
            />
          ))}
        </div>
      </AreaContainer>
      <EnrollmentEditModal
        hide={hide}
        onClose={hideModal}
      />
    </>
  )
}

const columns: CustomDataTableColumn[] = [
  {
    key: "relationship",
    label: i18n.t("Relationship"),
  },
  {
    key: "name",
    label: i18n.t("Name"),
  },
  {
    key: "actions",
    label: i18n.t("Actions"),
  },
]

export function Relationships() {
  const { teiRelationship, loading, hasRelationships } =
    useProfileRelationships()
  const navigate = useNavigate()

  if (!hasRelationships) {
    return null
  }

  if (loading) {
    return (
      <AreaContainer heading={i18n.t("Relationships")}>
        <FullPageLoader />
      </AreaContainer>
    )
  }

  if (isEmpty(teiRelationship)) {
    return null
  }

  const onLinkClick =
    ({ id, program }: { id: string; program: string }) =>
    () => {
      navigate(`/data-management/view/${id}?program=${program}`)
    }

  const rows = teiRelationship.map(({ relationship, program, otherTei }) => {
    return {
      id: otherTei.trackedEntityInstance ?? uid(),
      relationship: relationship.relationshipName ?? "",
      name: `${
        getAttributeValue(otherTei.attributes ?? [], ATTRIBUTES.FIRST_NAME) ??
        ""
      } ${
        getAttributeValue(otherTei.attributes ?? [], ATTRIBUTES.SURNAME) ?? ""
      }`,
      actions: (
        <Button
          onClick={onLinkClick({ id: otherTei.trackedEntityInstance, program })}
          small
          icon={<IconFullscreen24 />}
        />
      ),
    }
  })

  return (
    <AreaContainer heading={i18n.t("Relationships")}>
      <CustomDataTable
        columns={columns}
        rows={rows}
      />
    </AreaContainer>
  )
}

export function ProfileArea() {
  return (
    <div style={{ position: "sticky", top: 0, left: 0 }}>
      <div className="column gap-16 w-100">
        <Profile />
        <Enrollment />
        <Relationships />
      </div>
    </div>
  )
}
