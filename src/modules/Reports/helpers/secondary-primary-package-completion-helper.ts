import * as _ from 'lodash';
import {
    getDreamServiceLayeringAgeBand,
    getSessionCountOnDreamsService,
    getStatusFromBeneficiarySericeData,
} from './dreams-service-layering-helper';

const htsProgramStage = 'vAMc8n0YB6m';
const serviceFormProgramStage = 'bDJq2JWVTbC';
const condomEducationProgramStage = 'NXsIkG9Q1BA';
const referralProgramStage = 'MkyTrLeBG8I';
const parentingProgramStage = 'N5SlNqQuMyC';
const familyPlanningProgramStage = 'A7Tl3vML6as';
const postGbvClinicalProgramStage = 'yK0ENCuwPqh';
const postGbvLegalProgramStage = 'VLW93YjZOyf';
const prepShortFormProgramStage = 'Qw8c20q5V0w';
const prepLongFormProgramStage = 'mMjGlK1W0Xo';

const interventionReference = 'Eug4BXDFLym';
const condomEducationReference = 'd4AJf9yiKpL';
const hivTestReference = 'zbHpXUjGv5H';
const parentingReference = 'NhUVtfObJFw';
const familyPlanningReference = 'uciT2F6ByYO';
const postGbvClinicalReference = 'mnYT2rZyGgJ';
const postGbvLegalReference = 'qML4gVZ2UFc';
const referralServiceProvidedReference = 'hXyqgOWZ17b';
const referralAtFacility = 'OrC9Bh2bcFz';
const referralAtCommunity = 'rsh5Kvx6qAU';
const prepShortFormReference = 'VtmkYCQkBQw';
const prepHivNegativeReference = 'veoA322323t';
const prepCreatinineClearanceReference = 'bH9DpJOIutM';
const prepWeightReference = 'h0P6UfkUvLP';

export function evaluationOfSecondaryPrimaryPackageCompletion(
    analyticDataByBeneficiary: any[],
    programStages: Array<{
        id: string;
        dataElements: string[];
    }>
): string {
    let completed = 'No';
    const programStageIds = _.flattenDeep(
        _.map(programStages, (programStage: any) => programStage.id || [])
    );
    const beneficiaryServiceData = _.filter(
        analyticDataByBeneficiary,
        (beneficiaryData: any) => {
            const programStageId = beneficiaryData['programStage'] || '';
            return programStageIds.includes(programStageId);
        }
    );
    if (beneficiaryServiceData.length > 0) {
        const ageBand = getDreamServiceLayeringAgeBand(analyticDataByBeneficiary);
        const hasTestedForHiv = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            htsProgramStage,
            hivTestReference,
            '1'
        );
        const hasCondomEductionProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            condomEducationProgramStage,
            condomEducationReference,
            `1`
        );
        const hasPostGbvClinicalProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            postGbvClinicalProgramStage,
            postGbvClinicalReference,
            `1`
        );
        const hasPostGbvlegalProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            postGbvLegalProgramStage,
            postGbvLegalReference,
            `1`
        );
        const hasParentingProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            parentingProgramStage,
            parentingReference,
            `1`
        );
        const hasFamilyPlanningProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            familyPlanningProgramStage,
            familyPlanningReference,
            `1`
        );
        const hasPrepShortFormProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            prepShortFormProgramStage,
            prepShortFormReference,
            `1`
        );
        const hasPrepHivNegative = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            prepLongFormProgramStage,
            prepHivNegativeReference,
            `1`
        );
        const hasPrepCreatinineClearance = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            prepLongFormProgramStage,
            prepCreatinineClearanceReference,
            `1`
        );
        const hasPrepWeightBelow = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            prepLongFormProgramStage,
            prepWeightReference,
            `1`
        );
        const hasReferralServiceProvided = getStatusFromBeneficiarySericeData(
            beneficiaryServiceData,
            referralProgramStage,
            referralServiceProvidedReference,
            `1`
        );
        const educationSupportAtFacilityReferralCount =
            getSessionCountOnDreamsService(
                beneficiaryServiceData,
                referralProgramStage,
                'EducationSubsidiesSupport',
                referralAtFacility
            );
        const educationSupportAtCommunityReferralCount =
            getSessionCountOnDreamsService(
                beneficiaryServiceData,
                referralProgramStage,
                'EducationSubsidiesSupport',
                referralAtCommunity
            );
        const condomEducationSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'CondomEducationProvision',
            interventionReference
        );
        const silcSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'SILC',
            interventionReference
        );
        const savingGroupsSessions = getSessionCountOnDreamsService(
            beneficiaryServiceData,
            serviceFormProgramStage,
            'SAVING GROUP',
            interventionReference
        );
        switch (ageBand) {
            case '10-14': {
                if (
                    hasTestedForHiv &&
                    (hasCondomEductionProvided || condomEducationSessions >= 4) &&
                    ((hasReferralServiceProvided &&
                            educationSupportAtFacilityReferralCount > 0) ||
                        (hasReferralServiceProvided &&
                            educationSupportAtCommunityReferralCount > 0)) &&
                    (hasPostGbvClinicalProvided || hasPostGbvlegalProvided) &&
                    savingGroupsSessions > 12
                ) {
                    completed = 'Yes';
                }
                break;
            }
            case '15-19': {
                if (
                    hasTestedForHiv &&
                    hasFamilyPlanningProvided &&
                    (hasPrepShortFormProvided ||
                        (hasPrepHivNegative &&
                            hasPrepCreatinineClearance &&
                            hasPrepWeightBelow)) &&
                    ((hasReferralServiceProvided &&
                            educationSupportAtFacilityReferralCount > 0) ||
                        (hasReferralServiceProvided &&
                            educationSupportAtCommunityReferralCount > 0)) &&
                    (hasPostGbvClinicalProvided || hasPostGbvlegalProvided) &&
                    savingGroupsSessions > 12
                ) {
                    completed = 'Yes';
                }
                break;
            }
            case '20-24': {
                if (
                    hasTestedForHiv &&
                    hasFamilyPlanningProvided &&
                    (hasPrepShortFormProvided ||
                        (hasPrepHivNegative &&
                            hasPrepCreatinineClearance &&
                            hasPrepWeightBelow)) &&
                    (hasPostGbvClinicalProvided || hasPostGbvlegalProvided) &&
                    silcSessions >= 1 &&
                    hasParentingProvided
                ) {
                    completed = 'Yes';
                }
                break;
            }
        }
    }
    return completed;
}
