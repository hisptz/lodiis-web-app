import React from "react";
import {useSetting} from "@dhis2/app-service-datastore";
import {head} from "lodash";
import {Navigate, useParams} from "react-router-dom"
import {ProgramConfig} from "../../shared/interfaces/metadata";

export function DashboardRouting() {
    const [programs] = useSetting("programs", {global: true});

    const firstProgram: ProgramConfig | undefined = head(programs as ProgramConfig[]);

    if (!firstProgram) {
        return null
    }

    return <Navigate to={`/dashboard/${firstProgram?.id}`}/>
}


export default function Dashboard() {
    const {programId} = useParams<{ programId: string }>();
    return (<div className="center column w-100 h-100 align-center">
        <h1>Dashboard {programId}</h1>
    </div>)
}
