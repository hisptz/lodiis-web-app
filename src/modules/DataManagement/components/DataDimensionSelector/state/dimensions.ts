import {atomFamily} from "recoil";
import {syncEffect} from "recoil-sync";
import {array, nullable, string} from "@recoiljs/refine";


export const DimensionState = atomFamily<any, string>({
    key: "program-state",
    default: undefined,
    effects: (item) => [
        syncEffect({
            storeKey: "filter",
            itemKey: item,
            refine: nullable(array(string())),
        })
    ]
})
