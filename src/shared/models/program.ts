import { ProgramConfig, ProgramStageViewConfig } from "../interfaces/metadata";
import { Program as DHIS2Program, ProgramStage } from "@hisptz/dhis2-utils";
import { compact, find, fromPairs, isEmpty } from "lodash";
import { RHFDHIS2FormFieldProps, VALUE_TYPE } from "@hisptz/dhis2-ui";

export class KBProgram {
	config: ProgramConfig;
	program: DHIS2Program;

	constructor(config: ProgramConfig, program: DHIS2Program) {
		this.config = config;
		this.program = program;
	}

	get tableColumns() {
		return compact(this.config.columns);
	}

	get profileVariables() {
		return this.config.profile;
	}

	get searchFields() {
		const fields = this.config.search.fields;
		if (isEmpty(fields)) {
			return [];
		}
		return compact(
			fields.map(({ id, type, label }) => {
				if (type === "trackedEntityAttribute") {
					return find(this.program.programTrackedEntityAttributes, [
						"trackedEntityAttribute.id",
						id,
					])?.trackedEntityAttribute;
				} else if (type === "attribute") {
					//TODO: Implement this if ever necessary
				}
			}),
		);
	}

	get dashboard() {
		return this.config.dashboard;
	}

	get programStages() {
		const configuredProgramStages = this.config.programStages;
		return configuredProgramStages.map((programStage) => {
			const viewConfig = programStage.view.map((viewConfig) => {
				const field = this.getFieldConfig({
					config: viewConfig,
					programStageId: programStage.id,
				});
				return {
					...viewConfig,
					field,
				};
			});

			return {
				...programStage,
				...(this.getProgramStageConfig(programStage.id) ?? {}),
				columns: programStage.columns,
				view: viewConfig,
			};
		});
	}

	private getProgramStageConfig(id: string): ProgramStage | undefined {
		return find(this.program.programStages, ["id", id]);
	}

	private getFieldConfig({
		config,
		programStageId,
	}: {
		config: ProgramStageViewConfig;
		programStageId: string;
	}): RHFDHIS2FormFieldProps | undefined {
		const programStageConfig = find(this.program.programStages, [
			"id",
			programStageId,
		]);
		if (programStageConfig) {
			if (config.get.from === "attribute") {
				//Not supported for now
				return;
			} else {
				const dataElement = find(
					programStageConfig.programStageDataElements,
					["dataElement.id", config.get.id],
				)?.dataElement;
				return {
					valueType: dataElement?.valueType as VALUE_TYPE,
					name: config.get.id as string,
					label: dataElement?.formName ?? dataElement?.displayName,
				};
			}
		}
	}

	get searchFieldKeys() {
		return this.searchFields.map(({ id }) => id);
	}

	getDefaultColumnVisibility() {
		return fromPairs(
			this.config.columns.map((column) => [column.key, true]),
		);
	}
}
