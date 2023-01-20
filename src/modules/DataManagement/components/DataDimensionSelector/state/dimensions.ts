import {atomFamily} from "recoil";
import {urlSyncEffect} from "recoil-sync";
import {nullable, string} from "@recoiljs/refine";


export const DimensionState = atomFamily<string | undefined | null, string>({
    key: "program-state",
    default: undefined,
    effects: (item) => [
        urlSyncEffect({
            history: "push",
            storeKey: "filter",
            itemKey: item,
            refine: nullable(string())
        })
    ]
})
