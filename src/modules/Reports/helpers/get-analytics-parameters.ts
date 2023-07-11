import * as _ from "lodash";

const defaultCustomDxConfigIds = [
  "date_of_last_service_received",
  "beneficiary_age",
  "beneficiary_age_range",
  "beneficiary_age_ranges",
  "is_service_provided",
  "isAgywBeneficiary",
  "district_of_service",
  "facility_name",
  "last_service_community_council",
  "district_of_residence",
  "following_up_visit",
  "community_council_of_residence",
  "is_eligible_for_prep",
  "date_of_last_service_received",
  "assessmment_date",
  "is_assemmenet_conducted",
  "prep_beneficairy_status",
];

export function getAnalyticsParameters(
  selectedOrgUnitItems: Array<any>,
  selectedPeriods: Array<any>,
  selectedProgramIds: Array<string>,
  programMetadataObjects: any,
  dxConfigs: Array<{
    id: string;
    ids?: string[];
    name: string;
    programStage: string;
    progranStages?: Array<{
      id: string;
      dataElements: string[];
    }>;
  }>
) {
  const enrollmentAnalyticParameters = [];
  const pe = getPeriods(selectedPeriods);
  const ou = getOrganisations(selectedOrgUnitItems);
  const attributes = getAttributeConfigs(dxConfigs);
  const dataElements = getDataElementConfigs(dxConfigs);
  if (selectedProgramIds.length > 0 && attributes.length > 0) {
    enrollmentAnalyticParameters.push(
      getEnrollmentAnaliticParameters(
        selectedProgramIds,
        programMetadataObjects,
        attributes,
        ou,
        pe
      )
    );
  }
  const groupedDataElements = _.groupBy(dataElements || [], "programStage");
  const groupedDxConfigs = _.mapValues(
    groupedDataElements,
    (programStageDataElements: any[]) => {
      const programStage =
        programStageDataElements.length > 0
          ? programStageDataElements[0]?.programStage
          : "";
      const programId =
        programStageDataElements.length > 0
          ? programStageDataElements[0].program
          : "";
      const programIdByStage = getProgrammIdByProgramStage(
        programMetadataObjects,
        programStage
      );
      const selectedAttributes = getSelectiveAttributesByProgramId(
        programMetadataObjects,
        programIdByStage,
        attributes
      );
      const configs =
        programId && programId !== ""
          ? [...programStageDataElements]
          : [
              ...programStageDataElements,
              ..._.map(selectedAttributes, (attribute: any) => ({
                ...attribute,
                programStage,
                program: programIdByStage,
              })),
            ];
      return configs;
    }
  );
  return _.keys(groupedDxConfigs).length > 0
    ? _.flattenDeep(
        _.concat(
          enrollmentAnalyticParameters,
          _.map(_.keys(groupedDxConfigs), (programStage: string) => {
            const dx = _.uniq(
              _.flattenDeep(
                _.map(
                  groupedDxConfigs[programStage] || [],
                  (groupedDxConfig: any) => {
                    const dxList = [];
                    if (
                      groupedDxConfig.id !== "" &&
                      groupedDxConfig.programStage !== "" &&
                      groupedDxConfig.ids &&
                      groupedDxConfig.ids.length > 0
                    ) {
                      dxList.push(
                        _.map(
                          groupedDxConfig.ids || [],
                          (dxId: string) =>
                            `${groupedDxConfig.programStage}.${dxId}`
                        )
                      );
                    } else if (
                      groupedDxConfig.id !== "" &&
                      groupedDxConfig.programStage !== ""
                    ) {
                      dxList.push(
                        `${groupedDxConfig.programStage}.${groupedDxConfig.id}`
                      );
                    }
                    return dxList;
                  }
                )
              )
            );
            if (dx.length > 0) {
              const programIds = _.uniq(
                _.flattenDeep(
                  _.map(
                    groupedDxConfigs[programStage] || [],
                    (groupedDxConfig: any) => {
                      return groupedDxConfig.program &&
                        groupedDxConfig.program !== ""
                        ? groupedDxConfig.program
                        : [];
                    }
                  )
                )
              );
              const programId = programIds.length > 0 ? programIds[0] : "";
              return {
                ou,
                pe,
                dx,
                programId,
                isEnrollmentAnalytic: false,
              };
            } else {
              return [];
            }
          })
        )
      )
    : _.flattenDeep([enrollmentAnalyticParameters]);
}

