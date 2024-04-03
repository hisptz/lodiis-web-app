import { DimensionsSelector } from "../../../../shared/components/DimensionsSelector";
import React from "react";
import { OrgUnitDimensionSelector } from "../../../../shared/components/DimensionsSelector/components/OrgUnitDimensionSelector";
import { PeriodDimensionSelector } from "../../../../shared/components/DimensionsSelector/components/PeriodDimensionSelector";
import { ReportDimensionSelector } from "./components/ReportSelector";
import { useReportDimension } from "../ReportTable/hooks/dimension";

export function ReportDimensionsSelector() {
	const { report: selectedReport } = useReportDimension();

	return (
		<DimensionsSelector>
			<ReportDimensionSelector />
			{!(selectedReport?.disableOrgUnitSelection ?? false) ? (
				<OrgUnitDimensionSelector />
			) : null}
			{!(selectedReport?.disablePeriodSelection ?? true) ? (
				<PeriodDimensionSelector />
			) : null}
		</DimensionsSelector>
	);
}
