import {CustomReportInterface, ReportDxConfig} from "../../../shared/interfaces/report";
import {
    chunk,
    concat,
    filter,
    find,
    findIndex,
    flattenDeep,
    fromPairs,
    groupBy,
    isEmpty,
    keys,
    mapValues,
    merge,
    omit,
    uniq,
    uniqBy,
    values
} from "lodash";
import {CUSTOM_DX_CONFIG_IDS, DEFAULT_ANALYTICS_KEYS} from "../../../constants/reports";
import {Analytics, Program} from "@hisptz/dhis2-utils";
import {asyncify, mapSeries} from "async-es";
import {getFormattedEventAnalyticDataForReport} from "../helpers/get-formatted-analytics-data";


export class CustomReport {
    config: CustomReportInterface;

    data?: Record<string, any>[]

    programsMetadata?: Program[]

    constructor(config: CustomReportInterface) {
        this.config = config;
    }

    get programs() {
        return flattenDeep(this.config.program);
    }

    get dataItems(): ReportDxConfig[] {
        return uniqBy(flattenDeep(this.config.dxConfigs.map((attribute) => {
            if (!attribute.ids || isEmpty(attribute.ids)) {
                return attribute;
            } else {
                return attribute.ids?.map((id) => ({...attribute, id}))
            }
        })), 'id').filter((config) => {
            return !Object.values(CUSTOM_DX_CONFIG_IDS).includes(config.id as CUSTOM_DX_CONFIG_IDS)
        })
    }

    get id() {
        return this.config.id;
    }

    get name() {
        return this.config.name;
    }

    get disableOrgUnitSelection() {
        return this.config.disableOrgUnitSelection
    }

    get disablePeriodSelection() {
        return this.config.disablePeriodSelection
    }

    get attributes(): ReportDxConfig[] {
        return filter(this.dataItems, ({isAttribute}) => isAttribute) as ReportDxConfig[];
    }

    get dataElements(): ReportDxConfig[] {
        return flattenDeep(filter(this.dataItems.map((item) => {
            if (!item.programStages || isEmpty(item.programStages)) {
                return item;
            } else {
                return flattenDeep(item.programStages.map((stage) => {
                    return stage.dataElements.map((dataElement) => {
                        return {
                            ...item,
                            id: dataElement,
                            programStage: stage.id
                        }
                    }) ?? []
                }))
            }
        }), ({isAttribute}: any) => !isAttribute))
    }

    get enrollmentAnalyticsParameters() {
        return this.programs.map(program => {
            const attributes = this.getAttributesByProgram(program);
            return {
                program,
                dx: uniq(attributes.map(({id}) => id))
            }
        });
    }

    get eventAnalyticsParameters() {
        const groupedDataElements = groupBy(this.dataElements, 'programStage');
        const sanitizedDataElements = mapValues(groupedDataElements, (dataElements, stage) => {
            const program = this.getProgramByStage(stage);
            if (!program) {
                return dataElements
            } else {
                const attributes = this.getAttributesByProgram(program);
                return [
                    ...dataElements,
                    ...attributes.map(attribute => ({...attribute, program, programStage: stage}))
                ]
            }
        });
        return keys(sanitizedDataElements).map(stage => {
            const elements = groupedDataElements[stage];
            return {
                dx: uniq(elements.map(element => (`${element.programStage}.${element.id}`))),
                program: this.getProgramByStage(stage),
                stage
            }
        }).filter(({program}) => !!program);
    }

    get programToProgramStages() {
        return fromPairs(this.programsMetadata?.map((program) => [program.id, program.programStages]))
    }

    setProgramMetadata(programs: Program[]) {
        this.programsMetadata = programs;
    }

    getAttributesByProgram(programId: string): ReportDxConfig[] {
        if (!this.programsMetadata) {
            throw Error("Programs metadata not found. Call `setProgramMetadata method first`");
        }
        const programMetadata = find(this.programsMetadata, ['id', programId]);
        if (programMetadata) {
            return filter(this.attributes, (attribute) => {
                return !!find(programMetadata.programTrackedEntityAttributes, ['trackedEntityAttribute.id', attribute.id])
            });
        }
        return [];
    }

