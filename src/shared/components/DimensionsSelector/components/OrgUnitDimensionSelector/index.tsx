import {useRecoilState} from "recoil";
import {useOrgUnits} from "../../../../hooks/orgUnit";
import {DimensionSelector} from "../DimensionSelector";
import i18n from "@dhis2/d2-i18n";
import {OrgUnitSelectorModal} from "@hisptz/dhis2-ui";
import {OrgUnitSelection} from "@hisptz/dhis2-utils";
import {isEmpty} from "lodash";
import React from "react";
import {useBoolean} from "usehooks-ts";
import {DimensionState} from "../../../../state/dimensions";


export function OrgUnitDimensionSelector() {
    const {value: hide, setTrue, setFalse} = useBoolean(true);
    const [orgUnitSelection, setOrgUnitSelection] = useRecoilState(DimensionState("ou"));
    const {selectedOrgUnits, setSelectedOrgUnits} = useOrgUnits(orgUnitSelection);

    return (
        <>
            <DimensionSelector
                selectedItems={selectedOrgUnits.map(({displayName}) => displayName ?? '') ?? []}
                onClick={setFalse} id="ou" label={i18n.t("Select organisation unit")}/>
            {
                !hide && (<OrgUnitSelectorModal
                    value={{
                        orgUnits: selectedOrgUnits
                    }}
                    position="middle"
                    onClose={setTrue}
                    hide={hide}
                    onUpdate={(value: OrgUnitSelection) => {
                        if (!isEmpty(value.orgUnits)) {
                            setTrue()
                            setSelectedOrgUnits(value.orgUnits ?? []);
                            setOrgUnitSelection(value.orgUnits?.map(({id}) => id) ?? [])
                        }
                    }}
                />)
            }
        </>
    )
}
