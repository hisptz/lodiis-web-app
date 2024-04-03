import { Box, Card, Chip } from "@dhis2/ui";
import React from "react";
import { useSetting } from "@dhis2/app-service-datastore";
import { ProgramConfig } from "../../../../shared/interfaces/metadata";
import { useNavigate, useParams } from "react-router-dom";

export function DashboardList() {
	const { programId } = useParams();
	const [programs] = useSetting("programs", { global: true });

	const navigate = useNavigate();

	const onChipClick = (id: string) => () => {
		navigate(`/dashboard/${id}?program=${id}`);
	};

	return (
		<Box height="48px">
			<Card>
				<div
					style={{ margin: "auto" }}
					className="row align-center gap-8 h-100"
				>
					{programs?.map((program: ProgramConfig) => (
						<Chip
							onClick={onChipClick(program.id)}
							selected={programId === program.id}
							key={`${program.id}-dashboard-chip`}
						>
							{program.name}
						</Chip>
					))}
				</div>
			</Card>
		</Box>
	);
}
