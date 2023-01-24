import React from "react";
import {ProgramStage} from "@hisptz/dhis2-utils";
import i18n from '@dhis2/d2-i18n';
import {useData} from "../../../../hooks/data";
import {Event as DHIS2Event} from "@hisptz/dhis2-utils/build/types/interfaces/dhis2/tracker";
import {CustomDataTable} from "@hisptz/dhis2-ui";
import {fromPairs} from "lodash";
import {DateTime} from "luxon";

import {Tag} from '@dhis2/ui'


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
    const {profileData: profile} = useData();
    const events = profile?.getEvents(stage.id) ?? [];

    const rows = events.map(event => ({
        ...fromPairs(columns.map(column => ([column.key, column.get(event)]))),
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
            <CustomDataTable tableProps={{scrollHeight: "500px"}} rows={rows} columns={columns}/>
        </div>
    </div>)
}
