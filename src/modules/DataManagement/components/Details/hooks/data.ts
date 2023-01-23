import {useDataQuery} from "@dhis2/app-runtime";
import {useParams, useSearchParams} from "react-router-dom";
import {Program, TrackedEntityInstance} from "@hisptz/dhis2-utils";
import {ProfileData} from "../../../../../shared/models/data";
import {useMemo} from "react";
import {find} from "lodash";
import {DEFAULT_PROGRAM_CONFIG, PROGRAM_CONFIG} from "../../../../../constants/metadata";

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
                'enrollments[enrollment,orgUnitName,enrollmentDate,events[event,dataValues[dataElement,value],eventDate]]'
            ]
        })
    },
    program: {
        resource: "programs",
        id: ({programId}: any) => programId,
        params: {
            fields: [
                'id',
                'displayName',
                'programStages[programStageDataElements[dataElement[id,formName]]]'
            ]
        }
    }
}

export function useData() {
    const {teiId} = useParams();
    const [searchParams] = useSearchParams();
    const programId = searchParams.get("program");
    const programConfig = find(PROGRAM_CONFIG, ['id', programId]) ?? DEFAULT_PROGRAM_CONFIG;
    const {data, loading, error} = useDataQuery(query, {
        variables: {
            teiId,
            programId
        }
    });

    const profileData = useMemo(() => {
        console.log(data, programConfig)
        if (data && programConfig) {
            return new ProfileData(data?.tei as TrackedEntityInstance, {program: programConfig})
        }
    }, [programConfig, data]);

    const program = data?.program as Program;

    console.log(profileData);

    return {
        profileData,
        program,
        loading,
        error
    }

}
