import {useRecoilState} from "recoil";
import {DimensionSelector} from "../DimensionSelector";
import i18n from "@dhis2/d2-i18n";
import {PeriodSelectorModal} from "@hisptz/dhis2-ui";
import {isEmpty} from "lodash";
import React from "react";
import {useBoolean} from "usehooks-ts";
import {PeriodUtility} from "@hisptz/dhis2-utils";
import {DimensionState} from "../../../../state/dimensions";


export function PeriodDimensionSelector() {
    const {value: hide, setTrue, setFalse} = useBoolean(true);
    const [periodSelection, setPeriodSelection] = useRecoilState(DimensionState("pe"));

    return (
        <>
            <DimensionSelector
                selectedItems={periodSelection?.map((periodId: string) => PeriodUtility.getPeriodById(periodId).name) ?? []}
                onClick={setFalse} id="pe" label={i18n.t("Select period")}/>
            {
                !hide && (<PeriodSelectorModal
                    selectedPeriods={periodSelection ?? []}
                    position="middle"
                    onClose={setTrue}
                    hide={hide}
                    onUpdate={
                        (items: any) => {
                            if (!isEmpty(items)) {
                                setTrue()
                                setPeriodSelection(items)
                            }
                        }
                    }
                />)
            }
        </>
    )
}
