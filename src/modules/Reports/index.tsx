import React from "react";
import {URLSync} from "../../shared/components/URLSync";
import {ReportDimensionsSelector} from "./components/ReportDimensionSelector";


export default function Reports() {


    return (<URLSync storeKey="filter">
        <div className="column gap-16 w-100 h-100">
            <ReportDimensionsSelector/>
        </div>
    </URLSync>)
}
