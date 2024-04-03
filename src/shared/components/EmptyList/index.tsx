import i18n from "@dhis2/d2-i18n";
import React from "react";

export default function EmptyList({ message }: { message?: string }) {
	return (
		<div className="column w-100 h-100 center align-center">
			<h2 style={{ color: "rgb(110, 122, 138)" }}>
				{message ?? i18n.t("There are no items")}
			</h2>
		</div>
	);
}
