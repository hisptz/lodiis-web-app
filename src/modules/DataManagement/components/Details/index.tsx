import React, {Suspense} from "react";
import {StagesArea} from "./components/StagesArea";
import {ProfileArea} from "./components/ProfileArea";
import classes from "./Details.module.css"
import FullPageLoader from "../../../../shared/components/Loaders";
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
    const kbProgram = useRecoilValue(KBProgramState)

    return (
        <Suspense fallback={<FullPageLoader/>}>
            <div style={{padding: "0 16px", margin: "16px 0"}} className="column w-100 h-100 gap-16">
                <h1 style={{margin: 0}}>{kbProgram?.config?.name}</h1>
                <div style={{overflow: "auto", height: "calc(100vh - 244px)", position: "relative"}}
                     className={classes['container']}>
                    <StagesArea/>
                    <ProfileArea/>
                </div>
            </div>
        </Suspense>
    )
}
