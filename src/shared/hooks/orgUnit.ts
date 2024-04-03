import { useDataQuery } from "@dhis2/app-runtime";
import { useCallback, useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { OrganisationUnit } from "@hisptz/dhis2-utils";

const orgUnitQuery = {
	ou: {
		resource: "organisationUnits",
		params: ({ ids }: any) => ({
			filter: [`id:in:[${ids.join(",")}]`],
			fields: ["displayName", "id", "path"],
		}),
	},
};

export function useOrgUnits(defaultOrgUnits: string[]) {
	const [selectedOrgUnits, setSelectedOrgUnits] = useState<
		OrganisationUnit[]
	>([]);
	const { data, refetch, loading, error } = useDataQuery(orgUnitQuery, {
		lazy: isEmpty(defaultOrgUnits),
		variables: {
			ids: defaultOrgUnits,
		},
	});

	const get = useCallback(
		async (ids: string[]) => {
			return refetch({ ids });
		},
		[refetch],
	);

	useEffect(() => {
		if (data) {
			const orgUnits = (data?.ou as any)?.organisationUnits ?? [];
			if (!isEmpty(orgUnits)) {
				setSelectedOrgUnits(orgUnits);
			}
		}
	}, [data]);

	return {
		loading,
		error,
		selectedOrgUnits,
		setSelectedOrgUnits,
	};
}