function getSelectiveAttributesByProgramId(
  programMetadataObjects: any,
  programId: any,
  attributeConfigs: any
) {
  const selectedAttributes = [];
  const hasProgramAttributes = programMetadataObjects.hasOwnProperty(programId);
  if (hasProgramAttributes) {
    const programMetadataObject = programMetadataObjects[programId] || {};
    const programAttributes = programMetadataObject.attributes || [];
    selectedAttributes.push(
      _.filter(
        _.flattenDeep(
          _.map(attributeConfigs, (attributeObject: any) => {
            return _.concat(
              attributeObject,
              _.map(attributeObject.ids || [], (id: string) => {
                return { ...attributeObject, id };
              })
            );
          })
        ),
        (attributeObject: any) =>
          attributeObject &&
          attributeObject.id &&
          programAttributes.includes(attributeObject.id)
      )
    );
  }
  return _.flattenDeep(selectedAttributes);
}

function getProgrammIdByProgramStage(
  programMetadataObjects: any,
  programStage: string
) {
  return (
    _.find(_.keys(programMetadataObjects), (id: string) => {
      const programMetadataObject = programMetadataObjects[id] || {};
      const programStages = programMetadataObject.programStages || [];
      return programStages.includes(programStage);
    }) || ""
  );
}

function getEnrollmentAnaliticParameters(
  selectedProgramIds: string[],
  programMetadataObjects: any,
  attributes: any,
  ou: any,
  pe: any
): any {
  return _.map(selectedProgramIds || [], (selectedProgramId: string) => {
    const selectedAttributes = programMetadataObjects.hasOwnProperty(
      selectedProgramId
    )
      ? _.filter(attributes, (attributeObject: any) => {
          const programMetadataObject =
            programMetadataObjects[selectedProgramId] || {};
          const programAttributes = programMetadataObject.attributes || [];
          return (
            attributeObject &&
            attributeObject.id &&
            programAttributes.includes(attributeObject.id)
          );
        })
      : attributes;
    return {
      ou,
      pe,
      programId: selectedProgramId,
      isEnrollmentAnalytic: true,
      dx: _.uniq(
        _.flattenDeep(
          _.map(
            selectedAttributes,
            (attributeObject: any) => attributeObject.id || []
          )
        )
      ),
    };
  });
}

function getDataElementConfigs(
  dxConfigs: {
    id: string;
    ids?: string[];
    name: string;
    programStage: string;
    progranStages?: Array<{
      id: string;
      dataElements: string[];
    }>;
  }[]
) {
  return _.filter(
    _.flattenDeep(
      _.map(
        _.flattenDeep(
          _.map(dxConfigs || [], (dxConfig: any) => {
            const ids = dxConfig.ids || [];
            return ids.length === 0
              ? dxConfig
              : _.map(ids, (newId: string) => {
                  return { ...dxConfig, id: newId };
                });
          })
        ),
        (dxConfig: any) => {
          const progranStages = dxConfig.progranStages || [];
          return progranStages.length == 0
            ? dxConfig
            : _.map(progranStages, (progranStageConfig: any) => {
                return _.map(
                  progranStageConfig.dataElements,
                  (newId: string) => {
                    return {
                      ...dxConfig,
                      id: newId,
                      progranStage: progranStageConfig.id,
                    };
                  }
                );
              });
        }
      )
    ),
    (dxConfig: any) =>
      !dxConfig.isAttribute &&
      dxConfig.id !== "" &&
      !defaultCustomDxConfigIds.includes(dxConfig.id)
  );
}

function getAttributeConfigs(
  dxConfigs: {
    id: string;
    ids?: string[];
    name: string;
    programStage: string;
  }[]
) {
  return _.uniqBy(
    _.filter(
      _.flattenDeep(
        _.map(dxConfigs || [], (dxConfig: any) => {
          const ids = dxConfig.ids || [];
          return ids.length === 0
            ? dxConfig
            : _.map(ids, (newId: string) => {
                return { ...dxConfig, id: newId };
              });
        })
      ),
      (dxConfig: any) =>
        dxConfig.isAttribute &&
        dxConfig.id &&
        dxConfig.id !== "" &&
        !defaultCustomDxConfigIds.includes(dxConfig.id)
    ),
    "id"
  );
}

function getOrganisations(selectedOrgUnitItems: any[]) {
  return _.uniq(
    _.flattenDeep(
      _.map(
        selectedOrgUnitItems,
        (organisationUnit: any) => organisationUnit.id || []
      )
    )
  );
}

function getPeriods(selectedPeriods: any[]) {
  return _.uniq(
    _.flattenDeep(
      _.map(selectedPeriods, (period: any) => {
        const { id, type, endDate, startDate } = period;
        return startDate &&
          endDate &&
          startDate.id &&
          endDate.id &&
          type &&
          `${type}`.toLowerCase() == "dates-range"
          ? `startDate=${startDate.id}&endDate=${endDate.id}`
          : id || [];
      })
    )
  );
}
