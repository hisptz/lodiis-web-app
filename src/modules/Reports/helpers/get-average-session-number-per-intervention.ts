import * as _ from "lodash";
import { getSessionCountOnDreamsService } from "./dreams-service-layering-helper";

export const serviceTotalSessions: any = {
	"CondomEducationProvision": 8,
	"Go Girls": 15,
	"AFLATEEN/TOUN": 12,
	"ViolencePreventionEducation": 12,
	"FinancialLiteracyEducation": 4,
	"SAVING GROUP": 12,
	"SILC": 9,
	"LBSE": 6,
	"PARENTING": 14,
	"HIV Prevention Education": 4,
};

export function isServiceCompletionAboveThreshold(
	beneficiaryServiceData: any[],
	programStage: string | undefined,
	serviceName: string,
) {
	const threshold: number = 80;
	const currentSessionCount = getSessionCountOnDreamsService(
		beneficiaryServiceData,
		programStage,
		serviceName,
		"Eug4BXDFLym",
	);

	const totalSessions = serviceTotalSessions[serviceName] || 0;
	const completionPercentage = (currentSessionCount / totalSessions) * 100;

	return completionPercentage > threshold ? "Yes" : "No";
}

export function evaluateServiceCompletionForCodes(
	beneficiaryServiceData: any[],
	programStage: string | undefined,
	codes: Array<string>,
) {
	// Special handling for combined "Go Girls" and "AFLATEEN/TOUN"  intervention
	const containsGoGirls = codes.includes("Go Girls");
	const containsAflateen = codes.includes("AFLATEEN/TOUN");
	if (containsGoGirls || containsAflateen) {
		let goGirlsCompletion = containsGoGirls
			? isServiceCompletionAboveThreshold(
					beneficiaryServiceData,
					programStage,
					"Go Girls",
				)
			: "No";
		let aflateenCompletion = containsAflateen
			? isServiceCompletionAboveThreshold(
					beneficiaryServiceData,
					programStage,
					"AFLATEEN/TOUN",
				)
			: "No";
		if (goGirlsCompletion === "Yes" || aflateenCompletion === "Yes") {
			return "Yes";
		}
	} else {
		for (let code of codes) {
			if (serviceTotalSessions.hasOwnProperty(code)) {
				const value = isServiceCompletionAboveThreshold(
					beneficiaryServiceData,
					programStage,
					code,
				);
				if (value === "Yes") {
					return "Yes";
				}
			}
		}
	}

	return "No";
}
