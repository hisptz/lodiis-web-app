import {
  CustomReportInterface,
  ReportDxConfig,
} from "../../../shared/interfaces/report";
import {
  concat,
  compact,
  filter,
  find,
  findIndex,
  flattenDeep,
  fromPairs,
  groupBy,
  isEmpty,
  keys,
  mapValues,
  omit,
  uniq,
  uniqBy,
  values,
  map,
} from "lodash";
import {
  CUSTOM_DX_CONFIG_IDS,
  DEFAULT_ANALYTICS_KEYS,
  PAGE_SIZE,
} from "../../../constants/reports";
import { Analytics, PeriodUtility, Program } from "@hisptz/dhis2-utils";
import { asyncify, mapSeries } from "async-es";
import { getFormattedEventAnalyticDataForReport } from "../helpers/get-formatted-analytics-data";
import { CustomDataTableColumn } from "@hisptz/dhis2-ui";
import { defaultCustomDxConfigIds } from "../helpers/get-analytics-parameters";

interface EventVariables {
  program: string;
  dx: string[];
  stage: string;
}

export class CustomReport {
  config: CustomReportInterface;

  data?: Record<string, any>[];

  programsMetadata?: Program[];

  constructor(config: CustomReportInterface) {
    this.config = config;
  }

  get programs() {
    return flattenDeep([this.config.program]);
  }
  get dataItems(): ReportDxConfig[] {
    return uniqBy(
      flattenDeep(
        this.config.dxConfigs.map((attribute: ReportDxConfig) => {
          if (!attribute.ids || isEmpty(attribute.ids)) {
            return attribute;
          } else {
            return attribute.ids?.map((id: string) => ({ ...attribute, id }));
          }
        }) as ReportDxConfig[]
      ),
      "id"
    ).filter((config) => {
      return !Object.values(CUSTOM_DX_CONFIG_IDS).includes(
        config.id as CUSTOM_DX_CONFIG_IDS
      );
    });
  }

  get id() {
    return this.config.id;
  }

  get name() {
    return this.config.name;
  }

  get disableOrgUnitSelection() {
    return this.config.disableOrgUnitSelection;
  }

  get disablePeriodSelection() {
    return this.config.disablePeriodSelection;
  }

  get attributes(): ReportDxConfig[] {
    return filter(
      this.dataItems,
      ({ isAttribute }) => isAttribute === true
    ) as ReportDxConfig[];
  }

  get dataElements(): ReportDxConfig[] {
    return flattenDeep(
      filter(
        this.dataItems.map((item) => {
          if (!item.programStages || isEmpty(item.programStages)) {
            return item;
          } else {
            return flattenDeep(
              item.programStages.map((stage) => {
                return (
                  stage.dataElements.map((dataElement) => {
                    return {
                      ...item,
                      id: dataElement,
                      programStage: stage.id,
                    };
                  }) ?? []
                );
              })
            );
          }
        }),
        ({ isAttribute }: any) => !isAttribute
      ) as ReportDxConfig[]
    );
  }

  get enrollmentAnalyticsParameters() {
    return this.programs
      .map((program) => {
        const attributes = this.getAttributesByProgram(program);
        return {
          program,
          dx: uniq(attributes.map(({ id }) => id)),
        };
      })
      .filter(({ dx }) => !isEmpty(dx));
  }

