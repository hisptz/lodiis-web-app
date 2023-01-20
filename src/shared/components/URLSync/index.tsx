import {RecoilSync} from "recoil-sync";
import React from "react";
import {useSearchParams} from "react-router-dom";
import {compact, fromPairs} from "lodash";

export function URLSync({children, storeKey}: { children: React.ReactNode, storeKey: string }) {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <RecoilSync
            storeKey={storeKey}
            read={(itemKey) => {
                return searchParams.get(itemKey)?.split(':');
            }}
            write={({allItems}) => {
                const newValue = fromPairs(compact(Array.from(allItems.entries()).map(([key, value]) => {
                    if (value) {
                        return ([key, (value as string[])?.join(';') ?? ''])
                    }
                    return;
                })));
                setSearchParams(newValue)
            }}
        >
            {children}
        </RecoilSync>
    )
}
