import React from "react";
import {Tag} from '@dhis2/ui'
import {useReportDimension} from "../ReportTable/hooks/dimension";


export function ReportHeader() {
    const {report} = useReportDimension();

    if (!report) {
        return null;
    }

    return (
        <div className="w-100 row center align-center">
            <Tag>
                {report.name}
            </Tag>
        </div>
    )
}
