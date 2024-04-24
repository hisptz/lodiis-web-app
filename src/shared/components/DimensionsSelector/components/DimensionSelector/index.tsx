import React from "react";
import { Box, Chip, Tooltip } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { chunk, head } from "lodash";
import classes from "./DimensionSelector.module.css";

export interface DimensionSelectorProps {
	selectedItems: string[];
	onClick: () => void;
	id: string;
	label: string;
}

const ITEM_DISPLAY_NO = 2;

export function DimensionSelector({
	onClick,
	selectedItems = [],
	label,
	id,
	...props
}: DimensionSelectorProps) {
	const itemsToDisplay = head(chunk(selectedItems, ITEM_DISPLAY_NO));

	return (
		<div id={id} onClick={onClick}>
			<Tooltip
				content={
					<div>
						{(selectedItems?.length ? selectedItems : [label]).map(
							(label, index) => (
								<p
									style={{ margin: 4 }}
									key={`${id}-${index}-tooltip`}
								>
									{label}
								</p>
							),
						)}
					</div>
				}
			>
				<Box className={classes["selection-box"]} {...props}>
					<p className={classes["selection-box-header"]}>{label}</p>

					<Box
						className={classes["selection-text-box"]}
						width="90%"
						height="40%"
					>
						{itemsToDisplay?.map((item, index) => (
							<Chip key={`${id}-${index}`}>{item}</Chip>
						))}
						{selectedItems?.length > ITEM_DISPLAY_NO && (
							<Chip>
								{i18n.t(`and {{number}} more`, {
									number:
										selectedItems.length - ITEM_DISPLAY_NO,
								})}
							</Chip>
						)}
					</Box>
				</Box>
			</Tooltip>
		</div>
	);
}
