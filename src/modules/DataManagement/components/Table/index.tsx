import React from "react";
import {useTableData} from "./hooks/data";
import {CustomDataTable} from "@hisptz/dhis2-ui";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../../../../shared/components/ErrorFallback";
import {useDimension} from "../../../../shared/hooks/dimension";
import {useElementSize} from "usehooks-ts";


export function ErrorBoundedTable() {
    const {orgUnits, search, program, periods} = useDimension();
    return (
        <ErrorBoundary resetKeys={[orgUnits, search, program, periods]} FallbackComponent={ErrorFallback}>
            <Table/>
        </ErrorBoundary>
    )
}

function Table() {
    const {data: rows, loading, pagination, error, columns} = useTableData();
    const [ref, {height}] = useElementSize();
    return (
        <div ref={ref} style={{padding: "0 16px", flex: 1, margin: "32px 0"}}
             className=" w-100">
            <CustomDataTable
                height={800}
                pagination={pagination}
                loading={loading}
                columns={columns}
                rows={rows}
                tableProps={{
                    scrollHeight: `${height - 64}px`
                }}
            />
        </div>
    )
}
