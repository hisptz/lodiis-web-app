import {atomFamily, DefaultValue, selector} from "recoil";
import {syncEffect} from "recoil-sync";
import {nullable, string} from "@recoiljs/refine";
import {SearchCriteriaValues} from "../index";


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


export const SearchValuesState = selector<SearchCriteriaValues>({
    key: "search-values",
    get: ({get}) => {
        const primaryUIC = get(SearchState("primaryUIC"))
        const firstName = get(SearchState("firstName"))
        const surname = get(SearchState("surname"))

        return {
            primaryUIC,
            firstName,
            surname
        }
    },
    set: ({set,}, newValue) => {
        if (!(newValue instanceof DefaultValue)) {
            set(SearchState("primaryUIC"), newValue.primaryUIC);
            set(SearchState("firstName"), newValue.firstName);
            set(SearchState("surname"), newValue.surname);
        } else {
            set(SearchState("primaryUIC"), '');
            set(SearchState("firstName"), '');
            set(SearchState("surname"), '');
        }
    }
})
