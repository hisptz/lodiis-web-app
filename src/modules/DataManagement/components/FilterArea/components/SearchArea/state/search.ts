import {atomFamily, DefaultValue, selectorFamily} from "recoil";
import {syncEffect} from "recoil-sync";
import {nullable, string} from "@recoiljs/refine";
import {SearchCriteriaValues} from "../index";
import {forEach, fromPairs, isEmpty} from "lodash";


export const SearchState = atomFamily<any, string>({
    key: "search-state",
    default: undefined,
    effects: (item) => [
        syncEffect({
            storeKey: "search",
            itemKey: item,
            refine: nullable(string()),
        })
    ]
});


export const SearchValuesState = selectorFamily<SearchCriteriaValues | undefined, any>({
    key: "search-values",
    get: (keys?: any) => ({get}) => {
        if (isEmpty(keys)) {
            return;
        }
        return fromPairs(keys?.map((key: string) => [key, get(SearchState(key))]))
    },
    set: (keys?: any) => ({set, reset}, newValue) => {
        if (isEmpty(keys)) {
            return;
        }
        if (!(newValue instanceof DefaultValue)) {
            if (newValue) {
                forEach(keys, (key) => {
                    set(SearchState(key), newValue[key])
                })
            }
        } else {
            forEach(keys, (key) => {
                reset(SearchState(key))
            })
        }
    }
})
