import {
    Button,
    ButtonStrip,
    IconFolder24,
    Menu,
    MenuItem,
    Modal,
    ModalActions,
    ModalContent,
    ModalTitle
} from '@dhis2/ui'
import React, {useState} from 'react'
import i18n from '@dhis2/d2-i18n';
import {useSetting} from "@dhis2/app-service-datastore";


export function ProgramSelector({onSelect, selected}: { onSelect: (selected: string[]) => void, selected: string[] }) {
    const [programs] = useSetting("programs", {global: true});
    return (
        <div className="w-100 p-8">
            <Menu>
                {
                    programs?.map((program: { id: string; name: string }) => (
                        <MenuItem
                            onClick={() => onSelect([program.id])}
                            active={selected.includes(program.id)}
                            icon={<IconFolder24/>}
                            key={`${program.id}-menu-item`}
                            label={program.name}
                            value={program.id}
                        />
                    ))
                }
            </Menu>
        </div>
    )
}


export function ProgramSelectorModal({
                                         onClose,
                                         hide,
                                         onUpdate,
                                         selected
                                     }: { onClose: () => void, hide: boolean; onUpdate: (selected: string[]) => void, selected: string[] }) {
    const [selectedPrograms, setSelectedPrograms] = useState(selected ?? []);

    const onUpdateClick = () => {
        onUpdate(selectedPrograms)
    }

    return (
        <Modal position="middle" onClose={onClose} hide={hide}>
            <ModalTitle>
                {i18n.t("Select program")}
            </ModalTitle>
            <ModalContent>
                <ProgramSelector onSelect={setSelectedPrograms} selected={selectedPrograms}/>
            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
                    <Button primary onClick={onUpdateClick}>{i18n.t("Update")}</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}
