import {DimensionsSelector} from "../../../../shared/components/DimensionsSelector";
import React, {useMemo} from "react";
import {
    OrgUnitDimensionSelector
} from "../../../../shared/components/DimensionsSelector/components/OrgUnitDimensionSelector";
import {
    PeriodDimensionSelector
} from "../../../../shared/components/DimensionsSelector/components/PeriodDimensionSelector";
import {ReportDimensionSelector} from "./components/ReportSelector";
import {useSetting} from "@dhis2/app-service-datastore";
import {useRecoilValue} from "recoil";
import {DimensionState} from "../../../../shared/state/dimensions";
import {find, head} from "lodash";

export function ReportDimensionsSelector() {
    const [reports] = useSetting("reports", {global: true});
    const selectedReportId = head(useRecoilValue(DimensionState("report")));

    const selectedReport = useMemo(() => find(reports, ['id', selectedReportId]), [selectedReportId, reports]);

    console.log({selectedReport, reports, selectedReportId})

    return (
        <DimensionsSelector>
            <ReportDimensionSelector/>
            {
                (!(selectedReport?.disableOrgUnitSelection ?? false)) ? (<OrgUnitDimensionSelector/>) : null
            }
            {
                (!(selectedReport?.disablePeriodSelection ?? true)) ? (<PeriodDimensionSelector/>) : null
            }
        </DimensionsSelector>
    )
}
