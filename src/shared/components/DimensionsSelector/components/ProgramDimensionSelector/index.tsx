import { useRecoilState } from "recoil";
import { DimensionSelector } from "../DimensionSelector";
import i18n from "@dhis2/d2-i18n";
import { compact, find, isEmpty } from "lodash";
import React from "react";
import { useBoolean } from "usehooks-ts";
import { DimensionState } from "../../../../state/dimensions";
import { ProgramSelectorModal } from "../../../../../modules/DataManagement/components/DataDimensionSelector/components/ProgramSelector";
import { useSetting } from "@dhis2/app-service-datastore";

export function ProgramDimensionSelector() {
	const [programs] = useSetting("programs", { global: true });
	const { value: hide, setTrue, setFalse } = useBoolean(true);
	const [programSelection, setProgramSelection] = useRecoilState(
		DimensionState("program"),
	);

	return (
		<>
			<DimensionSelector
				selectedItems={
					compact(
						programSelection?.map(
							(programId: string) =>
								find(programs, ["id", programId])?.name,
						),
					) ?? []
				}
				onClick={setFalse}
				id="dx"
				label={i18n.t("Select intervention")}
			/>
			<ProgramSelectorModal
				selected={programSelection}
				onClose={setTrue}
				hide={hide}
				onUpdate={(items: any) => {
					if (!isEmpty(items)) {
						setTrue();
						setProgramSelection(items);
					}
				}}
			/>
		</>
	);
}