  get eventAnalyticsParameters(): EventVariables[] {
    const groupedDataElements = omit(
      mapValues(
        groupBy(this.dataElements, "programStage"),
        (dataElements, programStage) => [
          ...dataElements,
          ...map(
            filter(
              this.dataElements,
              ({ crossStages, programStage }) => crossStages && !programStage
            ),
            (dataElement: ReportDxConfig) => ({ ...dataElement, programStage })
          ),
        ]
      ),
      ""
    );

    console.log({ groupedDataElements });
    
    const sanitizedDataElements = mapValues(
      groupedDataElements,
      (dataElements, stage) => {
        const program = this.getProgramByStage(stage);
        if (!program) {
          return dataElements;
        } else {
          const attributes = this.getAttributesByProgram(program);
          return [
            ...dataElements,
            ...attributes.map((attribute) => ({
              ...attribute,
              program,
              programStage: stage,
            })),
          ];
        }
      }
    );

    return keys(sanitizedDataElements)
      .map((stage) => {
        const elements = sanitizedDataElements[stage];
        return {
          dx: uniq(
            compact(
              flattenDeep(
                elements.map((element) => {
                  if (defaultCustomDxConfigIds.includes(element.id ?? "")) {
                    return undefined;
                  }
                  return (element.ids ?? []).length
                    ? element.ids?.map((id) => `${element.programStage}.${id}`)
                    : `${element.programStage}.${element.id}`;
                }) as string[]
              )
            )
          ),
          program: this.getProgramByStage(stage),
          stage,
        };
      })
      .filter(({ program }) => !!program)
      .filter(({ dx }) => !isEmpty(dx)) as EventVariables[];
  }

  get programToProgramStages() {
    return fromPairs(
      this.programsMetadata?.map((program) => [
        program.id,
        program.programStages,
      ])
    );
  }

  setProgramMetadata(programs: Program[]) {
    this.programsMetadata = programs;
  }

  getAttributesByProgram(programId: string): ReportDxConfig[] {
    if (!this.programsMetadata) {
      throw Error(
        "Programs metadata not found. Call `setProgramMetadata method first`"
      );
    }
    const programMetadata = find(this.programsMetadata, ["id", programId]);
    if (programMetadata) {
      return filter(this.attributes, (attribute) => {
        return !!find(programMetadata.programTrackedEntityAttributes, [
          "trackedEntityAttribute.id",
          attribute.id,
        ]);
      });
    }
    return [];
  }

  getProgramByStage(programStage: string): string | undefined {
    if (!this.programsMetadata) {
      throw Error(
        "Programs metadata not found. Call `setProgramMetadata method first`"
      );
    }
    return find(this.programsMetadata, (program) => {
      return !!find(program.programStages, ["id", programStage]);
    })?.id;
  }

  sanitizeAnalyticsData(data: Analytics, options?: { stage?: string }) {
    const { headers, metaData, rows } = data;

    const dataKeys = flattenDeep(
      concat(
        values(DEFAULT_ANALYTICS_KEYS),
        keys(
          omit(
            metaData?.dimensions,
            concat(["ou", "pe"], metaData?.dimensions.ou || [])
          )
        )
      )
    );
    return rows?.map((row) => {
      return {
        programStage: options?.stage,
        ...fromPairs(
          dataKeys.map((key) => {
            const index = findIndex(headers, ["name", key]);
            return [key, row[index]];
          })
        ),
      };
    });
  }

  async getEnrollmentData(
    { orgUnits, periods }: { orgUnits: string[]; periods: string[] },
    {
      getEnrollments,
      setProgress,
    }: {
      getEnrollments: (
        options: Record<string, any>
      ) => Promise<Record<string, any>>;
      setProgress: any;
    }
  ) {
    const enrollmentVariables: { program: string; dx: string[] }[] = this
      .enrollmentAnalyticsParameters as { program: string; dx: string[] }[];

    if (isEmpty(enrollmentVariables)) {
      return [];
    }

    return await mapSeries(
      enrollmentVariables,
      asyncify(async ({ program, dx }: { program: string; dx: string[] }) => {
        try {
          const pagination = await this.getPagination(
            {
              program,
              dx,
              ou: orgUnits,
              pe: periods,
            },
            { getter: getEnrollments }
          );
          const pages = Array.from(
            Array(Math.ceil(pagination.total / PAGE_SIZE)).keys()
          ).map((index) => index + 1);
          return await mapSeries(
            pages,
            asyncify(
              async (page: number) =>
                await getEnrollments({
                  program,
                  dx,
                  ou: orgUnits,
                  pe: periods,
                  page,
                  pageSize: PAGE_SIZE,
                  skipMeta: true,
                  skipData: false,
                })
                  .then(({ data }) => {
                    return this.sanitizeAnalyticsData(data);
                  })
                  .catch((error) => {
                    console.error(error);
                  })
            )
          ).then((data) => {
            setProgress((prevProgress: number) => {
              return prevProgress + 1;
            });
            return data;
          });
        } catch (e) {
          console.error(e);
          return [];
        }
      })
    );
  }

