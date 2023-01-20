import {DimensionsSelector} from "../../../../shared/components/DimensionsSelector";
import i18n from '@dhis2/d2-i18n';
import {DimensionSelectorProps} from "../../../../shared/components/DimensionsSelector/components/DimensionSelector";
import React, {useCallback, useMemo, useState} from "react";
import {useRecoilCallback, useRecoilValue} from "recoil";
import {DimensionState} from "./state/dimensions";
import {OrgUnitSelectorModal, PeriodSelectorModal} from "@hisptz/dhis2-ui";
import {OrgUnitSelection, PeriodUtility} from "@hisptz/dhis2-utils";
import {compact, find, isEmpty} from "lodash";
import {useOrgUnits} from "../../../../shared/hooks/orgUnit";
import {ProgramSelectorModal} from "./components/ProgramSelector";
import {useSetting} from "@dhis2/app-service-datastore";

export function DataDimensionSelector() {
    const periodSelection = useRecoilValue(DimensionState("pe"));
    const orgUnitSelection = useRecoilValue(DimensionState("ou"));
    const programSelection = useRecoilValue(DimensionState("program"));

    const [programs] = useSetting("programs", {global: true})

    const {selectedOrgUnits, setSelectedOrgUnits} = useOrgUnits(orgUnitSelection)

    const [openFilter, setOpenFilter] = useState<"program" | "ou" | "pe" | undefined>();

    const onFilterOpen = useCallback(
        (dimension: "program" | "ou" | "pe") => () => {
            setOpenFilter(dimension)
        },
        [],
    );
    const onFilterUpdate = useRecoilCallback(({set}) => (dimension: "program" | "ou" | "pe", value: string[]) => {
        setOpenFilter(undefined)
        set(DimensionState(dimension), value);
    }, [])

    const onFilterClose = () => {
        setOpenFilter(undefined)
    }

    const selectors: DimensionSelectorProps[] = useMemo(() => [
        {
            label: i18n.t("Select intervention"),
            onClick: onFilterOpen("program"),
            selectedItems: compact(programSelection.map((programId: string) => find(programs, ['id', programId])?.name)) ?? [],
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
            selectedItems: periodSelection?.map((periodId: string) => PeriodUtility.getPeriodById(periodId).name) ?? [],
            id: "pe"
        },
    ], [onFilterOpen, selectedOrgUnits, periodSelection, programSelection]);

    return (
        <>
            <DimensionsSelector selectors={selectors}/>
            {
                openFilter === "ou" && (<OrgUnitSelectorModal
                    value={{
                        orgUnits: selectedOrgUnits
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
                />)
            }
            <PeriodSelectorModal
                position="middle"
                onClose={onFilterClose}
                hide={!(openFilter === "pe")}
                selectedPeriods={periodSelection ?? []}
                onUpdate={
                    (items: any) => {
                        if (!isEmpty(items)) {
                            onFilterUpdate("pe", items)
                        }
                    }
                }/>
            <ProgramSelectorModal
                onClose={onFilterClose}
                hide={!(openFilter === "program")}
                onUpdate={(value) => onFilterUpdate("program", value)}
                selected={programSelection}/>
        </>
    )
}
