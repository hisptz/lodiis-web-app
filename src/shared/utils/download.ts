import { saveAs } from "file-saver";
import { chunk } from "lodash";

const RECORDS_CHUNK_SIZE = 10000;
const MAX_RECORDS_DOWNLOAD_SIZE = 20000;

export async function downloadFile(
  type: "xlsx" | "json" | "csv",
  data: any[],
  options?: { filename?: string }
) {
  if (data.length > MAX_RECORDS_DOWNLOAD_SIZE || type !== "json") {
    const chunks = chunk(data, RECORDS_CHUNK_SIZE);
    for (let i = 0; i < chunks.length; i++) {
      await exportToFile(
        type,
        chunks[i],
        options && { filename: `${options.filename}-${i + 1}` }
      );
    }
  } else {
    await exportToFile(type, data, options);
  }
}

async function exportToFile(
  type: "xlsx" | "json" | "csv",
  data: any[],
  options?: { filename?: string }
): Promise<void> {
  if (type === "json") {
    saveAs(
      new File([JSON.stringify(data)] as any, "data.json", {
        type: "json",
      }),
      `${options?.filename ?? "data"}.json`
    );
  } else if (type === "xlsx") {
    const excel = await import("xlsx");
    const workbook = excel.utils.book_new();
    const worksheet = excel.utils.json_to_sheet(data);
    excel.utils.book_append_sheet(workbook, worksheet, "data");
    excel.writeFile(workbook, `${options?.filename ?? "data"}.xlsx`);
  } else if (type === "csv") {
    const excel = await import("xlsx");
    const worksheet = excel.utils.json_to_sheet(data);
    const csvData = excel.utils.sheet_to_csv(worksheet);
    saveAs(
      new File([csvData], "data.csv", {
        type: "csv",
      }),
      `${options?.filename ?? data}.csv`
    );
  }
}
