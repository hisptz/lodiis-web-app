import React, {useMemo} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {useSetting} from "@dhis2/app-service-datastore";
import {find} from "lodash";
import {StagesArea} from "./components/StagesArea";
import {ProfileArea} from "./components/ProfileArea";
import classes from "./Details.module.css"
import {useData} from "./hooks/data";
import FullPageLoader from "../../../../shared/components/Loaders";
import {ErrorThrower} from "../../../../shared/components/ErrorThrower";

export default function Details() {
    const {teiId} = useParams();
    const {loading, error} = useData();
    const [searchParams] = useSearchParams();
    const [programs] = useSetting("programs", {global: true})
    const program = useMemo(() => {
        const programId = searchParams.get('program');
        return find(programs, ['id', programId]);
    }, [searchParams]);


    if (loading) {
        return (<FullPageLoader/>)
    }

    if (error) {
        if (error.message.includes("unknown")) {
            return (
                <ErrorThrower
                    error={Error(error.details.message)}/>)
        }
        return (<ErrorThrower error={error}/>)
    }

    return (
        <div style={{padding: "0 16px", margin: "16px 0"}} className="column w-100 h-100 gap-16">
            <h1 style={{margin: 0}}>{program?.name}</h1>
            <div style={{overflow: "auto", height: "calc(100vh - 244px)", position: "relative"}}
                 className={classes['container']}>
                <StagesArea/>
                <ProfileArea/>
            </div>
        </div>
    )
}
