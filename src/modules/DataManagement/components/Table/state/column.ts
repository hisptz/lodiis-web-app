import {atomFamily, selectorFamily} from "recoil";
import {KBProgramState} from "../../../../../shared/state/program";


export const ColumnState = atomFamily<{ [key: string]: boolean } | undefined, string>({
    key: "column-state",
    default: selectorFamily({
        key: "column-state-default",
        get: (programId: string) => ({get}) => {
            const kbProgram = get(KBProgramState);
            return kbProgram?.getDefaultColumnVisibility();
        }
    })
})
