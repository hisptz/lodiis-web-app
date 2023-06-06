import React from "react";
import {Tag} from '@dhis2/ui'
import {useReportDimension} from "../ReportTable/hooks/dimension";
import {ReportDownload} from "./components/ReportDownload";

export function ReportHeader() {
    const {report} = useReportDimension();

    if (!report) {
        return null;
    }

    return (
        <div className="column gap-8 w-100">
            <div style={{justifyContent: "flex-end", padding: "0 16px"}} className="row w-100">
                <ReportDownload/>
            </div>
            <div className="w-100 row center align-center">
                <Tag>
                    {report.name}
                </Tag>
            </div>
        </div>
    )
}
