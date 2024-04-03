import * as _ from "lodash";

const beneficiaryDateOfBirthReference = ["qZP982qpSPS", "jVSwC6Ln95H"];

export function getStatusFromBeneficiarySericeData(
	beneficiaryServiceData: any[],
	programStage: string,
	referenceDataElement: string,
	refernceValue: string,
): boolean {
	let status = false;
	const hivRiskAssements = _.filter(
		beneficiaryServiceData,
		(serviceData: any) => serviceData["programStage"] === programStage,
	);
	for (const serviceData of hivRiskAssements) {
		const value = serviceData[referenceDataElement] ?? "";
		if (`${value}` === `${refernceValue}`) {
			status = true;
		}
	}
	return status;
}

export function getSessionCountOnDreamsService(
	beneficiaryServiceData: any[],
	programStage: string | undefined,
	serviceName: string,
	referenceDataElement: string,
): number {
	return _.filter(
		beneficiaryServiceData,
		(serviceData: any) =>
			serviceData["programStage"] === programStage &&
			serviceData[referenceDataElement] === serviceName,
	).length;
}

export function getDreamServiceLayeringAgeBand(
	analyticDataByBeneficiary: any[],
) {
	let ageBand = "";
	const age = getBeneficiaryAge(analyticDataByBeneficiary);
	if (age >= 10 && age < 15) {
		ageBand = "10-14";
	} else if (age < 20) {
		ageBand = "15-19";
	} else if (age <= 24) {
		ageBand = "20-24";
	}
	return ageBand;
}

function getBeneficiaryAge(analyticDataByBeneficiary: any[]): number {
	const dob = getDateOfBirth(analyticDataByBeneficiary);
	const ageDifMs = Date.now() - new Date(dob).getTime();
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getDateOfBirth(analyticDataByBeneficiary: any[]): string {
	let dob = "";
	for (const beneficairyData of analyticDataByBeneficiary) {
		for (const id of beneficiaryDateOfBirthReference) {
			dob =
				beneficairyData.hasOwnProperty(id) &&
				`${beneficairyData[id]}` !== ""
					? beneficairyData[id]
					: dob;
		}
	}
	return dob;
}
