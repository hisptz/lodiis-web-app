import { head, isEmpty } from "lodash";
import { useRecoilValue } from "recoil";
import { DimensionState } from "../state/dimensions";

export function useDimension() {
	const program = head(useRecoilValue(DimensionState("program"))) as string;
	const orgUnits = useRecoilValue(DimensionState("ou"));
	const periods = useRecoilValue(DimensionState("pe"));

	const dimensionsNotSelected =
		isEmpty(orgUnits) || isEmpty(periods) || isEmpty(program);

	return {
		orgUnits,
		periods,
		program,
		dimensionsNotSelected,
	};
}
