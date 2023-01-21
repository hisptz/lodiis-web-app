import {atom, selector} from "recoil";
import {DimensionState} from "../../../../../shared/state/dimensions";
import {columnsConfig} from "../../../../../constants/metadata";
import {fromPairs} from "lodash";


export const ColumnState = atom({
    key: "column-state",
    default: selector({
        key: "column-state-default",
        get: ({get}) => {
            const program = get(DimensionState('program'));
            const config = columnsConfig[program as string];
            if (!config) {
                throw Error(`There is no configuration for the program ${program}`)
            }
            return fromPairs(config?.columns.map(column => [column.key, !column.hidden]));
        }
    })
})
