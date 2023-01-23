import React from "react";
import classes from "../../Details.module.css"
import i18n from '@dhis2/d2-i18n';
import {Divider} from '@dhis2/ui'
import {DetailArea} from "../DetailArea";

export function ProfileArea() {


    return (
        <div className="column gap-16 w-100 h-100">
            <div className={classes['area-container']}>
                <h3 className={classes['area-header']}>{i18n.t("Profile")}</h3>
                <Divider dense/>
                <div className="column gap-8">
                    <DetailArea header={i18n.t("First name")} value={"Elena Mikala"}/>
                    <DetailArea header={i18n.t("First Name")} value={"Elena Mikala"}/>
                </div>
            </div>
            <div className={classes['area-container']}>
                <h3 className={classes['area-header']}>{i18n.t("Enrollment")}</h3>
                <Divider dense/>
            </div>
            <div className={classes['area-container']}>
                <h3 className={classes['area-header']}>{i18n.t("Relationships")}</h3>
                <Divider dense/>
            </div>
        </div>
    )
}
