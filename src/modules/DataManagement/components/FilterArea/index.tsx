import React, {useState} from "react";
import {Button, ButtonStrip, DropdownButton, FlyoutMenu, IconLayoutColumns24, MenuItem} from '@dhis2/ui'
import i18n from '@dhis2/d2-i18n';
import {SearchArea} from "./components/SearchArea";


export function FilterArea() {
    const [downloadStateRef, setDownloadStateRef] = useState(false);
    const onDownloadClick = (type: string) => () => {
        setDownloadStateRef(false);
        //TODO: Implement download feature here
    };

    return (
        <div style={{padding: "0 16px"}} className=" row space-between w-100">
            <SearchArea/>
            <ButtonStrip>
                <Button icon={<IconLayoutColumns24/>}>{i18n.t("Columns")}</Button>
                <DropdownButton
                    onClick={() => setDownloadStateRef((prevState) => !prevState)}
                    open={downloadStateRef}
                    component={
                        <div className="w-100">
                            <FlyoutMenu>
                                <MenuItem
                                    label={i18n.t('Excel')}
                                    onClick={onDownloadClick('xlsx')}
                                />
                                <MenuItem
                                    label={i18n.t('CSV')}
                                    onClick={onDownloadClick('xlsx')}
                                />
                                <MenuItem
                                    label={i18n.t('JSON')}
                                    onClick={onDownloadClick('json')}
                                />
                            </FlyoutMenu>
                        </div>
                    }

                >{i18n.t("Download")}</DropdownButton>
            </ButtonStrip>
        </div>
    )
}
