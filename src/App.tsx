import React from 'react'
import MainRouter from "./modules/Router";
import "./styles/main.css"
import "./styles/common.css"
import {ConfirmDialogProvider} from "@hisptz/dhis2-ui";
import {MutableSnapshot, RecoilRoot} from "recoil";
import {useDataEngine} from "@dhis2/app-runtime";
import {EngineState} from "./shared/state/engine";
import "./locales"
import {DataStoreProvider} from "@dhis2/app-service-datastore";
import FullPageLoader from "./shared/components/Loaders";
import {programs} from "./constants/metadata";

const MyApp = () => {
    const engine = useDataEngine();

    const initState = (snapshot: MutableSnapshot) => {
        snapshot.set(EngineState, engine);
    }

    return (<DataStoreProvider defaultGlobalSettings={{
        programs
    }} namespace={"kb-web-app"} loadingComponent={<FullPageLoader/>}>
        <RecoilRoot initializeState={initState}>
            <ConfirmDialogProvider>
                <MainRouter/>
            </ConfirmDialogProvider>
        </RecoilRoot>
    </DataStoreProvider>)
}

export default MyApp
