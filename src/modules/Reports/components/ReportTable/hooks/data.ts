import { useReportDimension } from "./dimension";
import { useAlert, useDataQuery } from "@dhis2/app-runtime";
import { useEffect, useMemo, useState } from "react";
import { Pagination, Program } from "@hisptz/dhis2-utils";
import { chunk, isEmpty } from "lodash";
import { useBoolean, useCounter } from "usehooks-ts";
import { atomFamily, useRecoilState } from "recoil";

const reportEnrollmentQuery = {
	data: {
		resource: "analytics",
		id: ({ program }: any) => `enrollments/query/${program}`,
		params: ({
					 ou,
					 pe,
					 dx,
					 startDate,
					 endDate,
					 stage,
					 page,
					 pageSize,
					 ...params
				 }: any) => {
			const dimensions = [
				`ou:${ou.join(";")}`,
				`pe:${pe.join(";")}`,
				...(dx?.map((dx: string) => `${dx}`) ?? [])
			];
			return {
				displayProperty: "NAME",
				outputType: "ENROLLMENT",
				desc: "enrollmentdate",
				dimension: dimensions,
				stage,
				startDate,
				endDate,
				page,
				pageSize,
				totalPages: true,
				...params
			};
		}
	}
};
const reportEventQuery = {
	data: {
		resource: "analytics",
		id: ({ program }: any) => `events/query/${program}`,
		params: ({
					 ou,
					 pe,
					 dx,
					 startDate,
					 endDate,
					 stage,
					 page,
					 pageSize,
					 ...params
				 }: any) => ({
			displayProperty: "NAME",
			outputType: "EVENT",
			desc: "eventdate",
			dimension: [
				`ou:${ou.join(";")}`,
				...(pe && pe.length > 0 ? [`pe:${pe.join(";")}`] : []),
				...(dx?.map((dx: string) => `${dx}`) ?? [])
			],
			stage,
			startate,
			endDate,
			page,
			pageSize,
			totalPages: true,
			...params
		})
	}
};
const progrmStagsQury = {
	ps: {
		resource: "programStages",
		params: ({ programStageIds }: any) => ({
			filter: [`id:in:[${programStageIds.join(",")}]`],
			fields: ["id", "publicAccess"]
		})
	}
};
const orgUnitQury =
	o;
:
{
	resource: "organisationUnits",
		params;
:
	{
		fields: ["id", "name", "level", "ancestors[name,level]"],
			paging;
	:
		false,
	}
,
}
,
};
const programQuery = {
	programs: {
		resource: "programs",
		params: ({ programIds }: any) => ({
			filter: [`id:in:[${programIds.join(",")}]`],
			fields: [
				"id",
				"programStages[id]",
				"programTrackedEntityAttributes[trackedEntityAttribute[id]]"
			]
		})
	}
};

export const ReportDataState = atomFamily<
	Array<{ id: string; [key: string]: any }>,
	string | undefined
>({
	key: "report-data-state",
	default: undefined
});

export const ReportDataProgressState = atomFamily<
	{
		progress: number;
		total: number;
	},
	string
>({
	key: "report-data-progress",
	default: {
		progress: 0,
		total: 1
	}
});

export function useReportData() {
	const { periods, orgUnits, report } = useReportDimension();
	const {
		value: loading,
		setTrue: setIsLoading,
		setFalse: setIsNotLoading
	} = useBoolean(false);
	const [error, setError] = useState(null);
	const handleError = (error: any) => {
		console.error(error.message);
		setError(error.message);
	};
	const { refetch: getEnrollments } = useDataQuery(reportEnrollmentQuery, {
		lazy: true,
		onError: handleError
	});
	const { refetch: getProgramStages } = useDataQuery(programStagesQuery, {
		lazy: true
	});
	const { refetch: getEvents } = useDataQuery(reportEventQuery, {
		lazy: true,
		onError: handleError
	});
	const { refetch: getPrograms } = useDataQuery(programQuery, {
		lazy: true,
		onError: handleError
	});
	const { refetch: getOrgUnits } = useDataQuery(orgUnitQuery, {
		lazy: true,
		onError: handleError
	});
	const { show, hide } = useAlert(
		({ message }) => message,
		({ type }) => ({ ...type, duration: 3000 })
	);
	const [data, setData] = useRecoilState(ReportDataState(report?.id));
	const columns = useMemo(() => report?.getColumns() ?? [], [report]);
	const [totalRequests, setTotalRequests] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		async function get() {
			setError(null);
			try {
				if (
					!report ||
					!periods ||
					isEmpty(periods) ||
					!orgUnits ||
					isEmpty(orgUnits)
				) {
					return;
				}
				setIsLoading();
				const programMetadata = await getPrograms({
					programIds: report.programs
				});
				report.setProgramMetadata(
					(programMetadata?.programs as any)?.programs as Program[]
				);
				await report.getData(
					{ orgUnits, periods },
					{ getEvents, getEnrollments, setTotalRequests, setProgress }
				);
				const allOrgUnits = ((await getOrgUnits())?.ou as any)
					?.organisationUnits;
				const formattedData = report.getFormattedData(allOrgUnits);
				setData(formattedData);
			} catch (e: any) {
				setError(e?.message || "An unexpected error occurred.");
				show({
					message: e?.message,
					type: { critical: true }
				});
				setTimeout(() => hide(), 5000);
			} finally {
				setIsNotLoading();
				setTotalRequests(0);
				setProgress(0);
			}
		}

		setTimeout(async () => {
			await get();
		}, 300);
	}, [report, orgUnits, periods]);

	const percentage = useMemo(() => {
		if (totalRequests === 0) {
			return;
		}

		const calculatedPercentage = Math.floor(
			(progress / totalRequests) * 100
		);
		return calculatedPercentage > 100 ? 100 : calculatedPercentage;
	}, [totalRequests, progress]);

	return {
		loading,
		rows: data,
		columns,
		percentage,
		error
	};
}

export function useReportPaginatedData(): {
	percentage?: number;
	chunking: boolean;
	pagination: Pagination & {
		onPageChange: (page: number) => void;
		onPageSizeChange: (pageSize: number) => void;
	};
	rows: { id: string; [key: string]: any }[];
	loading: boolean;
	columns: Array<{ label: string; key: string }>;
	error?: string | null;
} {
	const { loading, rows, error, columns, ...props } = useReportData();
	const [pageSize, setPageSize] = useState(50);
	const {
		value: chunking,
		setTrue: setChunkingTrue,
		setFalse: setChunkingFalse
	} = useBoolean(false);

	const chunkWorker = async ({ rows, pageSize }: any): Promise<any> => {
		return await new Promise((resolve, reject) => {
			try {
				resolve(chunk(rows, pageSize));
			} catch (e) {
				reject(e);
			}
		});
	};

	const [rowChunks, setRowChunks] = useState<Array<typeof rows>>([]);
	const { count: page, setCount } = useCounter(1);

	useEffect(() => {
		async function getChunks() {
			setChunkingTrue();
			setRowChunks(await chunkWorker({ rows, pageSize }));
			setChunkingFalse();
		}

		getChunks();
	}, [rows, pageSize]);

	const onPageChange = (page: number) => {
		setCount(page);
	};
	const onPageSizeChange = (pageSize: number) => {
		setCount(1);
		setPageSize(pageSize);
	};

	return {
		...props,
		pagination: {
			pageSize,
			page,
			total: rows?.length,
			pageCount: rowChunks?.length,
			onPageChange,
			onPageSizeChange
		},
		columns,
		chunking,
		loading,
		rows: rowChunks?.[page - 1] ?? [],
		error
	};
}
