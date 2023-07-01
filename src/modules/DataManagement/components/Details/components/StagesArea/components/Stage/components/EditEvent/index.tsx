import {
  Button,
  ButtonStrip,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import React, { useMemo } from "react";
import { Event as DHIS2Event, ProgramStage } from "@hisptz/dhis2-utils";
import { ProgramStageConfig } from "../../../../../../../../../../shared/interfaces/metadata";
import { FormProvider, useForm } from "react-hook-form";
import { RHFDHIS2FormField, RHFDHIS2FormFieldProps } from "@hisptz/dhis2-ui";
import { cloneDeep, compact, findIndex, forIn, fromPairs, set } from "lodash";
import { getDataElementValue } from "../../../../../../../../../../shared/utils/metadata";
import { useAlert, useDataMutation } from "@dhis2/app-runtime";
import { useProfileData } from "../../../../../../hooks/data";

const eventMutation: any = {
  resource: "events",
  type: "update",
  id: ({ id }: any) => id,
  data: ({ data }: any) => data,
};

export function EditEventModal({
  event,
  onClose,
  hide,
  stage,
}: {
  event?: DHIS2Event;
  onClose: () => void;
  hide: boolean;
  stage: ProgramStageConfig & ProgramStage;
}) {
  const { refresh } = useProfileData();
  const fields = useMemo(() => {
    if (!event) {
      return [];
    }
    return compact(
      stage.view.filter(({ editable }) => editable).map(({ field }) => field)
    );
  }, [event, stage]);

  const { show, hide: hideModal } = useAlert(
    ({ message }) => message,
    ({ type }) => ({ ...type, duration: 3000 })
  );

  function getDefaultValues(
    fields: RHFDHIS2FormFieldProps[],
    event?: DHIS2Event
  ) {
    return fromPairs(
      fields.map((field) => [
        field.name,
        getDataElementValue(event?.dataValues ?? [], field.name),
      ])
    );
  }

  const form = useForm({
    defaultValues: getDefaultValues(fields, event),
  });
  const [updateEvent, { loading }] = useDataMutation(eventMutation, {
    onComplete: () => {
      show({
        message: i18n.t("Service updated successfully"),
        type: { success: true },
      });
      refresh();
      onClose();
    },
    onError: (error) => {
      show({
        message: i18n.t(error.details.message ?? error.message),
        type: { critical: true },
      });
      setTimeout(() => hideModal(), 5000);
    },
  });

  const onEditClick = async (data: Record<string, any>) => {
    if (!event) {
      return;
    }

    function updateEventDataValues(
      event: DHIS2Event,
      data: Record<string, any>
    ) {
      const dataValues = [...cloneDeep(event.dataValues)] ?? [];
      forIn(data, (value, key) => {
        const index = findIndex(dataValues, ["dataElement", key]);

        if (!(index < 0)) {
          set(dataValues, [index, "value"], value);
        } else {
          dataValues.push({ dataElement: key, value });
        }
      });

      return {
        ...event,
        dataValues,
      };
    }

    const newEvent = updateEventDataValues(event, data);

    await updateEvent({
      data: newEvent,
      id: newEvent.event,
    });
    if (event) {
    }
  };

  return (
    <Modal position="middle" hide={hide} onClose={onClose}>
      <ModalTitle>{i18n.t("Event details")}</ModalTitle>
      <ModalContent>
        <FormProvider {...form}>
          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr" }}>
            {fields?.map((field) => (
              <RHFDHIS2FormField key={field?.name} {...field} />
            ))}
          </div>
        </FormProvider>
      </ModalContent>
      <ModalActions>
        <ButtonStrip>
          <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
          <Button
            loading={loading}
            primary
            onClick={form.handleSubmit(onEditClick)}
          >
            {" "}
            {loading ? `${i18n.t("Updating")}...` : i18n.t("Update")}
          </Button>
        </ButtonStrip>
      </ModalActions>
    </Modal>
  );
}
