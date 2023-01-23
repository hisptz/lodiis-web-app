import {SearchCriteriaValues} from "../../FilterArea/components/SearchArea";
import {find, forIn, fromPairs, head, isEmpty, sortBy} from "lodash";
import {ATTRIBUTES, DEFAULT_PROGRAM_CONFIG, PROGRAM_CONFIG, TEI_FIELDS} from "../../../../../constants/metadata";
import {useDataQuery} from "@dhis2/app-runtime";
import {useRecoilValue} from "recoil";
import {DimensionState} from "../../../../../shared/state/dimensions";
import {useEffect, useMemo, useState} from "react";
import {PeriodUtility, TrackedEntityInstance} from "@hisptz/dhis2-utils";
import {Interval} from "luxon";
import {SearchValuesState} from "../../FilterArea/components/SearchArea/state/search";
import {ColumnState} from "../state/column";
import {useDownloadData} from "../../../hooks/download";


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


export const DATA_QUERY = {
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
    const [sortState, setSortState] = useState<{ name: string; direction: "asc" | "desc" | "default" }>();
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
        if (!program) {
            return [];
        }
        const config = find(PROGRAM_CONFIG, ['id', program]) ?? DEFAULT_PROGRAM_CONFIG;
        if (!config) {
            throw Error(`There is no configuration for the program ${program}`)
        }
        return config?.columns.filter((column: { key: string | number; }) => columnVisibility?.[column.key]);
    }, [program, columnVisibility]);

    const {download, downloading} = useDownloadData({
        resource: 'trackedEntityInstances',
        query: DATA_QUERY,
        queryKey: "tei",
        mapping: (data: TrackedEntityInstance) => {
            console.log(data);
            return fromPairs(columns?.map(column => ([column.label, column.get(data)])))
        }

    });

    const onDownload = (type: string) => {
        if (!isEmpty(ou) && !isEmpty(sanitizedPeriod) && !isEmpty(program)) {
            download(type, {
                ou,
                pe: sanitizedPeriod,
                program,
                search: searchValue
            })
        }
    }

    const {refetch, loading, error, fetching} = useDataQuery(DATA_QUERY,
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
        const data = teis.map(tei => {
            return {
                ...fromPairs(columns?.map(column => [column.key, column.get(tei)])),
                id: tei.trackedEntityInstance
            }
        });

        if (sortState) {
            if (sortState.direction === "default") {
                return data;
            }
            const sortedData = sortBy(data, sortState.name);
            if (sortState.direction === "asc") {
                return sortedData;
            } else {
                return sortedData.reverse();
            }
        } else {
            return data;
        }

    }, [response, columnVisibility, loading, fetching, sortState]);

    const onPageChange = (page: number) => {
        refetch({page})
    }
    const onPageSizeChange = (pageSize: number) => {
        refetch({pageSize, page: 1})
    }


    const onSort = (sort: any) => {
        setSortState(sort)
    }


    return {
        loading: loading || fetching,
        sortState,
        onSort,
        refetch,
        columns,
        error,
        data: sanitizedData,
        columnVisibility,
        downloading,
        download: onDownload,
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