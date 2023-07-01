import {Button, ButtonStrip, Modal, ModalActions, ModalContent, ModalTitle} from '@dhis2/ui'
import i18n from '@dhis2/d2-i18n';
import React, {useMemo} from 'react';
import {Event as DHIS2Event, ProgramStage, uid} from "@hisptz/dhis2-utils"
import {DetailArea} from "../../../../../DetailArea";
import {ProgramStageConfig} from "../../../../../../../../../../shared/interfaces/metadata";
import {resolveDataConfigValue} from "../../../../../../../../../../shared/models/data";

export function ViewEventModal({
                                   event,
                                   onClose,
                                   hide,
                                   stage,
                               }: { event?: DHIS2Event; onClose: () => void; hide: boolean; stage: ProgramStageConfig & ProgramStage; onEdit: (event: DHIS2Event) => void }) {


    const values = useMemo(() => {
            if (!event) {
                return;
            }
            return stage.view.map(({ key, get, field, label }) => {
              return {
                id: key ?? field?.name ?? uid(),
                value: resolveDataConfigValue(get, event),
                header: label ?? field?.label ?? "",
              };
            });
        }
        , [event, stage]);

    return (
        <Modal position="middle" hide={hide} onClose={onClose}>
            <ModalTitle>{i18n.t("Event details")}</ModalTitle>
            <ModalContent>
                <div style={{display: "grid", gap: 8, gridTemplateColumns: "1fr"}}>
                    {
                        values?.map(detail => (<DetailArea key={detail.id} {...detail} />))
                    }
                </div>
            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
