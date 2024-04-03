import { useProfileData } from "./data";
import { find, isEmpty, uniq } from "lodash";
import { useDataQuery } from "@dhis2/app-runtime";
import { useEffect, useMemo, useState } from "react";
import { asyncify, map } from "async-es";
import { Relationship, TrackedEntityInstance } from "@hisptz/dhis2-utils";

const teiQuery = {
	tei: {
		resource: "trackedEntityInstances",
		id: ({ id }: any) => id,
		params: ({ program }: any) => {
			return {
				program,
				fields: [
					"trackedEntityInstance",
					"attributes[attribute,value]",
				],
			};
		},
	},
};
const relationshipTypeQuery = {
	rType: {
		resource: "relationshipTypes",
		params: ({ ids }: any) => {
			return {
				relationshipType: `${ids.join(";")}`,
				fields: [
					"name",
					"id",
					"displayFromToName",
					"displayToFromName",
					"toConstraint[program[id]]",
					"fromConstraint[program[id]]",
				],
			};
		},
	},
};

export function useProfileRelationships() {
	const { profile } = useProfileData();
	const relationships = useMemo(() => profile?.relationships, [profile]);
	const hasRelationships = useMemo(
		() => !isEmpty(relationships),
		[relationships],
	);
	const relationshipTypes = uniq(
		relationships?.map(({ relationship }) => relationship.relationshipType),
	);
	const { loading: loadingTypes, refetch: getRTypes } = useDataQuery(
		relationshipTypeQuery,
		{
			variables: {
				ids: relationshipTypes,
			},
			lazy: true,
		},
	);
	const { refetch, loading: loadingTeis } = useDataQuery(teiQuery, {
		lazy: true,
	});
	const [teiRelationship, setTeiRelationship] = useState<
		{
			otherTei: TrackedEntityInstance;
			relationship: Relationship;
			program: string;
		}[]
	>([]);

	useEffect(() => {
		async function getTei() {
			if (!hasRelationships) {
				return;
			}
			const relationshipTypesData = await getRTypes({
				ids: relationshipTypes,
			});
			if (relationshipTypesData?.rType) {
				const teis = relationships?.map(
					({ relationship, otherTei, type }) => {
						const relationshipType = find(
							(relationshipTypesData?.rType as any)
								?.relationshipTypes as any[],
							["id", relationship.relationshipType],
						);

						const program =
							relationshipType?.toConstraint?.program?.id ===
							profile?.program?.id
								? relationshipType?.fromConstraint?.program?.id
								: relationshipType?.toConstraint?.program?.id;

						return {
							id: otherTei.trackedEntityInstance,
							program,
							relationship,
						};
					},
				);

				const data = (await map(
					teis ?? [],
					asyncify(
						async ({
							program,
							id,
							relationship,
						}: {
							program: string;
							id: string;
							relationship: any;
						}) =>
							await refetch({
								id,
								program,
							}).then((response) => {
								return {
									otherTei: response?.tei,
									program,
									relationship,
								};
							}),
					),
				)) as any;

				return data;
			}
		}

		getTei().then(setTeiRelationship);
	}, [profile]);

	return {
		loading: loadingTeis || loadingTypes,
		teiRelationship,
		hasRelationships,
	};
}
