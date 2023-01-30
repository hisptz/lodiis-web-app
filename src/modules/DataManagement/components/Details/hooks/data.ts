import {useParams} from "react-router-dom";
import {TrackedEntityInstance} from "@hisptz/dhis2-utils";
import {ProfileData} from "../../../../../shared/models/data";
import {selectorFamily, useRecoilRefresher_UNSTABLE, useRecoilValue} from "recoil";
import {KBProgramState} from "../../../../../shared/state/program";
import {EngineState} from "../../../../../shared/state/engine";

const query = {
    tei: {
        resource: "trackedEntityInstances",
        id: ({teiId,}: any) => teiId,
        params: ({programId}: any) => ({
            program: programId,
            fields: [
                'trackedEntityInstance',
                'orgUnit',
                'attributes[attribute,value]',
                'trackedEntityType',
                'relationships[relationship,relationshipName,relationshipType,to[trackedEntityInstance[trackedEntityInstance]],from[trackedEntityInstance[trackedEntityInstance]]]',
                'enrollments[program,trackedEntityInstance,enrollment,orgUnitName,enrollmentDate,orgUnit,events[event,program,programStage,dueDate,orgUnit,orgUnitName,status,dataValues[dataElement,value],eventDate]]'
            ]
        })
    }
}


const KBProfileState = selectorFamily<ProfileData | undefined, string | undefined>({
    key: "kb-profile-state",
    get: (teiId?: string) => async ({get}) => {
        if (!teiId) {
            return;
        }
        const engine = get(EngineState);
        const kbProgram = get(KBProgramState);
        const programId = kbProgram?.config.id
        const tei = (await engine.query(query, {
            variables: {
                teiId,
                programId
            }
        }))?.tei;

        if (!tei || !kbProgram) {
            return;
        }
        return new ProfileData(tei as TrackedEntityInstance, kbProgram)
    }
})

export function useProfileData() {
    const {teiId}: { teiId?: string } = useParams();
    const refresh = useRecoilRefresher_UNSTABLE(KBProfileState(teiId))
    return {
        profile: useRecoilValue(KBProfileState(teiId)),
        refresh
    }
}
