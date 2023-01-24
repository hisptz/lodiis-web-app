import {Enrollment, Event as DHIS2Event, Program, TrackedEntityInstance} from "@hisptz/dhis2-utils";
import {ProgramConfig} from "../interfaces/metadata";
import {filter, find, forIn, fromPairs, head, isEmpty, set} from "lodash";
import {DateTime} from "luxon";
import i18n from '@dhis2/d2-i18n';


function generateAttributes(value: Record<string, any>) {
    const attributes: { attribute: string, value: any }[] = [];
    forIn(value, (value, key) => {
        attributes.push({attribute: key, value})
    });
    return attributes;
}

export class ProfileData {

    trackedEntityInstance: TrackedEntityInstance;
    attributes: { attribute: string; value: string; }[];
    events: DHIS2Event[];
    enrollmentDate: DateTime | undefined;
    enrollment: Enrollment;
    programConfig: ProgramConfig;
    program: Program

    constructor(trackedEntityInstance: TrackedEntityInstance, {
        programConfig,
        program
    }: { programConfig: ProgramConfig; program: Program }) {
        this.trackedEntityInstance = trackedEntityInstance;
        this.enrollment = head(this.trackedEntityInstance.enrollments) as Enrollment;
        this.attributes = trackedEntityInstance.attributes ?? [];
        this.events = this.enrollment.events ?? [];
        if (this.enrollment.enrollmentDate != null) {
            this.enrollmentDate = DateTime.fromISO(this.enrollment.enrollmentDate);
        }

        this.programConfig = programConfig;
        this.program = program;

    }

    getProfileData() {
        return this.programConfig.profile.map(profileDetail => ({
            header: profileDetail.label,
            value: profileDetail.get(this.trackedEntityInstance),
            id: profileDetail.key
        }))
    }


    getProgramStages() {
        return this.program.programStages?.filter((programStage) => !isEmpty(this.getEvents(programStage.id)))
    }

    getEnrollmentData() {
        return [{
            header: i18n.t("Organisation unit"),
            value: this.enrollment.orgUnitName,
            id: "ou"
        },
            {
                header: i18n.t("Date"),
                value: this.enrollmentDate?.toFormat('yyyy-MM-dd'),
                id: "enrollmentDate"
            }
        ]
    }

    getEnrollmentFormValues() {
        return {
            orgUnit: this.enrollment.orgUnit,
            enrollmentDate: this.enrollmentDate?.toFormat('yyyy-MM-dd')
        }
    }

    getProfileFormValues() {
        return fromPairs(this.programConfig.profile.filter(({editable}) => editable).map((config) => {
            return [config.key, config.get(this.trackedEntityInstance)]
        }));
    }

    getProfileFormFields() {
        return this.programConfig.profile.filter(({editable}) => editable).map((config) => {
            const attributeField = find(this.program.programTrackedEntityAttributes, ['trackedEntityAttribute.id', config.key]);
            return {
                ...attributeField?.trackedEntityAttribute,
                mandatory: attributeField?.mandatory
            };
        })
    }

    updateProfile(newValues: Record<string, any>) {
        const updatedTei = {...this.trackedEntityInstance}
        set(updatedTei, ['attributes'], generateAttributes(newValues));
        set(updatedTei, ['enrollments', 0, 'events'], []);
        return updatedTei;
    }

    updateEnrollment({orgUnit, enrollmentDate}: { orgUnit: string; enrollmentDate: string; }) {
        const updatedEnrollment = {...this.enrollment, orgUnit, enrollmentDate};
        delete updatedEnrollment.events;
        return updatedEnrollment;
    }

    getEnrollmentFormFields() {
        return [
            {
                label: i18n.t("Organisation unit"),
                valueType: "orgUnit",
                name: "orgUnit",
                required: true,
                validations: {
                    required: i18n.t("Organisation unit is required")
                }
            },
            {
                label: i18n.t("Date of enrollment"),
                valueType: "date",
                name: "enrollmentDate",
                required: true,
                validations: {
                    required: i18n.t("Enrollment date is required")
                }
            }
        ]
    }

    getEvents(programStageId: string) {
        return filter(this.events, ['programStage', programStageId]);
    }

}
