import React from "react";
import { CenteredContent, CircularLoader, LinearLoader } from "@dhis2/ui";

export default function FullPageLoader({
	minHeight,
	message,
}: {
	minHeight?: number | string;
	message?: string;
}): React.ReactElement {
	return (
		<div
			style={{ minHeight }}
			className="column w-100 h-100 align-center center "
		>
			<CircularLoader small />
			{message && <p>{message}</p>}
		</div>
	);
}

export function FullPageProgressLoader({
	minHeight,
	message,
	percentage,
}: {
	minHeight?: number | string;
	message?: string;
	percentage: number;
}): React.ReactElement {
	return (
		<div
			style={{ minHeight }}
			className="column w-100 h-100 align-center center "
		>
			<div className="row gap-16 align-center">
				<LinearLoader amount={percentage} />
				<h6 style={{ margin: 0 }}>{`${percentage}%`}</h6>
			</div>
			{message && <p>{message}</p>}
		</div>
	);
}

export function CardLoader() {
	return (
		<CenteredContent>
			<CircularLoader small />
		</CenteredContent>
	);
}
