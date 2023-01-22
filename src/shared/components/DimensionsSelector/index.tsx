import React from "react";
import classes from "./DimensionsSelector.module.css"
import {Card} from '@dhis2/ui'


export interface DimensionsSelectorProps {
    children: React.ReactNode
}

export function DimensionsSelector({children}: DimensionsSelectorProps) {
    return (
        <div className={classes["selection-card"]}>
            <Card>
                <div style={{padding: "0 8px"}} className="row align-center ">
                    {children}
                </div>
            </Card>
        </div>
    )
}
