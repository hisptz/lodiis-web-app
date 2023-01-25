import React from "react";
import {ProgramStage} from "@hisptz/dhis2-utils";
import i18n from '@dhis2/d2-i18n';
import {useData} from "../../../../hooks/data";
import {Event as DHIS2Event} from "@hisptz/dhis2-utils/build/types/interfaces/dhis2/tracker";
import {CustomDataTable, useConfirmDialog} from "@hisptz/dhis2-ui";
import {fromPairs} from "lodash";
import {DateTime} from "luxon";

import {Button, ButtonStrip, IconDelete24, IconEdit24, Tag} from '@dhis2/ui'
import {useAlert, useDataMutation} from "@dhis2/app-runtime";

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

export function Stage({stage}: { stage: ProgramStage }) {
    const {profileData: profile, refetch} = useData();
    const events = profile?.getEvents(stage.id) ?? [];

    const {show, hide} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}))

    const {confirm,} = useConfirmDialog();
    const [deleteEvent] = useDataMutation(eventDeleteMutation, {
        onComplete: () => {
            show({message: i18n.t("Event deleted successfully"), type: {success: true}});
            refetch();
        },
        onError: (error) => {
            show({message: i18n.t(error.details.message ?? error.message), type: {critical: true}});
            setTimeout(() => hide(), 5000)
        }
    })

    const onEdit = (event: DHIS2Event) => () => {

    }

    const onDelete = (event: DHIS2Event) => () => {
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

    const sanitizedColumns = [...columns, {
        label: i18n.t("Actions"),
        key: "actions",
        get: (event: DHIS2Event) => {
            return (
                <ButtonStrip>
                    <Button small onClick={onEdit(event)} icon={<IconEdit24/>}/>
                    <Button small destructive onClick={onDelete(event)} icon={<IconDelete24/>}/>
                </ButtonStrip>
            )
        }
    }]

    const rows = events.map(event => ({
        ...fromPairs(sanitizedColumns.map(column => ([column.key, column.get(event)]))),
        id: event.event
    }));


    return (<div className="column ">
        <div style={{alignItems: 'flex-end'}} className="row gap-16">
            <h2>{stage.displayName}</h2>
            {
                stage.lastUpdated ? (
                    <h4>{i18n.t("Last updated")} {DateTime.fromISO(stage.lastUpdated as string).diffNow('days').negate().rescale().toFormat('dd \'days\' ago')}</h4>
                ) : null
            }
        </div>
        <div className="">
            <CustomDataTable tableProps={{scrollHeight: "320px"}} rows={rows} columns={sanitizedColumns}/>
        </div>
    </div>)
}
