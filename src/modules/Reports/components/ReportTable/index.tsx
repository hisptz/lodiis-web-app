import React from "react";
import {useReportPaginatedData} from "./hooks/data";
import {CustomDataTable} from "@hisptz/dhis2-ui";
import {useElementSize} from "usehooks-ts";
import FullPageLoader, {FullPageProgressLoader} from "../../../../shared/components/Loaders";

export function ReportTable() {
    const {loading, columns, rows, pagination, chunking, percentage} = useReportPaginatedData();
    const [containerRef, {width, height}] = useElementSize();

    if (loading && percentage === undefined) {
        return <FullPageLoader/>
    }

    if (percentage !== undefined) {
        return (<FullPageProgressLoader percentage={percentage}/>)
    }

    return (
        <div ref={containerRef} style={{maxHeight: "calc(100vh - 280px)"}} className="p-16 w-100 h-100">
            <CustomDataTable
                pagination={pagination}
                tableProps={{
                    scrollHeight: `${height - 80}px`,
                    scrollWidth: `${width}px`
                }}
                loading={chunking || loading}
                columns={columns ?? []}
                rows={rows}
            />
        </div>
    )
}
