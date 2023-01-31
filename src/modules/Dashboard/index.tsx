import React from "react";
import {useSetting} from "@dhis2/app-service-datastore";
import {head} from "lodash";
import {Navigate} from "react-router-dom"
import {ProgramConfig} from "../../shared/interfaces/metadata";
import {KBProgramState, KBProgramSync} from "../../shared/state/program";
import {useRecoilValue} from "recoil";
import {Visualization} from "./components/Visualization";
import {Box, Card} from '@dhis2/ui'

export function DashboardRouting() {
    const [programs] = useSetting("programs", {global: true});

    const firstProgram: ProgramConfig | undefined = head(programs as ProgramConfig[]);

    if (!firstProgram) {
        return null
    }

    return <Navigate to={`/dashboard/${firstProgram?.id}?program=${firstProgram.id}`}/>
}


export default function Dashboard() {
    const kbProgram = useRecoilValue(KBProgramState);
    const visualizations = kbProgram?.dashboard?.visualizations;

    return (<KBProgramSync>
        <div style={{display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr", padding: 8}}>
            {
                visualizations?.map((visualization) => (
                    <div key={`${visualization.id}-visualization-container`}
                         style={{gridColumn: `1 / span ${visualization.span}`}}>
                        <Box height="100%" width="100%">
                            <Card>
                                <div style={{padding: 8}}>
                                    <Visualization {...visualization} />
                                </div>
                            </Card>
                        </Box>
                    </div>
                ))
            }
        </div>
    </KBProgramSync>)
}
