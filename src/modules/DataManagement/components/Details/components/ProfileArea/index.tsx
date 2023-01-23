import React from "react";
import i18n from '@dhis2/d2-i18n';
import {DetailArea} from "../DetailArea";
import {AreaContainer} from "../AreaContainer";

export function ProfileArea() {


    return (
        <div className="column gap-16 w-100 h-100">


            <AreaContainer heading={i18n.t("Profile")}>
                <div className="column gap-8">
                    <DetailArea header={i18n.t("First name")} value={"Elena Mikala"}/>
                    <DetailArea header={i18n.t("First Name")} value={"Elena Mikala"}/>
                </div>
            </AreaContainer>
            <AreaContainer heading={i18n.t("Enrollment")}>

            </AreaContainer>
            <AreaContainer heading={i18n.t("Relationships")}>

            </AreaContainer>
        </div>
    )
}
