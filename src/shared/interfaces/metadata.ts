import {ColumnConfig, ProfileConfig} from "../../constants/metadata";


export interface ProgramConfig {
    id: string;
    columns: ColumnConfig[];
    profile: ProfileConfig[]
}
