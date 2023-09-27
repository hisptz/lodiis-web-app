export interface ReportDxConfig {
  id?: string;
  ids?: string[];
  program?: string;
  name: string;
  isDate?: boolean;
  isBoolean?: boolean;
  isAttribute?: boolean;
  combinedValues?: {
    displayValue: string;
    dataValues: Array<{
      id: string;
      value: string;
    }>;
  };
  programStage?: string;
  programStages?: { id: string; dataElements: string[] }[];
  displayValues?: { value: string; displayName: string }[];
  codes?: string[];
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
