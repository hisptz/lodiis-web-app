import React from "react";
import classes from "./DimensionsSelector.module.css"
import {Card} from '@dhis2/ui'
import {DimensionSelector, DimensionSelectorProps} from "./components/DimensionSelector";


export interface DimensionsSelectorProps {
    selectors: DimensionSelectorProps[]
}

export function DimensionsSelector({selectors}: DimensionsSelectorProps) {
    return (
        <div className={classes["selection-card"]}>
            <Card>
                <div style={{padding: "0 8px"}} className="row align-center ">
                    {
                        selectors?.map((props) => (
                            <DimensionSelector
                                {...props}
                            />
                        ))
                    }
                </div>
            </Card>
        </div>
    )
}
