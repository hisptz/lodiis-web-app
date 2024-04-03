import { atomFamily } from "recoil";
import { syncEffect } from "recoil-sync";
import { nullable, string, writableArray } from "@recoiljs/refine";

export const DimensionState = atomFamily<
	Array<string> | undefined | null,
	string
>({
	key: "program-state",
	default: undefined,
	effects: (item) => [
		syncEffect({
			storeKey: "filter",
			itemKey: item,
			refine: nullable(writableArray(string())),
		}),
	],
});
