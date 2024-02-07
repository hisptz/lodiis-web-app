export interface ReportDxConfig {
  id?: string;
  ids?: string[];
  program?: string;
  name: string;
  isDate?: boolean;
  isBoolean?: boolean;
  isAttribute?: boolean;
  crossStages?: boolean;
  combinedValues?: CombineValues;
  programStage?: string;
  programStages?: { id: string; dataElements: string[] }[];
  displayValues?: { value: string; displayName: string }[];
  codes?: string[];
}

export interface CombineValues {
  displayValue: string;
  dataValues: Array<{
    id: string;
    value: string;
  }>;
}

export interface CustomReportInterface {
  id: string;
  name: string;
  program: string | string[];
  dxConfigs: ReportDxConfig[];
  disablePeriodSelection?: boolean;
  disableOrgUnitSelection?: boolean;
  allowedImplementingPartners?: string[];
  includeEnrollmentWithoutService?: boolean;
}
