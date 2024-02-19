import * as _ from 'lodash';
import { getSessionCountOnDreamsService } from './dreams-service-layering-helper';

export const serviceTotalSessions:any = {
    'CondomEducationProvision': 8,
    'Go Girls': 15,
    'AFLATEEN/TOUN': 12,
    'ViolencePreventionEducation': 12,
    'FinancialLiteracyEducation': 4,
    'SAVING GROUP': 12,
    'SILC': 9,
    'LBSE': 6,
    'PARENTING': 14,
    'HIV Prevention Education': 4,
  };
  const combinedCodeRequirement:any = {
    'Go Girls + AFLATEEN/TOUN': 27, // Total sessions for this combined case
  };

  

  export function isServiceCompletionAboveThreshold(
    beneficiaryServiceData: any[],
    programStage: string|undefined,
    serviceName: string,
    
  ) {
    const threshold: number = 80 
    const currentSessionCount = getSessionCountOnDreamsService(
      beneficiaryServiceData,
      programStage,
      serviceName,
      'Eug4BXDFLym'
    );
  
    const totalSessions = serviceTotalSessions[serviceName] || 0;
    const completionPercentage = (currentSessionCount / totalSessions) * 100;
 
    return completionPercentage > threshold ? "Yes" : "No"; 
 }


 export function evaluateServiceCompletionForCodes(
    beneficiaryServiceData: any[],
  programStage: string|undefined,
  codes: Array<string>,
) {
  // Check for the specific combination
  const isSpecificCombination = codes.includes("Go Girls") && codes.includes("AFLATEEN/TOUN") && codes.length === 2;
  let combinedKey = "";

  if (isSpecificCombination) {
    combinedKey = "Go Girls + AFLATEEN/TOUN";
  }

  // Validate the specific combination
  if (isSpecificCombination && combinedCodeRequirement.hasOwnProperty(combinedKey)) {
    const currentSessionCount = codes.reduce((total, code) => total + getSessionCountOnDreamsService(
      beneficiaryServiceData,
      programStage,
      code,
      'Eug4BXDFLym'
    ), 0);
    const totalSessions = combinedCodeRequirement[combinedKey];
    const completionPercentage = (currentSessionCount / totalSessions) * 100;
    return completionPercentage > 80 ? "Yes" : "No";
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
  
