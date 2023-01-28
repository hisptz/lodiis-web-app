import {atom} from "recoil";
import {KBProgram} from "../models/program";
import React from "react";
import {useKBProgram} from "../hooks/program";
import FullPageLoader from "../components/Loaders";
import {ErrorThrower} from "../components/ErrorThrower";


export const KBProgramState = atom<KBProgram | undefined | null>({
    key: "kb-program-state",
    default: undefined
})

export function KBProgramSync({children}: { children: React.ReactNode }) {
    const {loading, error,} = useKBProgram();
    if (loading) {
        return <FullPageLoader/>
    }

    if (error) {
        return <ErrorThrower error={error}/>
    }

    return (
        <>
            {children}
        </>
    )

}
