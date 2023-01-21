import React from "react";
import {DataDimensionSelector} from "./components/DataDimensionSelector";
import {URLSync} from "../../shared/components/URLSync";
import {FilterArea} from "./components/FilterArea";


export default function DataManagement() {

    return (
        <URLSync storeKey="filter">
            <URLSync dataType="string" storeKey="search">
                <div className="column w-100 h-100 gap-32">
                    <DataDimensionSelector/>
                    <FilterArea/>
                </div>
            </URLSync>
        </URLSync>
    )
}
