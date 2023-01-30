import React from "react";
import {DashboardList} from "../DashboardList";
import ErrorFallback from "../../../../shared/components/ErrorFallback";
import {Outlet} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";


export function DashboardOutlet() {

    return (
        <div className="column gap-8 h-100 w-100">
            <DashboardList/>
            <div className=" w-100" style={{flex: 1}}>
                <ErrorBoundary resetKeys={[location]} FallbackComponent={ErrorFallback}>
                    <Outlet/>
                </ErrorBoundary>
            </div>
        </div>
    )
}
