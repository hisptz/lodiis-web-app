import {head, isEmpty} from "lodash";
import {useRecoilValue} from "recoil";
import {DimensionState} from "../state/dimensions";
import {SearchValuesState} from "../../modules/DataManagement/components/FilterArea/components/SearchArea/state/search";


export function useDimension() {
    const program = head(useRecoilValue(DimensionState("program"))) as string;
    const orgUnits = useRecoilValue(DimensionState("ou"));
    const periods = useRecoilValue(DimensionState("pe"));

    const search = useRecoilValue(SearchValuesState);

    const dimensionsNotSelected = isEmpty(orgUnits) || isEmpty(periods) || isEmpty(program);

    return {
        orgUnits,
        periods,
        program,
        search,
        dimensionsNotSelected
    }
}
