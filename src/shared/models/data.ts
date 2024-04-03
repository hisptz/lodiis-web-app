import {
	Enrollment,
	Event as DHIS2Event,
	Program,
	TrackedEntityInstance,
} from "@hisptz/dhis2-utils";
import { DataGetConfig, ProgramConfig } from "../interfaces/metadata";
import {
	filter,
	find,
	compact,
	forIn,
	fromPairs,
	get,
	head,
	isEmpty,
	set,
} from "lodash";
import { DateTime } from "luxon";
import i18n from "@dhis2/d2-i18n";
import { getAttributeValue, getDataElementValue } from "../utils/metadata";
import { KBProgram } from "./program";
import { CustomDataTableRow } from "@hisptz/dhis2-ui";

function generateAttributes(value: Record<string, any>) {
	const attributes: { attribute: string; value: any }[] = [];
	forIn(value, (value, key) => {
		attributes.push({ attribute: key, value });
	});
	return attributes;
}

function calculateAge(param: string) {
	return DateTime.fromJSDate(new Date(param))
		.diffNow("years")
		.negate()
		.years.toFixed(0);
}

export function resolveDataConfigValue(
	config: DataGetConfig,
	data: DHIS2Event | TrackedEntityInstance,
) {
	let value: string | number | undefined = "";

	switch (config.from) {
		case "attribute":
			value = get(data, config.id);
			break;
		case "trackedEntityAttribute":
			value = getAttributeValue(
				data.attributes ?? [],
				config.id as string,
			);
			break;
		case "dataElement":
			value = getDataElementValue(
				data.dataValues ?? [],
				config.id as string,
			);
			break;
		case "computed":
			const param =
				(data.attributes
					? getAttributeValue(data.attributes, config.id as string)
					: getDataElementValue(
							data.dataValues,
							config.id as string,
						)) ?? get(data, config.id);
			switch (config.as) {
				case "age":
					value = calculateAge(param);
					break;
			}
	}

	if (!config.formatAs) {
		return value;
	}
	if (!value) {
		return value;
	}
	switch (config.formatAs) {
		case "date":
			return DateTime.fromJSDate(new Date(value)).toFormat("yyyy-MM-dd");
			break;

		case "boolean":
			return `${value}` === "true"
				? "Yes"
				: `${value}` === "false"
					? "No"
					: value;

		default:
			return value;
	}
}

export class ProfileData {
	trackedEntityInstance: TrackedEntityInstance;
	attributes: { attribute: string; value: string }[];
	events: DHIS2Event[];
	enrollmentDate: DateTime | undefined;
	enrollment: Enrollment;
	programConfig: ProgramConfig;
	program: Program;
	kbProgram: KBProgram;

	constructor(
		trackedEntityInstance: TrackedEntityInstance,
		program: KBProgram,
	) {
		this.trackedEntityInstance = trackedEntityInstance;
		this.enrollment = head(
			this.trackedEntityInstance.enrollments,
		) as Enrollment;
		this.attributes = trackedEntityInstance.attributes ?? [];
		this.events = this.enrollment.events ?? [];
		if (this.enrollment.enrollmentDate != null) {
			this.enrollmentDate = DateTime.fromISO(
				this.enrollment.enrollmentDate,
			);
		}

		this.programConfig = program.config;
		this.program = program.program;
		this.kbProgram = program;
	}

	get relationships() {
		return this.trackedEntityInstance.relationships?.map((relationship) => {
			const otherTeiKey =
				(
					relationship.to
						.trackedEntityInstance as unknown as TrackedEntityInstance
				).trackedEntityInstance ===
				this.trackedEntityInstance.trackedEntityInstance
					? "from"
					: "to";
			const otherTei: TrackedEntityInstance = relationship?.[otherTeiKey]
				?.trackedEntityInstance as unknown as TrackedEntityInstance;

			return {
				relationship,
				otherTei,
				type: otherTeiKey,
			};
		});
	}

	getProfileData() {
		return this.programConfig.profile.map((profileDetail) => ({
			header: profileDetail.label,
			value: resolveDataConfigValue(
				profileDetail.get,
				this.trackedEntityInstance,
			),
			id: profileDetail.key,
		}));
	}

	getTableData(): CustomDataTableRow {
		return {
			...fromPairs(
				this.programConfig.columns.map(({ key, label, get }) => {
					const value = resolveDataConfigValue(
						get,
						this.trackedEntityInstance,
					);
					return [key, value];
				}),
			),
			id: this.trackedEntityInstance.trackedEntityInstance,
		};
	}

	getProgramStages() {
		return this.kbProgram.programStages?.filter(
			(programStage) => !isEmpty(this.getEvents(programStage.id)),
		);
	}

	getEnrollmentData() {
		return [
			{
				header: i18n.t("Organisation unit"),
				value: this.enrollment.orgUnitName,
				id: "ou",
			},
			{
				header: i18n.t("Date"),
				value: this.enrollmentDate?.toFormat("yyyy-MM-dd"),
				id: "enrollmentDate",
			},
		];
	}

	getEnrollmentFormValues() {
		return {
			orgUnit: this.enrollment.orgUnit,
			enrollmentDate: this.enrollmentDate?.toFormat("yyyy-MM-dd"),
		};
	}

	getProfileFormValues() {
		return fromPairs(
			this.programConfig.profile
				.filter(({ editable }) => editable)
				.map((config) => {
					return [
						config.key,
						resolveDataConfigValue(
							config.get,
							this.trackedEntityInstance,
						),
					];
				}),
		);
	}

	getProfileFormFields() {
		return compact(
			this.programConfig.profile
				.filter(({ editable }) => editable)
				.map((config) => {
					const attributeField = find(
						this.program.programTrackedEntityAttributes,
						["trackedEntityAttribute.id", config.key],
					);

					return attributeField
						? {
								...attributeField.trackedEntityAttribute,
								mandatory: attributeField.mandatory,
							}
						: null;
				}),
		);
	}

	updateProfile(newValues: Record<string, any>) {
		const updatedTei = { ...this.trackedEntityInstance };
		set(updatedTei, ["attributes"], generateAttributes(newValues));
		set(updatedTei, ["enrollments", 0, "events"], []);
		return updatedTei;
	}

	updateEnrollment({
		orgUnit,
		enrollmentDate,
	}: {
		orgUnit: string;
		enrollmentDate: string;
	}) {
		const updatedEnrollment = {
			...this.enrollment,
			orgUnit,
			enrollmentDate,
		};
		delete updatedEnrollment.events;
		return updatedEnrollment;
	}

	getEnrollmentFormFields() {
		return [
			{
				label: i18n.t("Organisation unit"),
				valueType: "ORGANISATION_UNIT",
				name: "orgUnit",
				required: true,
				validations: {
					required: i18n.t("Organisation unit is required"),
				},
			},
			{
				label: i18n.t("Date of enrollment"),
				valueType: "DATE",
				name: "enrollmentDate",
				required: true,
				validations: {
					required: i18n.t("Enrollment date is required"),
				},
			},
		];
	}

	getEvents(programStageId: string) {
		return filter(this.events, ["programStage", programStageId]);
	}
}
