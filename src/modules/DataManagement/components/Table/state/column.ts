import {atom, selector} from "recoil";
import {DimensionState} from "../../../../../shared/state/dimensions";
import {DEFAULT_PROGRAM_CONFIG, PROGRAM_CONFIG} from "../../../../../constants/metadata";
import {find, fromPairs} from "lodash";


export const ColumnState = atom<{ [key: string]: boolean } | undefined>({
    key: "column-state",
    default: selector({
        key: "column-state-default",
        get: ({get}) => {
            const program = get(DimensionState('program'));
            if (!program) {
                return;
            }
            const config = find(PROGRAM_CONFIG, ['id', program]) ?? DEFAULT_PROGRAM_CONFIG;
            if (!config) {
                throw Error(`There is no configuration for the program ${program}`)
            }
            return fromPairs(config?.columns.map(column => [column.key, !column.hidden]));
        }
    })
})
