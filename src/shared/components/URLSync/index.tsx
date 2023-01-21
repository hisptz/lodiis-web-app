import {RecoilSync} from "recoil-sync";
import React from "react";
import {useSearchParams} from "react-router-dom";

export function URLSync({
                            children,
                            storeKey,
                            dataType
                        }: { children: React.ReactNode, storeKey: string; dataType?: "string" | "array" }) {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <RecoilSync
            storeKey={storeKey}
            read={(itemKey) => {
                if (dataType === "string") {
                    return searchParams.get(itemKey);
                }
                return searchParams.get(itemKey)?.split(':');
            }}
            write={({diff}) => {
                setSearchParams((prev) => {
                    const newValue = new Map(prev);
                    Array.from(diff.entries()).map(([key, value]) => {
                        let sanitizedValue = value;
                        if (Array.isArray(value)) {
                            sanitizedValue = value.join(";")
                        }
                        if (value === undefined || value === null) {
                            newValue.delete(key);
                            return;
                        }
                        if (typeof sanitizedValue === "string") {
                            newValue.set(key, sanitizedValue)
                        }
                    })
                    return new URLSearchParams(newValue as any)
                })
            }}
        >
            {children}
        </RecoilSync>
    )
}
