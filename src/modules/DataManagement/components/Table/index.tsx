import React from "react";
import {useTableData} from "./hooks/data";
import {CustomDataTable} from "@hisptz/dhis2-ui";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../../../../shared/components/ErrorFallback";
import {useDimension} from "../../../../shared/hooks/dimension";
import {useElementSize} from "usehooks-ts";
import {CircularLoader} from "@dhis2/ui";
import {ErrorThrower} from "../../../../shared/components/ErrorThrower";
import i18n from '@dhis2/d2-i18n';
import {isEmpty} from "lodash";
import EmptyList from "../../../../shared/components/EmptyList";
import {useNavigate} from "react-router-dom";

export function ErrorBoundedTable() {
    const {orgUnits, search, program, periods} = useDimension();
    return (
        <ErrorBoundary resetKeys={[orgUnits, search, program, periods]} FallbackComponent={ErrorFallback}>
            <Table/>
        </ErrorBoundary>
    )
}

function Table() {
    const {data: rows, loading, pagination, error, columns, refetch, sortState, onSort} = useTableData();
    const {dimensionsNotSelected, program} = useDimension();
    const [ref, {height}] = useElementSize();
    const navigate = useNavigate();

    const onRowClick = (id: string) => {
        navigate(`view/${id}?program=${program}`);
    }

    if (isEmpty(rows) && loading) {

        return (
            <ErrorBoundary onReset={() => {
                refetch()
            }} FallbackComponent={ErrorFallback}>
                <ErrorThrower error={error}/>
                <div className="column w-100 h-100 center align-center">
                    <CircularLoader small/>
                </div>
            </ErrorBoundary>
        )
    }

    if (isEmpty(rows)) {
        return <EmptyList
            message={dimensionsNotSelected ?
                i18n.t("Select intervention, organisation unit, and period to start") :
                i18n.t("There are no results for the selected intervention, period, and organisation unit")}
        />
    }

    if (error) {
        throw error;
    }

    return (
        <div ref={ref} style={{padding: "0 16px", flex: 1, margin: "32px 0"}}
             className=" w-100">
            <CustomDataTable
                onRowClick={onRowClick}
                onSort={onSort}
                sortState={sortState}
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
