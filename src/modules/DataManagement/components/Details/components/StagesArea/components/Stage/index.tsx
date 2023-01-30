import React, {useMemo, useState} from "react";
import {ProgramStage} from "@hisptz/dhis2-utils";
import i18n from '@dhis2/d2-i18n';
import {useProfileData} from "../../../../hooks/data";
import {Event as DHIS2Event} from "@hisptz/dhis2-utils/build/types/interfaces/dhis2/tracker";
import {CustomDataTable, useConfirmDialog} from "@hisptz/dhis2-ui";
import {fromPairs} from "lodash";
import {DateTime} from "luxon";

import {Button, ButtonStrip, Divider, IconChevronDown24, IconChevronUp24, IconEdit24, IconView24, Tag} from '@dhis2/ui'
import {useAlert, useDataMutation} from "@dhis2/app-runtime";
import {ViewEventModal} from "./components/ViewEvent";
import Collapsible from "react-collapsible";
import {ProgramStageConfig} from "../../../../../../../../shared/interfaces/metadata";
import {resolveDataConfigValue} from "../../../../../../../../shared/models/data";
import {EditEventModal} from "./components/EditEvent";

const eventDeleteMutation: any = {
    resource: "events",
    type: "delete",
    id: ({id}: any) => id
}


const columns = [
    {
        label: i18n.t("Status"),
        key: "status",
        get: (event: DHIS2Event) => {
            const isComplete = event.status === "COMPLETED"
            return (<Tag positive={isComplete}>{isComplete ? "Completed" : "Active"}</Tag>)
        }
    },
    {
        label: i18n.t("Reporting date"),
        key: "eventDate",
        get: (event: DHIS2Event) => {
            return DateTime.fromISO(event.eventDate).toFormat('yyyy-MM-dd');
        }
    },
    {
        label: i18n.t("Registration unit"),
        key: "ou",
        get: (event: DHIS2Event) => {
            return event.orgUnitName;
        }
    },
    {
        label: i18n.t("Due date"),
        key: "dueDate",
        get: (event: DHIS2Event) => {
            return DateTime.fromISO(event.dueDate).toFormat('yyyy-MM-dd');
        }
    }
]

export function Stage({stage, initiallyOpen}: { stage: ProgramStageConfig & ProgramStage, initiallyOpen: boolean }) {
    const {profile, refresh} = useProfileData();
    const kbProgram = useMemo(() => profile?.kbProgram, [profile]);
    const [selectedForEdit, setSelectedForEdit] = useState<DHIS2Event | undefined>();
    const [selectedForView, setSelectedForView] = useState<DHIS2Event | undefined>();

    const events = useMemo(() => profile?.getEvents(stage.id) ?? [], [profile]);

    const {show, hide} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}))

    const {confirm,} = useConfirmDialog();
    const [deleteEvent] = useDataMutation(eventDeleteMutation, {
        onComplete: () => {
            show({message: i18n.t("Event deleted successfully"), type: {success: true}});
            refresh();
        },
        onError: (error) => {
            show({message: i18n.t(error.details.message ?? error.message), type: {critical: true}});
            setTimeout(() => hide(), 5000)
        }
    })

    const onEdit = (event: DHIS2Event) => () => {
        setSelectedForEdit(event);
    }

    //Call this to implement delete
    const onDelete = (event: DHIS2Event) => () => () => {
        confirm({
            title: i18n.t("Delete event"),
            message: i18n.t("Are you sure you want to delete this event"),
            loadingText: i18n.t("Deleting"),
            confirmButtonText: i18n.t("Delete"),

            onCancel: () => {

            },
            onConfirm: async () => {
                await deleteEvent({
                    id: event.event
                })
            }
        })
    }

    const onView = (event: DHIS2Event) => () => {
        setSelectedForView(event)
    }

    const sanitizedColumns = useMemo(() => [...stage.columns.map(column => ({
        ...column,
        get: (event: DHIS2Event) => {
            return resolveDataConfigValue(column.get, event)
        }
    })), {
        label: i18n.t("Actions"),
        key: "actions",
        get: (event: DHIS2Event) => {
            return (
                <ButtonStrip>
                    <Button small onClick={onEdit(event)} icon={<IconEdit24/>}/>
                    <Button small onClick={onView(event)} icon={<IconView24/>}/>
                </ButtonStrip>
            )
        }
    }], [columns]);

    const rows = useMemo(() => events.map(event => ({
        ...fromPairs(sanitizedColumns.map(column => ([column.key, column.get(event)]))),
        id: event.event
    })), [events]);

    return (<>
        <Collapsible
            open={initiallyOpen}
            triggerWhenOpen={
                <>
                    <div className="row space-between">
                        <div style={{alignItems: 'flex-end'}} className="row gap-16">
                            <h2 style={{margin: 0}}>{stage.displayName}</h2>
                            {
                                stage.lastUpdated ? (
                                    <h4 style={{margin: 0}}>{i18n.t("Last updated")} {DateTime.fromISO(stage.lastUpdated as string).diffNow('days').negate().rescale().toFormat('dd \'days\' ago')}</h4>
                                ) : null
                            }
                        </div>
                        <div className="icon-button">
                            <IconChevronUp24/>
                        </div>
                    </div>
                    <Divider/>
                </>
            }
            trigger={
                <>
                    <div className="row space-between">
                        <div style={{alignItems: 'flex-end'}} className="row gap-16">
                            <h2 style={{margin: 0}}>{stage.displayName}</h2>
                            {
                                stage.lastUpdated ? (
                                    <h4 style={{margin: 0}}>{i18n.t("Last updated")} {DateTime.fromISO(stage.lastUpdated as string).diffNow('days').negate().rescale().toFormat('dd \'days\' ago')}</h4>
                                ) : null
                            }
                        </div>
                        <div>
                            <IconChevronDown24/>
                        </div>
                    </div>
                    <Divider/>
                </>}>
            <CustomDataTable tableProps={{scrollHeight: "320px"}} rows={rows} columns={sanitizedColumns}/>
        </Collapsible>
        <ViewEventModal onEdit={onEdit} event={selectedForView} onClose={() => setSelectedForView(undefined)}
                        hide={!selectedForView} stage={stage}/>
        {
            !!selectedForEdit && (<EditEventModal event={selectedForEdit} onClose={() => setSelectedForEdit(undefined)}
                                                  hide={!selectedForEdit}
                                                  stage={stage}/>)
        }
    </>)
}
