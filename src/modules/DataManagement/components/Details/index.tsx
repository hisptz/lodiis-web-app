import React from "react";
import {StagesArea} from "./components/StagesArea";
import {ProfileArea} from "./components/ProfileArea";
import classes from "./Details.module.css"
import {useProfileData} from "./hooks/data";
import FullPageLoader from "../../../../shared/components/Loaders";
import {ErrorThrower} from "../../../../shared/components/ErrorThrower";
import {KBProgramState, KBProgramSync} from "../../../../shared/state/program";
import {useRecoilValue} from "recoil";


export default function KBProfileDetails() {

    return (
        <KBProgramSync>
            <Details/>
        </KBProgramSync>
    )
}

function Details() {
    const {loading, error} = useProfileData();
    const kbProgram = useRecoilValue(KBProgramState)

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
            <h1 style={{margin: 0}}>{kbProgram?.config?.name}</h1>
            <div style={{overflow: "auto", height: "calc(100vh - 244px)", position: "relative"}}
                 className={classes['container']}>
                <StagesArea/>
                <ProfileArea/>
            </div>
        </div>
    )
}
