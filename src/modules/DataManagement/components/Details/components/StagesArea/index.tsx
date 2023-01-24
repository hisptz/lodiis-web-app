import React from "react";
import i18n from "@dhis2/d2-i18n";
import {AreaContainer} from "../AreaContainer";
import {useData} from "../../hooks/data";
import {Stage} from "./components/Stage";


export function StagesArea() {
    const {profileData: profile} = useData();


    return (
        <AreaContainer heading={i18n.t("Stages and events")}>
            <div style={{padding: "0 8px"}} className="column gap-16">
                {
                    profile?.getProgramStages()?.map(programStage => (
                        <Stage key={`${programStage.id}-area`} stage={programStage}/>))
                }
            </div>
        </AreaContainer>
    )
}
