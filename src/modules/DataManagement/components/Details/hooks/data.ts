import { useParams } from "react-router-dom";
import {
  DataValue,
  Event,
  Enrollment,
  TrackedEntityInstance,
} from "@hisptz/dhis2-utils";
import { ProfileData } from "../../../../../shared/models/data";
import {
  selectorFamily,
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
} from "recoil";
import { map, filter, uniq, flattenDeep } from "lodash";
import { KBProgramState } from "../../../../../shared/state/program";
import { EngineState } from "../../../../../shared/state/engine";
import {
  ProfileConfig,
  ProgramConfig,
} from "../../../../../shared/interfaces/metadata";

interface TeiAttribute {
  attribute: string;
  value: string;
}

const teiQuery = {
  tei: {
    resource: "trackedEntityInstances",
    id: ({ teiId }: any) => teiId,
    params: ({ programId }: any) => ({
      program: programId,
      fields: [
        "trackedEntityInstance",
        "orgUnit",
        "attributes[attribute,value]",
        "trackedEntityType",
        "relationships[relationship,relationshipName,relationshipType,to[trackedEntityInstance[trackedEntityInstance]],from[trackedEntityInstance[trackedEntityInstance]]]",
        "enrollments[program,trackedEntityInstance,enrollment,orgUnitName,enrollmentDate,orgUnit,events[event,program,programStage,dueDate,orgUnit,orgUnitName,status,dataValues[dataElement,value],eventDate]]",
      ],
    }),
  },
};

const identifiableObjectsQuery = {
  identifiableObjects: {
    id: ({ id }: any) => id,
    resource: "identifiableObjects",
    params: {
      fields: ["id", "displayName"],
    },
  },
};

const KBProfileState = selectorFamily<
  ProfileData | undefined,
  string | undefined
>({
  key: "kb-profile-state",
  get:
    (teiId?: string) =>
    async ({ get }) => {
      if (!teiId) {
        return;
      }
      const engine = get(EngineState);
      const kbProgram = get(KBProgramState);
      const programId = kbProgram?.config.id;
      let tei: TrackedEntityInstance = (
        await engine.query(teiQuery, {
          variables: {
            teiId,
            programId,
          },
        })
      )?.tei;

      if (!tei || !kbProgram) {
        return;
      }
      tei = await getSanitizedTei(tei, kbProgram?.config, engine);
      return new ProfileData(tei, kbProgram);
    },
});

async function getSanitizedTei(
  tei: TrackedEntityInstance,
  programConfig: ProgramConfig,
  queryEngine: any
): Promise<TrackedEntityInstance> {
  let santizedAttributes: Array<TeiAttribute> = [];
  let sanitizedEnrollments: Array<Enrollment> = [];

  const { profile, programStages } = programConfig;
  const { attributes, enrollments } = tei;

  const identifiableAttributes = uniq(
    map(
      filter(profile, ({ identifiableObject }) => identifiableObject),
      (profileData) => (profileData as ProfileConfig).key ?? ""
    )
  );
  const identifiableDataElements = uniq(
    map(
      flattenDeep(
        map(programStages, ({ view: viewableColumns }) =>
          filter(
            map(viewableColumns, ({ key, identifiableObject }) => ({
              key,
              identifiableObject,
            })),
            ({ identifiableObject }) => identifiableObject
          )
        ) as any[]
      ),
      ({ key }) => key
    )
  );

  if (identifiableAttributes && identifiableAttributes.length) {
    for (const { attribute, value } of attributes ?? []) {
      if (identifiableAttributes.includes(attribute)) {
        const fetchedIdentifiableObject = (
          await queryEngine.query(identifiableObjectsQuery, {
            variables: { id: value },
          })
        ).identifiableObjects;
        const { displayName } = fetchedIdentifiableObject;
        santizedAttributes = [
          ...santizedAttributes,
          { attribute, value: displayName },
        ];
      } else {
        santizedAttributes = [...santizedAttributes, { attribute, value }];
      }
    }
  } else {
    santizedAttributes = [...santizedAttributes, ...(attributes ?? [])];
  }

  if (identifiableDataElements && identifiableDataElements.length) {
    for (const enrollment of enrollments ?? []) {
      const { events } = enrollment;
      let sanitizedEvents: Event[] = [];
      for (let event of events ?? []) {
        let sanitizedDataValues: DataValue[] = [];
        for (let dataValue of event.dataValues) {
          const { dataElement, value } = dataValue;
          if (identifiableDataElements.includes(dataElement)) {
            console.log(dataValue);

            const fetchedIdentifiableObject = (
              await queryEngine.query(identifiableObjectsQuery, {
                variables: { id: value },
              })
            ).identifiableObjects;
            console.log(fetchedIdentifiableObject);
            const { displayName } = fetchedIdentifiableObject;
            sanitizedDataValues = [
              ...sanitizedDataValues,
              { dataElement, value: displayName },
            ];
          } else {
            sanitizedDataValues = [
              ...sanitizedDataValues,
              { dataElement, value },
            ];
          }
        }

        sanitizedEvents = [
          ...sanitizedEvents,
          { ...event, dataValues: sanitizedDataValues },
        ];
      }
      sanitizedEnrollments = [
        ...sanitizedEnrollments,
        { ...enrollment, events: sanitizedEvents },
      ];
    }
  } else {
    sanitizedEnrollments = [...sanitizedEnrollments, ...(enrollments ?? [])];
  }

  return {
    ...tei,
    enrollments: sanitizedEnrollments,
    attributes: santizedAttributes,
  };
}

async function getSanitizedTrackedEntityInstanceAttributesIdentifiableAttributes(): Promise<any> {}

async function getSanitizedProgramStagesWithIdentifiableDataElements(): Promise<any> {}

export function useProfileData() {
  const { teiId }: { teiId?: string } = useParams();
  const refresh = useRecoilRefresher_UNSTABLE(KBProfileState(teiId));
  return {
    profile: useRecoilValue(KBProfileState(teiId)),
    refresh,
  };
}
