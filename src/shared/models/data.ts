import {Enrollment, Event as DHIS2Event, TrackedEntityInstance} from "@hisptz/dhis2-utils";
import {ProgramConfig} from "../interfaces/metadata";
import {head} from "lodash";
import {DateTime} from "luxon";
import i18n from '@dhis2/d2-i18n';

export class ProfileData {

    trackedEntityInstance: TrackedEntityInstance;
    attributes: { attribute: string; value: string; }[];
    events: DHIS2Event[];
    enrollmentDate: DateTime | undefined;
    enrollment: Enrollment;
    program: ProgramConfig;

    constructor(trackedEntityInstance: TrackedEntityInstance, {program}: { program: ProgramConfig }) {
        this.trackedEntityInstance = trackedEntityInstance;
        this.enrollment = head(this.trackedEntityInstance.enrollments) as Enrollment;
        this.attributes = trackedEntityInstance.attributes ?? [];
        this.events = this.enrollment.events ?? [];
        if (this.enrollment.enrollmentDate != null) {
            this.enrollmentDate = DateTime.fromISO(this.enrollment.enrollmentDate);
        }

        this.program = program;

    }

    getProfileData() {
        return this.program.profile.map(profileDetail => ({
            header: profileDetail.label,
            value: profileDetail.get(this.trackedEntityInstance),
            id: profileDetail.key
        }))
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
                id: "date"
            }
        ]
    }

}