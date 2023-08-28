import { DropdownButton, FlyoutMenu, MenuItem } from "@dhis2/ui"
import i18n from "@dhis2/d2-i18n"
import React, { useState } from "react"
import { useBoolean } from "usehooks-ts"
import { useReportDimension } from "../../../ReportTable/hooks/dimension"
import { useRecoilValue } from "recoil"
import { ReportDataState } from "../../../ReportTable/hooks/data"
import { isEmpty } from "lodash"
import { downloadFile } from "../../../../../../shared/utils/download"

export function ReportDownload() {
  const {
    value: openDownloadMenu,
    setTrue: openMenu,
    setFalse: closeMenu,
  } = useBoolean(false)
  const { report } = useReportDimension()
  const reportData = useRecoilValue(ReportDataState(report?.id))

  const onPrintClick = (type: "xlsx" | "csv" | "json") => () => {
    closeMenu
    if (reportData && !isEmpty(reportData) && report) {
      downloadFile(type, reportData, {
        filename: `${report.name}`,
      })
    }
  }

  return (
    <DropdownButton
      disabled={!reportData || isEmpty(reportData)}
      open={openDownloadMenu}
      onClick={openMenu}
      component={
        <FlyoutMenu>
          <MenuItem
            onClick={onPrintClick("xlsx")}
            label={i18n.t("Excel")}
          />
          <MenuItem
            onClick={onPrintClick("csv")}
            label={i18n.t("CSV")}
          />
          <MenuItem
            onClick={onPrintClick("json")}
            label={i18n.t("JSON")}
          />
        </FlyoutMenu>
      }
    >
      {i18n.t("Download")}
    </DropdownButton>
  )
}
