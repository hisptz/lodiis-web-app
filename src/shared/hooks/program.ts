import { useSetting } from "@dhis2/app-service-datastore";
import { useDataQuery } from "@dhis2/app-runtime";
import { useRecoilState, useResetRecoilState } from "recoil";
import { KBProgramState } from "../state/program";
import { useEffect, useMemo } from "react";
import { KBProgram } from "../models/program";
import { ProgramConfig } from "../interfaces/metadata";
import { Program } from "@hisptz/dhis2-utils";
import { find } from "lodash";
import { useSearchParams } from "react-router-dom";

const query = {
	program: {
		resource: "programs",
		id: ({ programId }: any) => programId,
		params: {
			fields: [
				"id",
				"displayName",
				"programTrackedEntityAttributes[mandatory,trackedEntityAttribute[id,displayName,formName,valueType,optionSet[code,name]]]",
				"programStages[displayName,id,lastUpdated,programStageDataElements[dataElement[id,formName,valueType,displayName,optionSet[code,name]]]]",
			],
		},
	},
};

export function useKBProgram() {
	const [searchParams] = useSearchParams();
	const programId = useMemo(
		() => searchParams.get("program"),
		[searchParams],
	);
	const [programsConfig] = useSetting("programs", { global: true });
	const { data, loading, error, refetch } = useDataQuery(query, {
		lazy: true,
		variables: {
			programId,
		},
	});

	const [program, setProgram] = useRecoilState(KBProgramState);
	const resetKBProgramState = useResetRecoilState(KBProgramState);

	useEffect(() => {
		if (programId) {
			refetch({
				programId,
			});
		}
		return () => {};
	}, [programId]);

	useEffect(() => {
		if (!programId) {
			return;
		}
		const config = find(programsConfig, ["id", programId]);
		if (!config) {
			return;
		}
		const program = data?.program;
		if (!program) {
			return;
		}

		setProgram(new KBProgram(config as ProgramConfig, program as Program));
		return () => {
			resetKBProgramState();
		};
	}, [data, programsConfig, programId]);

	return {
		program,
		loading,
		error,
	};
}