  async getEventsData(
    { orgUnits, periods,  }: { orgUnits: string[]; periods: string[],},
    {
      getEvents,
      setProgress,
    }: {
      getEvents: (options: Record<string, any>) => Promise<Record<string, any>>;
      setProgress: any;
    }
  ) {
    const eventsVariables: EventVariables[] = this.eventAnalyticsParameters;
    if (isEmpty(eventsVariables)) {
      return [];
    }

    return await mapSeries(
      eventsVariables,
      asyncify(
        async ({
          program,
          stage,
          dx,
        }: {
          program: string;
          dx: string[];
          stage: string;
        }) => {
          try {

            const baseRequestObject = {
              program,
              stage,
              dx,
              ou: orgUnits,
              page: 1, 
              pageSize: PAGE_SIZE,
              skipMeta: true,
              skipData: false,
            };
            const requestObject = this.config.endDateSelection
              ? {
                ...baseRequestObject,
                startDate:"1980-02-20",
                endDate: PeriodUtility.getPeriodById(periods[0]).end.toFormat('yyyy-MM-dd'),
                }
              : {
                ...baseRequestObject,
                pe: periods,
            };
            const pagination = await this.getPagination(
              requestObject,
              { getter: getEvents }
            );
            const pages = Array.from(
              Array(Math.ceil(pagination.total / PAGE_SIZE)).keys()
            ).map((index) => index + 1);
            return await mapSeries(
              pages,
              asyncify(
                async (page: number) =>{
                  requestObject.page = page;
                  return await getEvents(requestObject)
                    .then(({ data }) => {
                      return this.sanitizeAnalyticsData(data, { stage });
                    })
                    .catch((error) => {
                      console.error(error);
                    })
                  }
              )
            ).then((data) => {
              setProgress((prevProgress: number) => {
                return prevProgress + 1;
              });
              return data;
            });
          } catch (e) {
            console.error(e);
            return [];
          }
        }
      )
    );
  }

  async getData(
    dimensions: { orgUnits: string[]; periods: string[] },
    {
      getEvents,
      getEnrollments,
      setProgress,
      setTotalRequests,
    }: {
      getEvents: (options: Record<string, any>) => Promise<Record<string, any>>;
      getEnrollments: (
        options: Record<string, any>
      ) => Promise<Record<string, any>>;
      setProgress: any;
      setTotalRequests: any;
    }
  ) {
    // TODO fix pagination for report fetching
    const promises = [
      this.getEventsData(dimensions, { getEvents, setProgress }),
      ...this.config.includeEnrollmentWithoutService ? [this.getEnrollmentData(dimensions, { getEnrollments, setProgress })] : [],
    ];
  
    setTotalRequests(promises.length);
  
    const data = await Promise.all(promises);
  
    // Update the class's data property
    this.data = flattenDeep(data) as Record<string, any>[];
    return this;
  }
  

  getFormattedData(orgUnits: any[]) {
    return uniqBy(
      getFormattedEventAnalyticDataForReport(
        this.data ?? [],
        this.config,
        orgUnits,
        this.programToProgramStages
      ),
      "id"
    );
  }

  getColumns(): CustomDataTableColumn[] {
    return uniqBy(
      this.config.dxConfigs.map((item) => {
        return {
          key: item.name,
          label: item.name,
          width: 300,
        };
      }),
      "key"
    );
  }

  private async getPagination(
    variables: {
      dx: string[];
      pe?: string[];
      ou: string[];
      program: string;
      stage?: string;
      startDate?: string;
      endDate?: string;
    },
    {
      getter,
    }: {
      getter: (options: Record<string, any>) => Promise<Record<string, any>>;
    }
  ) {
    const response = await getter({
      ...variables,
      page: 1,
      pageSize: PAGE_SIZE,
      skipData: true,
      skipMeta: false,
    });
    return response?.data?.metaData?.pager;
  }
}
