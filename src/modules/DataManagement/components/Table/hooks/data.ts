import {SearchCriteriaValues} from "../../FilterArea/components/SearchArea";
import {forIn, fromPairs, head, isEmpty} from "lodash";
import {ATTRIBUTES, columnsConfig, TEI_FIELDS} from "../../../../../constants/metadata";
import {useDataQuery} from "@dhis2/app-runtime";
import {useRecoilValue} from "recoil";
import {DimensionState} from "../../../../../shared/state/dimensions";
import {useEffect, useMemo, useState} from "react";
import {PeriodUtility, TrackedEntityInstance} from "@hisptz/dhis2-utils";
import {Interval} from "luxon";
import {SearchValuesState} from "../../FilterArea/components/SearchArea/state/search";
import {ColumnState} from "../state/column";


function sanitizeFilters(searchValues: SearchCriteriaValues) {
    const filter: string[] = [];

    forIn(searchValues, (value, key) => {
        if (!value) {
            return;
        }
        switch (key) {
            case "primaryUIC":
                filter.push(`${ATTRIBUTES.PRIMARY_UIC}:like:${value}`);
                break;
            case "firstName":
                filter.push(`${ATTRIBUTES.FIRST_NAME}:like:${value}`);
                break;
            case "surname":
                filter.push(`${ATTRIBUTES.SURNAME}:like:${value}`)
        }
    });
    return filter;
}


const query = {
    tei: {
        resource: "trackedEntityInstances",
        params: ({search, ou, pe, program, page, pageSize}: any) => {

            return {
                program,
                filter: sanitizeFilters(search),
                programStartDate: pe.startDate,
                programEndDate: pe.endDate,
                ou: ou.join(";"),
                ouMode: "DESCENDANTS",
                page,
                pageSize,
                totalPages: true,
                fields: TEI_FIELDS
            }
        }
    }
}

export function useTableData() {
    const periods = useRecoilValue(DimensionState("pe"));
    const [response, setResponse] = useState<any>();

    const {page, pageSize, total, pageCount} = response?.pager ?? {page: 1, pageSize: 50};

    const sanitizedPeriod = useMemo(() => {
        if (!periods) {
            return;
        }
        const periodIntervals = periods?.map((periodId: string) => PeriodUtility.getPeriodById(periodId).interval);
        const commonInterval = Interval.merge(periodIntervals);
        if (commonInterval.length === 1) {
            const interval = head(commonInterval);
            return {
                startDate: interval?.start?.toFormat('yyyy-MM-dd'),
                endDate: interval?.end?.toFormat('yyyy-MM-dd')
            }
        } else {
            //TODO: Hehe let's see how you handle this one;
            console.info("Could not merge the intervals", periods)
        }
    }, [periods]);
    const searchValue = useRecoilValue(SearchValuesState);

    const ou = useRecoilValue(DimensionState("ou"));
    const program = head(useRecoilValue(DimensionState("program")));
    const columnVisibility = useRecoilValue(ColumnState);

    const columns = useMemo(() => {
        const config = columnsConfig[program as string];
        if (!config) {
            throw Error(`There is no configuration for the program ${program}`)
        }
        return config?.columns.filter((column) => columnVisibility[column.key]);
    }, [program, columnVisibility]);

    const {refetch, loading, error, fetching} = useDataQuery(query,
        {
            lazy: true,
            variables: {
                ou,
                pe: sanitizedPeriod,
                program,
                search: searchValue
            }, onComplete: (data) => {
                setResponse(data?.tei)
            }
        });

    useEffect(() => {
        if (!isEmpty(ou) && !isEmpty(sanitizedPeriod) && !isEmpty(program)) {
            refetch({
                ou,
                pe: sanitizedPeriod,
                program,
                search: searchValue
            })
        }
    }, [sanitizedPeriod, ou, program, searchValue]);

    const sanitizedData = useMemo(() => {
        const teis: TrackedEntityInstance[] = response?.trackedEntityInstances ?? [];
        return teis.map(tei => {
            return {
                ...fromPairs(columns?.map(column => [column.key, column.get(tei)])),
                id: tei.id
            }
        });
    }, [response, columnVisibility, loading, fetching]);

    const onPageChange = (page: number) => {
        refetch({page})
    }
    const onPageSizeChange = (pageSize: number) => {
        refetch({pageSize, page: 1})
    }

    return {
        loading: loading || fetching,
        refetch,
        columns,
        error,
        data: sanitizedData,
        columnVisibility,
        pagination: {
            page,
            pageSize,
            pageCount,
            total,
            onPageChange,
            onPageSizeChange,
        },
    }
}
