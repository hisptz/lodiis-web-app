import {Button, IconArrowLeft24} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import React from "react";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../../../../shared/components/ErrorFallback";


export function DataManagementOutlet() {
    const location = useLocation();
    const navigate = useNavigate();

    const canGoBack = location.pathname !== '/data-management';

    return (
        <div style={{overflow: 'hidden'}} className="column gap-8 w-100 h-100">
            {canGoBack ? (
                <div style={{padding: 16, height: 32}}>
                    <Button icon={<IconArrowLeft24/>} onClick={() => navigate(-1)}>
                        {i18n.t('Back')}
                    </Button>
                </div>
            ) : null}
            <div className=" w-100" style={{overflow: 'auto', flex: 1}}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Outlet/>
                </ErrorBoundary>
            </div>
        </div>
    )
}
