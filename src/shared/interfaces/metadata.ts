import { RHFDHIS2FormFieldProps } from "@hisptz/dhis2-ui";

export interface DataGetConfig {
	//Where is the data coming from for the specific resource
	from: "dataElement" | "trackedEntityAttribute" | "attribute" | "computed";
	//id of the resource from, a path for type attribute
	id: string | Array<string | number>;
	formatAs?: "date" | "boolean";
	as?: "age";
}

export interface ColumnConfig {
	label: string;
	key: string;
	get: DataGetConfig;
	mandatory?: boolean;
	hidden?: boolean;
	sortable?: boolean;
}

export interface ProfileConfig {
	label: string;
	key: string;
	get: DataGetConfig;
	editable?: boolean;
	identifiableObject?: boolean;
}

export interface ProgramStageColumnConfig {
	label: string;
	key: string;
	get: DataGetConfig;
}

export interface ProgramStageViewConfig {
	key: string;
	get: DataGetConfig;
	editable: boolean;
	identifiableObject?: boolean;
	label?: string;
	field?: RHFDHIS2FormFieldProps;
}

export interface ProgramStageConfig {
	id: string;
	label?: string;
	columns: ProgramStageColumnConfig[];
	view: ProgramStageViewConfig[];
}

export interface VisualizationConfig {
	id: string;
	dimension?: {
		dx?: string[];
		ou?: string[];
		pe?: string[];
	};
	filter?: {
		dx?: string[];
		ou?: string[];
		pe?: string[];
	};
	type: "chart" | "table" | "map" | "single-value";
	options?: Record<string, any>;
	span: 1 | 2;
}

export interface DashboardConfig {
	id: string;
	label?: string;
	visualizations: VisualizationConfig[];
}

export interface ProgramConfig {
	id: string;
	name: string;
	search: {
		fields: {
			id: string;
			type: "attribute" | "trackedEntityAttribute";
			label?: string;
		}[];
	};
	columns: ColumnConfig[];
	profile: ProfileConfig[];
	programStages: ProgramStageConfig[];
	dashboard?: DashboardConfig;
}
