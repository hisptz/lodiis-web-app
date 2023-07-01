import React from "react";
import {DataDimensionSelector} from "./components/DataDimensionSelector";
import {URLSync} from "../../shared/components/URLSync";
import {FilterArea} from "./components/FilterArea";
import {ErrorBoundedTable} from "./components/Table";
import {KBProgramSync} from "../../shared/state/program";


export default function DataManagement() {

    return (
      <URLSync storeKey="filter">
        <URLSync dataType="string" storeKey="search">
          <div className="column w-100 h-100 gap-16">
            <DataDimensionSelector />
            <KBProgramSync>
              <FilterArea />
              <div style={{ height: "calc(100vh - 292px)" }} className="w-100">
                <ErrorBoundedTable />
              </div>
            </KBProgramSync>
          </div>
        </URLSync>
      </URLSync>
    );
}
