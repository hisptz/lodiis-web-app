import React from "react";
import classes from "../../Details.module.css"
import i18n from "@dhis2/d2-i18n";
import {Divider} from "@dhis2/ui";

export function StagesArea() {

    return (
        <div className={`${classes['area-container']}`}>
            <h3 className={classes['area-header']}>{i18n.t("Stages and events")}</h3>
            <Divider margin={"2px 0"} dense/>
        </div>
    )
}
