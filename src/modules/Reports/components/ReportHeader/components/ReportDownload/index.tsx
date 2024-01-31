import { DropdownButton, FlyoutMenu, MenuItem } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import React, { useState } from "react";
import { useReportDimension } from "../../../ReportTable/hooks/dimension";
import { useRecoilValue } from "recoil";
import { ReportDataState } from "../../../ReportTable/hooks/data";
import { isEmpty } from "lodash";
import { downloadFile } from "../../../../../../shared/utils/download";

export function ReportDownload() {
  const [downloadStateRef, setDownloadStateRef] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const { report } = useReportDimension();
  const reportData = useRecoilValue(ReportDataState(report?.id));

  const onPrintClick = (type: "xlsx" | "csv" | "json") => async () => {
    setDownloading(true);
    setDownloadStateRef(false);
    if (reportData && !isEmpty(reportData) && report) {
      await downloadFile(type, reportData, {
        filename: `${report.name}`,
      });
    }
    setDownloading(false);
  };

  return (
    <DropdownButton
      disabled={!reportData || isEmpty(reportData)}
      open={downloadStateRef}
      onClick={() => setDownloadStateRef((prevState) => !prevState)}
      component={
        <FlyoutMenu>
          <MenuItem onClick={onPrintClick("xlsx")} label={i18n.t("Excel")} />
          <MenuItem onClick={onPrintClick("csv")} label={i18n.t("CSV")} />
          <MenuItem onClick={onPrintClick("json")} label={i18n.t("JSON")} />
        </FlyoutMenu>
      }
    >
      {downloading ? i18n.t("Downloading...") : i18n.t("Download")}
    </DropdownButton>
  );
}
