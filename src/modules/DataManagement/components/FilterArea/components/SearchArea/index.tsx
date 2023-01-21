import {Button, ButtonStrip, IconSearch24, Modal, ModalActions, ModalContent, ModalTitle} from '@dhis2/ui'
import i18n from '@dhis2/d2-i18n';
import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {RHFTextInputField} from "@hisptz/dhis2-ui";
import {useBoolean} from "usehooks-ts";
import {useRecoilState} from "recoil";
import {SearchValuesState} from "./state/search";


export interface SearchCriteriaValues {
    primaryUIC?: string;
    firstName?: string;
    surname?: string;
}


export function SearchArea() {
    const {value: searchHidden, setTrue: closeSearch, setFalse: openSearch} = useBoolean(true);
    const [searchValue, setSearchValue] = useRecoilState(SearchValuesState);
    return (
        <>
            <Button onClick={openSearch} icon={<IconSearch24/>}>
                {i18n.t("Search")}
            </Button>
            <SearchModal value={searchValue} hide={searchHidden} onClose={closeSearch} onUpdate={setSearchValue}/>
        </>
    )
}


function Search() {


    return (
        <div className="column gap-16">
            <RHFTextInputField label={i18n.t("Primary UIC")} name={"primaryUIC"}/>
            <RHFTextInputField label={i18n.t("First name")} name={"firstName"}/>
            <RHFTextInputField label={i18n.t("Surname")} name={"surname"}/>
        </div>
    )
}

export function SearchModal({
                                onClose,
                                onUpdate,
                                value,
                                hide,
                            }: { onClose: () => void; onUpdate: (value: SearchCriteriaValues) => void; value?: SearchCriteriaValues, hide: boolean }) {
    const form = useForm<SearchCriteriaValues>({
        defaultValues: value
    });

    const onFormSubmit = (value: SearchCriteriaValues) => {
        onClose();
        onUpdate(value);
    }

    return (
        <Modal position="middle" onClose={onClose} hide={hide}>
            <ModalTitle>
                {i18n.t("Search Criteria")}
            </ModalTitle>
            <ModalContent>
                <FormProvider {...form}>
                    <Search/>
                </FormProvider>
            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button>{i18n.t("Hide")}</Button>
                    <Button onClick={form.handleSubmit(onFormSubmit)} primary>{i18n.t("Update")}</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
