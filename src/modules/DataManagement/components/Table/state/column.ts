import {atom, selector} from "recoil";
import {KBProgramState} from "../../../../../shared/state/program";


export const ColumnState = atom<{ [key: string]: boolean } | undefined>({
    key: "column-state",
    default: selector({
        key: "column-state-default",
        get: ({get}) => {
            const kbProgram = get(KBProgramState);
            return kbProgram?.getDefaultColumnVisibility();
        }
    })
})
