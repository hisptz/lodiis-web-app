import {ColumnConfig, DataGetConfig, ProfileConfig} from "../../constants/metadata";
import {RHFDHIS2FormFieldProps} from "@hisptz/dhis2-ui";


export interface ProgramStageColumnConfig {
    label: string;
    key: string;
    get: DataGetConfig
}

export interface ProgramStageViewConfig {
    key: string;
    get: DataGetConfig;
    editable: boolean;
    field?: RHFDHIS2FormFieldProps
}

export interface ProgramStageConfig {
    id: string;
    label?: string;
    columns: ProgramStageColumnConfig[];
    view: ProgramStageViewConfig[]
}

export interface ProgramConfig {
    id: string;
    name: string;
    search: {
        fields: { id: string; type: "attribute" | "trackedEntityAttribute"; label?: string }[]
    }
    columns: ColumnConfig[];
    profile: ProfileConfig[];
    programStages: ProgramStageConfig[]
}
