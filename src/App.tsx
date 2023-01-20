import React from 'react'
import MainRouter from "./modules/Router";
import "./styles/main.css"
import "./styles/common.css"
import {ConfirmDialogProvider} from "@hisptz/dhis2-ui";
import {MutableSnapshot, RecoilRoot} from "recoil";
import {useDataEngine} from "@dhis2/app-runtime";
import {EngineState} from "./shared/state/engine";

const MyApp = () => {
    const engine = useDataEngine();

    const initState = (snapshot: MutableSnapshot) => {
        snapshot.set(EngineState, engine);
    }

    return (<RecoilRoot initializeState={initState}>
        <ConfirmDialogProvider>
            <MainRouter/>
        </ConfirmDialogProvider>
    </RecoilRoot>)
}

export default MyApp
