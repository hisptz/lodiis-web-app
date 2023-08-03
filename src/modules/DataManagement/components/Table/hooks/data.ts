import { SearchCriteriaValues } from "../../FilterArea/components/SearchArea"
import { compact, forIn, head, isEmpty, sortBy } from "lodash"
import { TEI_FIELDS } from "../../../../../constants/metadata"
import { useDataQuery } from "@dhis2/app-runtime"
import { useRecoilValue } from "recoil"
import { useEffect, useMemo, useState } from "react"
import { PeriodUtility, TrackedEntityInstance } from "@hisptz/dhis2-utils"
import { Interval } from "luxon"
import { SearchValuesState } from "../../FilterArea/components/SearchArea/state/search"
import { useDownloadData } from "../../../hooks/download"
import { ProfileData } from "../../../../../shared/models/data"
import { useDimension } from "../../../../../shared/hooks/dimension"
import { KBProgramState } from "../../../../../shared/state/program"
import { ColumnState } from "../state/column"

function sanitizeFilters(searchValues: SearchCriteriaValues) {
  const filter: string[] = []

  forIn(searchValues, (value, key) => {
    if (!value) {
      return
    }
    filter.push(`${key}:like:${value}`)
  })
  return filter
}

export const DATA_QUERY = {
  tei: {
    resource: "trackedEntityInstances",
    params: ({ search, ou, pe, program, page, pageSize }: any) => {
      const filter = sanitizeFilters(search)
      const isSearchActive = !isEmpty(filter)
      return {
        program,
        filter,
        programStartDate: !isSearchActive ? pe.startDate : undefined,
        programEndDate: !isSearchActive ? pe.endDate : undefined,
        ou: !isSearchActive ? ou.join(";") : undefined,
        ouMode: !isSearchActive ? "DESCENDANTS" : "ACCESSIBLE",
        page,
        pageSize,
        totalPages: true,
        fields: TEI_FIELDS,
      }
    },
  },
}

export function useTableData() {
  const {
    periods,
    program: programId,
    orgUnits: ou,
    dimensionsNotSelected,
  } = useDimension()
  const program = useRecoilValue(KBProgramState)
  const [sortState, setSortState] = useState<{
    name: string
    direction: "asc" | "desc" | "default"
  }>()
  const columnVisibility = useRecoilValue(ColumnState)
  const [response, setResponse] = useState<any>()

  const { page, pageSize, total, pageCount } = response?.pager ?? {
    page: 1,
    pageSize: 50,
  }

  const sanitizedPeriod = useMemo(() => {
    if (!periods) {
      return
    }
    const periodIntervals = periods?.map(
      (periodId: string) => PeriodUtility.getPeriodById(periodId).interval
    )
    const commonInterval = Interval.merge(periodIntervals)
    if (commonInterval.length === 1) {
      const interval = head(commonInterval)
      return {
        startDate: interval?.start?.toFormat("yyyy-MM-dd"),
        endDate: interval?.end?.toFormat("yyyy-MM-dd"),
      }
    } else {
      //TODO: Hehe let's see how you handle this one;
      console.info("Could not merge the intervals", periods)
    }
  }, [periods])
  const searchValue = useRecoilValue(
    SearchValuesState(program?.searchFieldKeys)
  )

  const columns = useMemo(() => {
    return (
      program?.tableColumns.filter(
        (column: { key: string | number }) => columnVisibility?.[column.key]
      ) ?? []
    )
  }, [program, columnVisibility])

  const { download, downloading } = useDownloadData({
    resource: "trackedEntityInstances",
    query: DATA_QUERY,
    queryKey: "tei",
    mapping: (data: TrackedEntityInstance) => {
      if (!program) {
        return {}
      }
      return new ProfileData(data, program).getTableData()
    },
  })

  const onDownload = (type: string) => {
    if (!isEmpty(ou) && !isEmpty(sanitizedPeriod) && !isEmpty(program)) {
      download(type, {
        ou,
        pe: sanitizedPeriod,
        program,
        search: searchValue,
      })
    }
  }

  const { refetch, loading, error, fetching } = useDataQuery(DATA_QUERY, {
    lazy: true,
    variables: {
      ou,
      pe: sanitizedPeriod,
      program,
      search: searchValue,
    },
    onComplete: (data) => {
      setResponse(data?.tei)
    },
  })

  useEffect(() => {
    if (!dimensionsNotSelected) {
      refetch({
        ou,
        pe: sanitizedPeriod,
        program: programId,
        search: searchValue,
      })
    }
  }, [dimensionsNotSelected, ou, sanitizedPeriod, programId, searchValue])

  const sanitizedData = useMemo(() => {
    const teis: TrackedEntityInstance[] = response?.trackedEntityInstances ?? []
    const data = compact(
      teis.map((tei) => {
        if (!program) return
        const profile = new ProfileData(tei, program)
        return profile.getTableData()
      })
    )

    if (sortState) {
      if (sortState.direction === "default") {
        return data
      }
      const sortedData = sortBy(data, sortState.name)
      if (sortState.direction === "asc") {
        return sortedData
      } else {
        return sortedData.reverse()
      }
    } else {
      return data
    }
  }, [program, response, sortState])

  const onPageChange = (page: number) => {
    refetch({ page })
  }
  const onPageSizeChange = (pageSize: number) => {
    refetch({ pageSize, page: 1 })
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
