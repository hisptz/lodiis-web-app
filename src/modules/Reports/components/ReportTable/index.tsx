import React from "react";
import { useReportPaginatedData } from "./hooks/data";
import { CustomDataTable } from "@hisptz/dhis2-ui";
import { useElementSize } from "usehooks-ts";
import FullPageLoader, {
	FullPageProgressLoader,
} from "../../../../shared/components/Loaders";
import { NoticeBox } from "@dhis2/ui";

export function ReportTable() {
	const { loading, columns, rows, pagination, chunking, error, percentage } =
		useReportPaginatedData();
	const [containerRef, { width, height }] = useElementSize();

	if (loading && percentage === undefined) {
		if (error) {
			return (
				<div
					ref={containerRef}
					style={{ maxHeight: "calc(100vh - 324px)" }}
					className="p-16 w-100 h-100"
				>
					<NoticeBox error title="Error">
						{error}
					</NoticeBox>
				</div>
			);
		}
		return <FullPageLoader />;
	}

	if (error) {
		return (
			<div
				ref={containerRef}
				style={{ maxHeight: "calc(100vh - 324px)" }}
				className="p-16 w-100 h-100"
			>
				<NoticeBox error title="Error">
					{error}
				</NoticeBox>
			</div>
		);
	}

	if (percentage !== undefined) {
		return <FullPageProgressLoader percentage={percentage} />;
	}

	return (
		<div
			ref={containerRef}
			style={{ maxHeight: "calc(100vh - 324px)" }}
			className="p-16 w-100 h-100"
		>
			<CustomDataTable
				pagination={pagination}
				tableProps={{
					scrollHeight: `${height - 80}px`,
					scrollWidth: `${width}px`,
				}}
				loading={chunking || loading}
				columns={columns ?? []}
				rows={rows}
			/>
		</div>
	);
}
