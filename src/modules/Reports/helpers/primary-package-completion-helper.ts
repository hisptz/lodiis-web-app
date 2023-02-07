import * as _ from 'lodash';
import {
    getDreamServiceLayeringAgeBand,
    getSessionCountOnDreamsService,
    getStatusFromBeneficiarySericeData,
} from './dreams-service-layering-helper';

const serviceFormProgramStage = 'bDJq2JWVTbC';
const hivRiskAssessmentProgramStage = 'PGFt6IwdZLM';
const condomEducationProgramStage = 'NXsIkG9Q1BA';

const hivAssessnentReference = 'qFwm4RM45gi';
const interventionReference = 'Eug4BXDFLym';
const condomEducationReference = 'd4AJf9yiKpL';

export function evaluationOfPrimaryPackageCompletion(
    analyticDataByBeneficiary: any[],
    progranStages: Array<{
        id: string;
        dataElements: string[];
    }>
): string {
    let completed = 'No';
    const ageBand = getDreamServiceLayeringAgeBand(analyticDataByBeneficiary);
    const progranStageIds = _.flattenDeep(
        _.map(progranStages, (progranStage: any) => progranStage.id || [])
    );
    const beneficiaryServiceData = _.filter(
        analyticDataByBeneficiary,
        (beneficiaryData: any) => {
            const programStageId = beneficiaryData['programStage'] || '';
            return progranStageIds.includes(programStageId);
        }
    );
    if (beneficiaryServiceData.length > 0 && ageBand !== '') {
        const hasHivRiskAssessment = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            hivRiskAssessmentProgramStage,
            hivAssessnentReference,
            `1`
        );
        const hasCondomEductionProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            condomEducationProgramStage,
            condomEducationReference,
            `1`
        );

        const hivPreventionEducationSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'HIV Prevention Education',
            interventionReference
        );
        const violationEducationSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'ViolencePreventionEducation',
            interventionReference
        );
        const aflateenTounSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'AFLATEEN/TOUN',
            interventionReference
        );
        const financialEducationSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'FinancialLiteracyEducation',
            interventionReference
        );
        const goGirlsSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'Go Girls',
            interventionReference
        );
        const condomEducationSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'CondomEducationProvision',
            interventionReference
        );
        switch (ageBand) {
            case '10-14': {
                if (
                    hasHivRiskAssessment &&
                    hivPreventionEducationSessions >= 9 &&
                    violationEducationSessions >= 1 &&
                    aflateenTounSessions >= 9 &&
                    financialEducationSessions === 4
                ) {
                    completed = 'Yes';
                }
                break;
            }
            case '15-19': {
                if (
                    hasHivRiskAssessment &&
                    hivPreventionEducationSessions >= 9 &&
                    violationEducationSessions >= 1 &&
                    aflateenTounSessions >= 9 &&
                    goGirlsSessions >= 10 &&
                    financialEducationSessions === 4
                ) {
                    completed = 'Yes';
                }
                break;
            }
            case '20-24': {
                if (
                    hasHivRiskAssessment &&
                    hivPreventionEducationSessions >= 9 &&
                    violationEducationSessions >= 1 &&
                    aflateenTounSessions >= 9 &&
                    goGirlsSessions >= 10 &&
                    (hasCondomEductionProvided || condomEducationSessions >= 4) &&
                    financialEducationSessions === 4
                ) {
                    completed = 'Yes';
                }
                break;
            }
        }
    }
    return completed;
}
