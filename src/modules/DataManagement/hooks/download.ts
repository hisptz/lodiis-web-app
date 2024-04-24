import i18n from "@dhis2/d2-i18n";
import { asyncify, mapSeries } from "async-es";
import { useAlert, useDataQuery } from "@dhis2/app-runtime";
import { useCallback, useEffect, useState } from "react";
import { Pagination } from "@hisptz/dhis2-utils";
import { flattenDeep, get, isEmpty, range } from "lodash";
import { downloadFile } from "../../../shared/utils/download";

async function getPagination(
	refetch: any,
	{
		queryVariables,
		queryKey,
	}: { queryVariables: Record<string, any>; queryKey: string },
): Promise<Pagination> {
	const data = await refetch({
		...queryVariables,
		totalPages: true,
		skipData: true,
	});
	return get(data, [queryKey, "pager"], {}) as Pagination;
}

async function getData(
	refetch: any,
	{
		options,
		queryKey,
		resource,
		mapping,
		page,
	}: {
		options: any;
		queryKey: string;
		resource: string;
		mapping: any;
		page: number;
	},
): Promise<Array<Record<string, any>>> {
	const data = await refetch({ ...options, page });
	const rawData = get(data, [queryKey, resource]);
	if (!isEmpty(rawData)) {
		return rawData.map(mapping);
	}
	return [];
}

export function useDownloadData({
	query,
	queryKey,
	resource,
	mapping,
}: {
	query: any;
	queryKey: string;
	resource: string;
	mapping: (data: any) => Record<string, any>;
}) {
	const { show, hide } = useAlert(
		({ message }) => message,
		({ type }) => ({ ...type, duration: 10000 }),
	);

	const [downloading, setDownloading] = useState(false);
	const [pageCount, setPageCount] = useState(0);
	const [progress, setProgress] = useState(0);

	const { refetch } = useDataQuery(query, { lazy: true });

	useEffect(() => {
		if (downloading && pageCount > 0) {
			show({
				type: {
					info: true,
				},
				message: `${i18n.t("Downloading...")} ${progress}/${pageCount}`,
			});
		} else {
			hide();
		}
	}, [progress, show, downloading, pageCount, hide]);

	const download = useCallback(
		async (
			type: "xlsx" | "csv" | "json",
			queryVariables: Record<string, any>,
		) => {
			try {
				setDownloading(true);
				const pagination = await getPagination(refetch, {
					queryVariables: queryVariables,
					queryKey,
				});
				if (pagination) {
					const pageCount = pagination.pageCount ?? 0;
					setPageCount(pageCount);
					const dataFetch = async (page: number) => {
						return await getData(refetch, {
							options: queryVariables,
							queryKey,
							resource,
							mapping,
							page,
						}).then((data) => {
							setProgress(page);
							show({
								type: {
									info: true,
								},
								message: `${i18n.t("Downloading...")} ${progress}/${pageCount}`,
							});
							return data;
						});
					};
					if (pageCount >= 1) {
						const data = flattenDeep(
							await mapSeries(
								range(1, pageCount + 1),
								asyncify(dataFetch),
							),
						);
						await downloadFile(type, data);
					}
				}
			} catch (e: any) {
				show({ message: e.message, type: { critical: true } });
				setTimeout(() => hide(), 5000);
			} finally {
				setDownloading(false);
				setProgress(0);
				setPageCount(0);
				hide();
			}
		},
		[hide, mapping, queryKey, refetch, resource, show],
	);

	return {
		download,
		downloading,
	};
}
