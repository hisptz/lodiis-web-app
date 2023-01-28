import {ProgramConfig} from "../interfaces/metadata";
import {Program as DHIS2Program} from "@hisptz/dhis2-utils"
import {compact, fromPairs} from "lodash";

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

    getDefaultColumnVisibility() {
        return fromPairs(this.config.columns.map((column) => [column.key, true]));
    }

}
