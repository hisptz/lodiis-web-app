import {
	Button,
	ButtonStrip,
	IconCross24,
	IconSearch24,
	Modal,
	ModalActions,
	ModalContent,
	ModalTitle,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RHFDHIS2FormField, VALUE_TYPE } from "@hisptz/dhis2-ui";
import { useBoolean } from "usehooks-ts";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { SearchValuesState } from "./state/search";
import { KBProgramState } from "../../../../../../shared/state/program";
import { compact, isEmpty } from "lodash";

export type SearchCriteriaValues = Record<string, string>;

export function SearchArea() {
	const {
		value: searchHidden,
		setTrue: closeSearch,
		setFalse: openSearch,
	} = useBoolean(true);
	const kbProgram = useRecoilValue(KBProgramState);

	const [searchValue, setSearchValue] = useRecoilState(
		SearchValuesState(kbProgram?.searchFieldKeys),
	);

	const searchActive =
		searchValue && !isEmpty(compact(Object.values(searchValue)));

	const resetSearchState = useResetRecoilState(
		SearchValuesState(kbProgram?.searchFieldKeys),
	);
	return (
		<>
			<ButtonStrip>
				<Button onClick={openSearch} icon={<IconSearch24 />}>
					{i18n.t("Search")}
				</Button>
				{searchActive && (
					<Button onClick={resetSearchState} icon={<IconCross24 />}>
						{i18n.t("Clear search")}
					</Button>
				)}
			</ButtonStrip>
			{!searchHidden && (
				<SearchModal
					value={searchValue}
					hide={searchHidden}
					onClose={closeSearch}
					onUpdate={setSearchValue}
				/>
			)}
		</>
	);
}

function Search() {
	const kbProgram = useRecoilValue(KBProgramState);
	const searchFields = kbProgram?.searchFields;

	return (
		<div className="column gap-16">
			{searchFields?.map((field) => {
				return (
					<RHFDHIS2FormField
						key={`${field.id}-search-field`}
						valueType={field.valueType as VALUE_TYPE}
						name={field.id}
						label={field.displayName}
					/>
				);
			})}
		</div>
	);
}

export function SearchModal({
	onClose,
	onUpdate,
	value,
	hide,
}: {
	onClose: () => void;
	onUpdate: (value: SearchCriteriaValues) => void;
	value?: SearchCriteriaValues;
	hide: boolean;
}) {
	const form = useForm<SearchCriteriaValues>({
		defaultValues: value,
	});

	const onFormSubmit = (value: SearchCriteriaValues) => {
		onClose();
		onUpdate(value);
	};

	return (
		<Modal position="middle" onClose={onClose} hide={hide}>
			<ModalTitle>{i18n.t("Search Criteria")}</ModalTitle>
			<ModalContent>
				<FormProvider {...form}>
					<Search />
				</FormProvider>
			</ModalContent>
			<ModalActions>
				<ButtonStrip>
					<Button onClick={onClose}>{i18n.t("Hide")}</Button>
					<Button onClick={form.handleSubmit(onFormSubmit)} primary>
						{i18n.t("Update")}
					</Button>
				</ButtonStrip>
			</ModalActions>
		</Modal>
	);
}
