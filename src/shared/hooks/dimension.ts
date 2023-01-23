import {find, head, isEmpty} from "lodash";
import {useRecoilValue} from "recoil";
import {DimensionState} from "../state/dimensions";
import {SearchValuesState} from "../../modules/DataManagement/components/FilterArea/components/SearchArea/state/search";
import {DEFAULT_PROGRAM_CONFIG, PROGRAM_CONFIG} from "../../constants/metadata";


export function useDimension() {
    const program = head(useRecoilValue(DimensionState("program")));
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

export function useProgram() {
    const program: string | undefined = head(useRecoilValue(DimensionState("program")));
    const {columns, profile} = find(PROGRAM_CONFIG, ['id', program]) ?? DEFAULT_PROGRAM_CONFIG;

    return {
        program,
        columns,
        profile
    }
}
