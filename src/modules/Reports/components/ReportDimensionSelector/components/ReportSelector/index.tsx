import {
  Button,
  ButtonStrip,
  IconTable24,
  Menu,
  MenuItem,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
} from "@dhis2/ui"
import React, { useState } from "react"
import i18n from "@dhis2/d2-i18n"
import { useSetting } from "@dhis2/app-service-datastore"
import { useRecoilState } from "recoil"
import { compact, find, isEmpty } from "lodash"
import { useBoolean } from "usehooks-ts"
import { DimensionSelector } from "../../../../../../shared/components/DimensionsSelector/components/DimensionSelector"
import { DimensionState } from "../../../../../../shared/state/dimensions"
import { CustomReportInterface } from "../../../../../../shared/interfaces/report"

export function ReportSelector({
  onSelect,
  selected,
}: {
  onSelect: (selected: string[]) => void
  selected: string[]
}) {
  const [reports] = useSetting("reports", { global: true })
  return (
    <div className="w-100 p-8">
      <Menu>
        //TODO handling report filtering with IPs
        {reports?.filter((report: CustomReportInterface)=> report.allowedImplementingPartners && report.allowedImplementingPartners.length > 0).map((report: { id: string; name: string }) => (
          <MenuItem
            onClick={() => onSelect([report.id])}
            active={selected.includes(report.id)}
            icon={<IconTable24 />}
            key={`${report.id}-menu-item`}
            label={report.name}
            value={report.id}
          />
        ))}
      </Menu>
    </div>
  )
}

export function ReportSelectorModal({
  onClose,
  hide,
  onUpdate,
  selected,
}: {
  onClose: () => void
  hide: boolean
  onUpdate: (selected: string[]) => void
  selected: string[] | null | undefined
}) {
  const [selectedReports, setSelectedReports] = useState(selected ?? [])

  const onUpdateClick = () => {
    onUpdate(selectedReports)
  }

  return (
    <Modal
      position="middle"
      onClose={onClose}
      hide={hide}
    >
      <ModalTitle>{i18n.t("Select report")}</ModalTitle>
      <ModalContent>
        <ReportSelector
          onSelect={setSelectedReports}
          selected={selectedReports}
        />
      </ModalContent>
      <ModalActions>
        <ButtonStrip>
          <Button onClick={onClose}>{i18n.t("Cancel")}</Button>
          <Button
            primary
            onClick={onUpdateClick}
          >
            {i18n.t("Update")}
          </Button>
        </ButtonStrip>
      </ModalActions>
    </Modal>
  )
}

export function ReportDimensionSelector() {
  const [programs] = useSetting("reports", { global: true })
  const { value: hide, setTrue, setFalse } = useBoolean(true)
  const [reportSelection, setReportSelection] = useRecoilState(
    DimensionState("report")
  )

  return (
    <>
      <DimensionSelector
        selectedItems={
          compact(
            reportSelection?.map(
              (programId: string) => find(programs, ["id", programId])?.name
            )
          ) ?? []
        }
        onClick={setFalse}
        id="dx"
        label={i18n.t("Select report")}
      />
      <ReportSelectorModal
        selected={reportSelection}
        onClose={setTrue}
        hide={hide}
        onUpdate={(items: any) => {
          if (!isEmpty(items)) {
            setTrue()
            setReportSelection(items)
          }
        }}
      />
    </>
  )
}
