import {ProgramConfig} from "../interfaces/metadata";
import {Program as DHIS2Program} from "@hisptz/dhis2-utils"
import {compact, find, fromPairs, isEmpty} from "lodash";

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
        return compact(fields.map(({id, type, label}) => {
            if (type === "trackedEntityAttribute") {
                return find(this.program.programTrackedEntityAttributes, ['trackedEntityAttribute.id', id])?.trackedEntityAttribute;
            } else if (type === "attribute") {
                //TODO: Implement this if ever necessary
            }
        }))

    }

    get searchFieldKeys() {
        return this.searchFields.map(({id}) => id);
    }

    getDefaultColumnVisibility() {
        return fromPairs(this.config.columns.map((column) => [column.key, true]));
    }

}
