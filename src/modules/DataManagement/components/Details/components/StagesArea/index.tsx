import React from "react";
import i18n from "@dhis2/d2-i18n";
import { AreaContainer } from "../AreaContainer";
import { useProfileData } from "../../hooks/data";
import { Stage } from "./components/Stage";
import { isEmpty } from "lodash";
import EmptyList from "../../../../../../shared/components/EmptyList";

export function StagesArea() {
	const { profile } = useProfileData();

	const stages = profile?.getProgramStages();

	return (
		<AreaContainer heading={i18n.t("Services")}>
			{isEmpty(stages) && (
				<div
					className="column center align-center"
					style={{ minHeight: "400px" }}
				>
					<EmptyList
						message={i18n.t(
							"There are no services provided for this beneficiary",
						)}
					/>
				</div>
			)}
			{!isEmpty(stages) && (
				<div style={{ padding: "16px 8px" }} className="column gap-16">
					{stages?.map((programStage, index) => (
						<Stage
							initiallyOpen={index === 0}
							key={`${programStage.id}-area`}
							stage={programStage}
						/>
					))}
				</div>
			)}
		</AreaContainer>
	);
}
