import {DimensionsSelector} from "../../../../shared/components/DimensionsSelector";
import i18n from '@dhis2/d2-i18n';
import {DimensionSelectorProps} from "../../../../shared/components/DimensionsSelector/components/DimensionSelector";
import React, {useState} from "react";
import {useRecoilCallback, useRecoilValue} from "recoil";
import {DimensionState} from "./state/dimensions";
import {OrgUnitSelectorModal, PeriodSelectorModal} from "@hisptz/dhis2-ui";
import {OrganisationUnit, OrgUnitSelection, PeriodUtility} from "@hisptz/dhis2-utils";
import {isEmpty} from "lodash";


export function DataDimensionSelector() {
    const periods = useRecoilValue(DimensionState("pe"));
    const orgUnits = useRecoilValue(DimensionState("ou"));
    const program = useRecoilValue(DimensionState("program"));

    const [selectedOrgUnits, setSelectedOrgUnits] = useState<OrganisationUnit[]>([]);

    const [openFilter, setOpenFilter] = useState<"program" | "ou" | "pe" | undefined>();

    const onFilterOpen = (dimension: "program" | "ou" | "pe") => () => {
        setOpenFilter(dimension)
    }

    const onFilterUpdate = useRecoilCallback(({set}) => (dimension: "program" | "ou" | "pe", value: string[]) => {
        setOpenFilter(undefined)
        set(DimensionState(dimension), value);
    }, [])

    const onFilterClose = () => {
        setOpenFilter(undefined)
    }

    const selectors: DimensionSelectorProps[] = [
        {
            label: i18n.t("Select intervention"),
            onClick: onFilterOpen("program"),
            selectedItems: program ?? [],
            id: "program"
        },
        {
            label: i18n.t("Select organisation unit"),
            onClick: onFilterOpen("ou"),
            selectedItems: selectedOrgUnits.map(({displayName}) => displayName ?? '') ?? [],
            id: "ou"
        },
        {
            label: i18n.t("Select period"),
            onClick: onFilterOpen("pe"),
            selectedItems: periods?.map((periodId) => PeriodUtility.getPeriodById(periodId).name) ?? [],
            id: "pe"
        },
    ]

    return (
        <>
            <DimensionsSelector selectors={selectors}/>
            <OrgUnitSelectorModal
                value={{
                    orgUnits: orgUnits?.map((orgUnit: string) => ({id: orgUnit, children: []}))
                }}
                position="middle"
                onClose={onFilterClose}
                hide={!(openFilter === "ou")}
                onUpdate={(value: OrgUnitSelection) => {
                    if (!isEmpty(value.orgUnits)) {
                        setSelectedOrgUnits(value.orgUnits ?? []);
                        onFilterUpdate("ou", value.orgUnits?.map(({id}) => id) ?? [])
                    }
                }}
            />
            <PeriodSelectorModal
                position="middle"
                onClose={onFilterClose}
                hide={!(openFilter === "pe")}
                selectedPeriods={periods ?? []}
                onUpdate={
                    (items: any) => {
                        if (!isEmpty(items)) {
                            onFilterUpdate("pe", items)
                        }
                    }
                }/>
        </>
    )
}
