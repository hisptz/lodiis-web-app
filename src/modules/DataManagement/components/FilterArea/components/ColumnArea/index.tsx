import {Button, ButtonStrip, IconLayoutColumns24, Modal, ModalActions, ModalContent, ModalTitle} from '@dhis2/ui'
import i18n from "@dhis2/d2-i18n";
import React, {useMemo} from "react";
import {ColumnConfig} from "../../../../../../constants/metadata";
import {RHFCheckboxField} from "@hisptz/dhis2-ui";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import {useBoolean} from "usehooks-ts";
import {useRecoilState, useRecoilValue} from "recoil";
import {ColumnState} from "../../../Table/state/column";
import {KBProgramState} from "../../../../../../shared/state/program";
import {useDimension} from "../../../../../../shared/hooks/dimension";


export function ColumnArea() {
    const {program: programId} = useDimension();
    const kbProgram = useRecoilValue(KBProgramState)
    const [columnVisibility, setColumnVisibility] = useRecoilState(ColumnState(programId))
    const {value: hide, setTrue: hideModal, setFalse: showModal} = useBoolean(true);
    const columns = useMemo(() => {
        return kbProgram?.tableColumns ?? [];
    }, [kbProgram]);

    return (
        <>
            <Button
                onClick={showModal}
                icon={<IconLayoutColumns24/>}>
                {i18n.t("Columns")}
            </Button>
            <ColumnModal
                onChange={setColumnVisibility}
                columns={columns}
                hide={hide}
                value={columnVisibility}
                onClose={hideModal}
            />
        </>
    )
}


function ColumnSelector({columns}: { columns: ColumnConfig[] }) {

    const {setValue} = useFormContext();
    const onAllClick = (action: "check" | "uncheck") => () => {
        columns.forEach((column) => {
            if (!column.mandatory) {
                setValue(column.key, action === "check")
            }
        })
    }
    return (
        <div className="column gap-8">
            <ButtonStrip>
                <Button onClick={onAllClick("check")}>{i18n.t("Check all ")}</Button>
                <Button onClick={onAllClick("uncheck")}>{i18n.t("Uncheck all ")}</Button>
            </ButtonStrip>
            {
                columns.map((column) => (
                    <RHFCheckboxField disabled={column.mandatory} label={column.label} name={column.key}/>))
            }
        </div>
    )
}

export function ColumnModal({
                                hide,
                                value,
                                columns,
                                onChange,
                                onClose
                            }: { hide: boolean, value?: { [key: string]: boolean }, onChange: (value: { [key: string]: boolean }) => void; onClose: () => void; columns: ColumnConfig[] }) {
    const form = useForm<{ [key: string]: boolean }>({
        defaultValues: value
    })

    const onSubmit = (value: { [key: string]: boolean }) => {
        onClose();
        onChange(value)
    }

    return (
        <Modal hide={hide} position="middle" onClose={onClose}>
            <ModalTitle>
                {i18n.t("Choose columns to be displayed on the table")}
            </ModalTitle>
            <ModalContent>
                <FormProvider {...form}>
                    <ColumnSelector columns={columns}/>
                </FormProvider>
            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button onClick={onClose}>
                        {i18n.t("Hide")}
                    </Button>
                    <Button primary onClick={form.handleSubmit(onSubmit)}>
                        {i18n.t("Update")}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
