import {RecoilURLSync} from "recoil-sync";
import React from "react";
import {useSearchParams} from "react-router-dom";
import {fromPairs, isEmpty} from "lodash";

export function URLSync({children, storeKey}: { children: React.ReactNode, storeKey: string }) {
    const [, setSearchParams] = useSearchParams();

    return (
        <RecoilURLSync
            serialize={(value: any) => {
                if (isEmpty(value)) return ""
                return Object.keys(value).map((key) => `${key}:${value[key]}`).join(';')
            }}
            deserialize={(params) => {
                if (isEmpty(params)) return null;
                return fromPairs(params?.split(';').map((value: string) => value.split(':')));
            }}
            storeKey={storeKey}
            location={{
                part: "queryParams",
            }}
            browserInterface={{
                replaceURL: (url) => {
                    const urlObject = new URL(url);
                    setSearchParams(urlObject.searchParams, {
                        replace: true
                    })
                },
                pushURL: (url) => {
                    const urlObject = new URL(url);
                    setSearchParams(urlObject.searchParams)
                },
            }}

        >
            {children}
        </RecoilURLSync>
    )
}
