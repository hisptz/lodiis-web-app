import React from "react";
import {URLSync} from "../../shared/components/URLSync";
import {ReportDimensionsSelector} from "./components/ReportDimensionSelector";
import {ReportTable} from "./components/ReportTable";
import {ReportHeader} from "./components/ReportHeader";


export default function Reports() {

    return (<URLSync storeKey="filter">
        <div className="column gap-16 w-100 h-100">
            <ReportDimensionsSelector/>
            <ReportHeader/>
            <ReportTable/>
        </div>
    </URLSync>)
}
