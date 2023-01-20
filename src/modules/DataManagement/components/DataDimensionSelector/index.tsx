import {DimensionsSelector} from "../../../../shared/components/DimensionsSelector";
import i18n from '@dhis2/d2-i18n';
import {DimensionSelectorProps} from "../../../../shared/components/DimensionsSelector/components/DimensionSelector";
import React from "react";


export function DataDimensionSelector() {

    const selectors: DimensionSelectorProps[] = [
        {
            label: i18n.t("Select intervention"),
            onClick: () => {
            },
            selectedItems: [],
            id: "dx"
        },
        {
            label: i18n.t("Select organisation unit"),
            onClick: () => {
            },
            selectedItems: [],
            id: "ou"
        },
        {
            label: i18n.t("Select period"),
            onClick: () => {
            },
            selectedItems: [],
            id: "pe"
        },
    ]

    return (
        <DimensionsSelector selectors={selectors}/>
    )
}
