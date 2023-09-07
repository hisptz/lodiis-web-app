import { VisualizationConfig } from "../../../../shared/interfaces/metadata"
import { Analytics } from "@hisptz/dhis2-utils"
import React, { useEffect } from "react"
import {
  ChartAnalytics,
  ChartConfig,
  CustomPivotTable,
  Map,
  MapProps,
  SingleValueContainer,
} from "@hisptz/dhis2-analytics"
import { filter, find, findIndex, forIn, get, isEmpty, reduce } from "lodash"
import { useDataQuery } from "@dhis2/app-runtime"
import FullPageLoader from "../../../../shared/components/Loaders"
import { useElementSize } from "usehooks-ts"

function getDataValueFromAnalytics(id: string, data?: Analytics) {
  if (!data) {
    return
  }
  const dataIndex = findIndex(data.headers, ["name", "dx"])
  const valueIndex = findIndex(data.headers, ["name", "value"])
  return reduce(
    filter(data.rows, (row) => get(row, dataIndex) === id),
    (acc, value) => {
      return acc + parseFloat(get(value, valueIndex))
    },
    0
  )
}

function resolveVisualization(
  type: "chart" | "table" | "map" | "single-value",
  {
    options,
    data,
    height,
    width,
  }: {
    options?: Record<string, any>
    data?: Analytics
    height: number
    width: number
  }
) {
  switch (type) {
    case "chart":
      if (!data) {
        return null
      }
      const config: ChartConfig = {
        ...(options?.config as ChartConfig),
        height: options?.config?.height ?? height,
      }
      return (
        <ChartAnalytics
          config={config}
          analytics={data}
        />
      )
    case "table":
      if (!data) {
        return null
      }
      const tableConfig: any = {
        ...(options?.config ?? {}),
      }
      return (
        <CustomPivotTable
          config={tableConfig}
          analytics={data}
          tableProps={{
            scrollHeight: `${height}px`,
            scrollWidth: `${width}px`,
          }}
        />
      )
    case "map":
      return <Map {...(options as MapProps)} />
    case "single-value":
      if (!data) {
        return null
      }
      const { title, singleValueItems } = options ?? {}

      const totalValueConfig = find(singleValueItems, ({ total }) => total)

      const totalValue = {
        ...totalValueConfig,
        value: getDataValueFromAnalytics(totalValueConfig.id, data) ?? 1,
      }

      function getItemValue({
        id,
        label,
        percentage,
      }: {
        id: string
        label: string
        percentage?: boolean
      }) {
        const value = getDataValueFromAnalytics(id, data) ?? 0
        return {
          id,
          label,
          value,
          percentage: percentage ? value / totalValue.value : undefined,
        }
      }

      const sanitizedSingleValueItems = singleValueItems.map(getItemValue)

      return (
        <SingleValueContainer
          title={""}
          singleValueItems={sanitizedSingleValueItems}
        />
      )
  }
}

function getDimensions(dimension: {
  dx?: string[]
  ou?: string[]
  pe?: string[]
}) {
  const dimensions: string[] = []

  forIn(dimension, (value, key) => {
    if (!isEmpty(value)) {
      dimensions.push(`${key}:${value?.join(";")}`)
    }
  })
  return dimensions
}

const analyticsQuery = {
  analytics: {
    resource: "analytics",
    params: ({ dimension, filter }: any) => ({
      dimension: getDimensions(dimension),
      filter: getDimensions(filter),
      includeNumDen: true,
      includeMetadataDetails: true,
    }),
  },
}

export function Visualization(config: VisualizationConfig) {
  const { dimension, filter, type, options } = config ?? {}
  const [containerRef, { height, width }] = useElementSize()
  const { data, loading, refetch } = useDataQuery(analyticsQuery, {
    lazy: true,
    variables: {
      dimension,
      filter,
    },
  })
  useEffect(() => {
    if (dimension) {
      refetch({
        dimension,
        filter,
      })
    }
  }, [])

  if (loading) {
    return <FullPageLoader minHeight={200} />
  }

  return (
    <div
      ref={containerRef}
      style={{ maxHeight: 800 }}
      className="column gap-8"
    >
      <h2 style={{ margin: "8px 8px" }}>{config?.options?.title}</h2>
      {resolveVisualization(type, {
        options,
        data: data?.analytics as Analytics,
        height,
        width,
      })}
    </div>
  )
}
