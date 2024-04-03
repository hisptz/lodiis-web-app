import { DimensionsSelector } from "../../../../shared/components/DimensionsSelector";
import React from "react";
import { ProgramDimensionSelector } from "../../../../shared/components/DimensionsSelector/components/ProgramDimensionSelector";
import { OrgUnitDimensionSelector } from "../../../../shared/components/DimensionsSelector/components/OrgUnitDimensionSelector";
import { PeriodDimensionSelector } from "../../../../shared/components/DimensionsSelector/components/PeriodDimensionSelector";

export function DataDimensionSelector() {
	return (
		<>
			<DimensionsSelector>
				<ProgramDimensionSelector />
				<OrgUnitDimensionSelector />
				<PeriodDimensionSelector />
			</DimensionsSelector>
		</>
	);
}
