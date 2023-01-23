import React from "react";
import classes from "../../Details.module.css"

export function DetailArea({header, value}: { header: string; value: string | React.ReactNode }) {

    return (
        <div className={classes['detail-area']}>
            <span className={classes['detail-area-header']}>
                {header}
            </span>
            <span className={classes['detail-area-value']}>
                {value}
            </span>
        </div>
    )
}
