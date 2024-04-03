import * as _ from "lodash";
import { CustomReportInterface } from "../../../shared/interfaces/report";

export function getFilteredReportByUserImplementingPartner(
	reports: CustomReportInterface[],
	implementingPartnerId: string,
): any[] {
	return _.filter(
		reports || [],
		(report: CustomReportInterface) =>
			report &&
			report.allowedImplementingPartners &&
			report.allowedImplementingPartners.includes(implementingPartnerId),
	);
}
