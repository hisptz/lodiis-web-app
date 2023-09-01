import React from "react"
import classes from "../../Details.module.css"
import { Button, Divider } from "@dhis2/ui"
import i18n from "@dhis2/d2-i18n"

export function AreaContainer({
  heading,
  children,
  onEdit,
}: {
  heading: string
  children: React.ReactNode
  onEdit?: () => void
}) {
  return (
    <div className={classes["area-container"]}>
      <div className="row space-between align-center">
        <h3 className={classes["area-header"]}>{heading}</h3>
        {onEdit && (
          <Button
            small
            onClick={onEdit}
          >
            {i18n.t("Edit")}
          </Button>
        )}
      </div>
      <Divider dense />
      {children}
    </div>
  )
}
