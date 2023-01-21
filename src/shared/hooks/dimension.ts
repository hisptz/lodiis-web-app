import {head} from "lodash";
import {useRecoilValue} from "recoil";
import {DimensionState} from "../state/dimensions";
import {SearchValuesState} from "../../modules/DataManagement/components/FilterArea/components/SearchArea/state/search";


export function useDimension() {
    const program = head(useRecoilValue(DimensionState("program")));
    const orgUnits = useRecoilValue(DimensionState("ou"));
    const periods = useRecoilValue(DimensionState("pe"));

    const search = useRecoilValue(SearchValuesState);


    return {
        orgUnits,
        periods,
        program,
        search
    }
}
