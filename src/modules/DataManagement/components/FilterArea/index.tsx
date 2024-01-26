import React, { useState } from "react";
import { ButtonStrip, DropdownButton, FlyoutMenu, MenuItem } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { SearchArea } from "./components/SearchArea";
import { ColumnArea } from "./components/ColumnArea";
import { useTableData } from "../Table/hooks/data";

export function FilterArea() {
  const [downloadStateRef, setDownloadStateRef] = useState(false);
  const { download, downloading } = useTableData();
  const onDownloadClick = (type: "xlsx" | "json" | "csv") => () => {
    setDownloadStateRef(false);
    download(type);
  };

  return (
    <div style={{ padding: "0 16px" }} className=" row space-between w-100">
      <SearchArea />
      <ButtonStrip>
        <ColumnArea />
        <DropdownButton
          loading={downloading}
          onClick={() => setDownloadStateRef((prevState) => !prevState)}
          open={downloadStateRef}
          component={
            <div className="w-100">
              <FlyoutMenu>
                <MenuItem
                  label={i18n.t("Excel")}
                  onClick={onDownloadClick("xlsx")}
                />
                <MenuItem
                  label={i18n.t("CSV")}
                  onClick={onDownloadClick("csv")}
                />
                <MenuItem
                  label={i18n.t("JSON")}
                  onClick={onDownloadClick("json")}
                />
              </FlyoutMenu>
            </div>
          }
        >
          {!downloading ? i18n.t("Download") : i18n.t("Downloading...")}
        </DropdownButton>
      </ButtonStrip>
    </div>
  );
}
