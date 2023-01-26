import {Button, ButtonStrip, Modal, ModalActions, ModalContent, ModalTitle} from '@dhis2/ui'
import i18n from '@dhis2/d2-i18n';
import React, {useMemo} from 'react';
import {Event as DHIS2Event, ProgramStage} from "@hisptz/dhis2-utils"
import {compact, find} from "lodash";
import {DetailArea} from "../../../../../DetailArea";

export function ViewEventModal({
                                   event,
                                   onClose,
                                   hide,
                                   stage,
                                   onEdit,
                               }: { event?: DHIS2Event; onClose: () => void; hide: boolean; stage: ProgramStage; onEdit: (event: DHIS2Event) => void }) {

    const values = useMemo(() => compact(event?.dataValues.map(({dataElement, value}) => {
        const dataElementConfig = find(stage.programStageDataElements, ['dataElement.id', dataElement])?.dataElement;
        if (dataElementConfig) {
            if (dataElementConfig.optionSet) {
                const option = find(dataElementConfig.optionSet.options, ['code', value]);

                return {
                    header: dataElementConfig?.formName ?? dataElementConfig.displayName,
                    value: option?.name ?? value,
                    id: dataElementConfig.id
                }

            }
            return {
                header: dataElementConfig?.formName ?? dataElementConfig?.displayName,
                value,
                id: dataElementConfig.id
            }
        }
    })), [event, stage]);

    const onEditClick = () => {
        onClose();
        if (event) {
            onEdit(event);
        }
    }

    return (
        <Modal position="middle" hide={hide} onClose={onClose}>
            <ModalTitle>{i18n.t("Event details")}</ModalTitle>
            <ModalContent>
                <div style={{display: "grid", gap: 8, gridTemplateColumns: "1fr"}}>
                    {
                        values.map(detail => (<DetailArea key={detail.id} {...detail} />))
                    }
                </div>
            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button onClick={onEditClick}> {i18n.t("Edit")}</Button>
                    <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
