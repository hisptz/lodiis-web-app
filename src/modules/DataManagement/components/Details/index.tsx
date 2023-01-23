import React, {useMemo} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {useSetting} from "@dhis2/app-service-datastore";
import {find} from "lodash";
import {StagesArea} from "./components/StagesArea";
import {ProfileArea} from "./components/ProfileArea";
import classes from "./Details.module.css"

export default function Details() {
    const {teiId} = useParams();
    const [searchParams] = useSearchParams();
    const [programs] = useSetting("programs", {global: true})

    const program = useMemo(() => {
        const programId = searchParams.get('program');
        return find(programs, ['id', programId]);
    }, [searchParams]);


    return (
        <div style={{padding: "0 16px"}} className="column w-100 h-100 gap-16">
            <h1>{program?.name}</h1>
            <div className={classes['container']}>
                <StagesArea/>
                <ProfileArea/>
            </div>
        </div>
    )
}
