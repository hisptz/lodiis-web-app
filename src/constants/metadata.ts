import i18n from '@dhis2/d2-i18n';
import {TrackedEntityInstance} from "@hisptz/dhis2-utils";
import {get} from "lodash";
import {DateTime} from "luxon";
import {getAttributeValue} from "../shared/utils/metadata";
import React from "react"
import {ProgramConfig} from "../shared/interfaces/metadata";


export const TEI_FIELDS = [
    'trackedEntityInstance',
    'orgUnit',
    'attributes[attribute,value]',
    'trackedEntityType',
    'enrollments[enrollment,orgUnitName,enrollmentDate]'
]
export const programs = [
    {
        id: "dwtPhZrg2k7",
        name: "0-19 OGAC Module"
    },
    {
        id: "hOEIHJDrrvz",
        name: "AGYW/DREAMS"
    },
    {
        id: "tkL2hvIRwMy",
        name: "Education(LBSE) Module"
    },
    {
        id: "CK4iMK8b0aZ",
        name: "NON-AGYW/DREAMS"
    },
    {
        id: "em38qztTI8s",
        name: "OVC"
    },
    {
        id: "iR6hbkQABMk",
        name: "PP_PREV"
    }
]

export enum ATTRIBUTES {
    FIRST_NAME = "WTZ7GLTrE8Q",
    SURNAME = "rSP9c21JsfC",
    DATE_OF_BIRTH = "qZP982qpSPS",
    PRIMARY_UIC = "fTSAY18LgCF",
    SECONDARY_UIC = "eIU7KMx4Tu3",

}

export interface ColumnConfig {
    label: string;
    key: string;
    get: (tei: TrackedEntityInstance) => string | number | React.ReactNode
    mandatory?: boolean;
    hidden?: boolean;
    sortable?: boolean;
}

export interface ProfileConfig {
    label: string;
    key: string;
    get: (tei: TrackedEntityInstance) => string | number | React.ReactNode
}


export const DEFAULT_PROGRAM_CONFIG: ProgramConfig = {
    id: "",
    columns: [
        {
            label: i18n.t("Registration Unit"),
            key: "orgUnit",
            get: (tei: TrackedEntityInstance) => {
                return get(tei, ['enrollments', 0, 'orgUnitName'])
            },
            sortable: true
        },
        {
            label: i18n.t("Registration Date"),
            key: "date",
            get: (tei: TrackedEntityInstance) => {
                return DateTime.fromISO(get(tei, ['enrollments', 0, 'enrollmentDate'])).toFormat('yyyy-MM-dd')
            },
            sortable: true
        },
        {
            label: i18n.t("First Name"),
            key: "firstName",
            get: (tei: TrackedEntityInstance) => {
                return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.FIRST_NAME)
            },
            sortable: true
        },
        {
            label: i18n.t("Surname"),
            key: "surname",
            get: (tei: TrackedEntityInstance) => {
                return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.SURNAME)
            },
            sortable: true
        },
        {
            label: i18n.t("Date of Birth"),
            key: "dateOfBirth",
            get: (tei: TrackedEntityInstance) => {
                return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.DATE_OF_BIRTH)
            },
            sortable: true
        },
    ],
    profile: [
        {
            key: "firstName",
            label: i18n.t("First name"),
            get: (tei: TrackedEntityInstance) => {
                return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.FIRST_NAME)
            },
        },
        {
            label: i18n.t("Surname"),
            key: "surname",
            get: (tei: TrackedEntityInstance) => {
                return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.SURNAME)
            },

        },
        {
            label: i18n.t("Date of Birth"),
            key: "dateOfBirth",
            get: (tei: TrackedEntityInstance) => {
                return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.DATE_OF_BIRTH)
            },
        },
        {
            label: i18n.t("Age"),
            key: "age",
            get: (tei: TrackedEntityInstance) => {
                const dateString = getAttributeValue(tei.attributes ?? [], ATTRIBUTES.DATE_OF_BIRTH);
                if (!dateString) {
                    return ""
                }
                const dateOfBirth = DateTime.fromJSDate(new Date(dateString));
                return Math.abs(dateOfBirth.diffNow("years").years).toFixed(0)
            },
        },
    ]
}


export const PROGRAM_CONFIG: ProgramConfig[] = [
    {
        ...DEFAULT_PROGRAM_CONFIG,
        id: "em38qztTI8s",

        columns: [
            ...DEFAULT_PROGRAM_CONFIG.columns,
            {
                label: i18n.t("Primary UIC"),
                key: "primaryUIC",
                get: (tei: TrackedEntityInstance) => {
                    return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.PRIMARY_UIC)
                },
                mandatory: true
            },
            {
                label: i18n.t("Secondary UIC"),
                key: "secondaryUIC",
                get: (tei: TrackedEntityInstance) => {
                    return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.SECONDARY_UIC)
                }
            },
        ],
        profile: [
            ...DEFAULT_PROGRAM_CONFIG.profile,
            {
                label: i18n.t("Primary UIC"),
                key: "primaryUIC",
                get: (tei: TrackedEntityInstance) => {
                    return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.PRIMARY_UIC)
                },
            },
            {
                label: i18n.t("Secondary UIC"),
                key: "secondaryUIC",
                get: (tei: TrackedEntityInstance) => {
                    return getAttributeValue(tei.attributes ?? [], ATTRIBUTES.SECONDARY_UIC)
                }
            },
        ]
    }
]
