import { useSetting } from "@dhis2/app-service-datastore";
import { useRecoilValue } from "recoil";
import { DimensionState } from "../../../../../shared/state/dimensions";
import { find, head } from "lodash";
import { useMemo } from "react";
import { CustomReport } from "../../../models/report";

export function useReportDimension() {
	const [reports] = useSetting("reports", { global: true });
	const selectedReportId = head(useRecoilValue(DimensionState("report")));
	const report = useMemo(() => {
		const reportConfig = find(reports, ["id", selectedReportId]);
		if (reportConfig) {
			return new CustomReport(reportConfig);
		}
	}, [selectedReportId, reports]);
	const periods = useRecoilValue(DimensionState("pe"));
	const orgUnits = useRecoilValue(DimensionState("ou"));

	return {
		report,
		periods,
		orgUnits,
	};
}
