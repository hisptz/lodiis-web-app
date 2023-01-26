import {ColumnConfig, ProfileConfig} from "../../constants/metadata";
import {Event as DHIS2Event} from "@hisptz/dhis2-utils";
import React from "react";


interface ProgramStageColumnConfig {
    label: string;
    key: string;
    get: (event: DHIS2Event) => string | number | React.ReactNode
}

interface ProgramStageViewConfig {
    key: 'string';
    get: (event: DHIS2Event) => string | number | React.ReactNode;
    editable: boolean
}

export interface ProgramStageConfig {
    columns: ProgramStageColumnConfig[];
    view: ProgramStageViewConfig[]
}

export interface ProgramConfig {
    id: string;
    columns: ColumnConfig[];
    profile: ProfileConfig[];
    programStages: ProgramStageConfig[]
}