    getProgramByStage(programStage: string): string | undefined {
        if (!this.programsMetadata) {
            throw Error("Programs metadata not found. Call `setProgramMetadata method first`");
        }
        return find(this.programsMetadata, (program) => {
            return !!find(program.programStages, ['id', programStage])
        })?.id
    }

    sanitizeAnalyticsData(data: Analytics, options?: { stage?: string }) {
        const {headers, metaData, rows} = data;

        const dataKeys = flattenDeep(
            concat(
                values(DEFAULT_ANALYTICS_KEYS),
                keys(omit(metaData?.dimensions, concat(['ou', 'pe'], metaData?.dimensions.ou || [])))
            )
        );
        return rows?.map((row) => {
            return {
                programStage: options?.stage,
                ...(fromPairs(dataKeys.map((key) => {
                    const index = findIndex(headers, ['name', key]);
                    return [
                        key,
                        row[index]
                    ]
                })))
            }
        })
    }

    async getEnrollmentData({
                                orgUnits,
                                periods
                            }: { orgUnits: string[], periods: string[] }, {getEnrollments}: { getEnrollments: (options: Record<string, any>) => Promise<Record<string, any>> }) {
        const enrollmentVariables: { program: string; dx: string[] }[] = this.enrollmentAnalyticsParameters.filter(({dx}) => !isEmpty(dx));

        if (isEmpty(enrollmentVariables)) {
            return [];
        }

        return await mapSeries(enrollmentVariables, asyncify(async ({
                                                                        program,
                                                                        dx
                                                                    }: { program: string, dx: string[] }) => {
            const dxChunks: string[][] = chunk(dx, 10);
            return await mapSeries(dxChunks, asyncify(async (dxChunk: string[]) => {
                return await getEnrollments({
                    program,
                    dx: dxChunk,
                    ou: orgUnits,
                    pe: periods
                }).then(({enrollments}) => this.sanitizeAnalyticsData(enrollments))
            }))
        }));
    }

    sanitizeResults(results: any) {
        return flattenDeep(results).reduce((acc, value) => merge(acc, value), {})
    }

    async getEventsData({
                            orgUnits,
                            periods
                        }: { orgUnits: string[], periods: string[] }, {getEvents}: { getEvents: (options: Record<string, any>) => Promise<Record<string, any>> }) {
        const eventsVariables: { program: string; dx: string[]; stage: string }[] = this.eventAnalyticsParameters.filter(({dx}) => !isEmpty(dx));
        if (isEmpty(eventsVariables)) {
            return []
        }

        return await mapSeries(eventsVariables, asyncify(async ({
                                                                    program,
                                                                    stage,
                                                                    dx
                                                                }: { program: string, dx: string[]; stage: string }) => {
            const dxChunks: string[][] = chunk(dx, 20);
            return await mapSeries(dxChunks, asyncify(async (dxChunk: string[]) => {
                return await getEvents({
                    program,
                    stage,
                    dx: dxChunk,
                    ou: orgUnits,
                    pe: periods
                }).then(({events}) => this.sanitizeAnalyticsData(events, {stage}))
            }))
        }));
    }

    async getData(dimensions: { orgUnits: string[], periods: string[] }, {
        getEnrollments,
        getEvents
    }: { getEvents: (options: Record<string, any>) => Promise<Record<string, any>>; getEnrollments: (options: Record<string, any>) => Promise<Record<string, any>> }) {
        const data = await Promise.all([
            this.getEnrollmentData(dimensions, {getEnrollments}),
            this.getEventsData(dimensions, {getEvents})
        ]);
        this.data = flattenDeep(data) as Record<string, any>[];
        return this;
    }

    getFormattedData(orgUnits: any[]) {
        return uniqBy(getFormattedEventAnalyticDataForReport(this.data ?? [], this.config, orgUnits, this.programToProgramStages), 'id')
    }

    getColumns() {
        return uniqBy(this.config.dxConfigs.map((item) => {
            return {
                key: item.name,
                label: item.name,
            }
        }), 'key')
    }

}
