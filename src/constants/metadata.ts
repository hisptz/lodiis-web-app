import i18n from '@dhis2/d2-i18n';
import {ProgramConfig} from "../shared/interfaces/metadata";

export enum ATTRIBUTES {
    FIRST_NAME = "WTZ7GLTrE8Q",
    SURNAME = "rSP9c21JsfC",
    DATE_OF_BIRTH = "qZP982qpSPS",
    PRIMARY_UIC = "fTSAY18LgCF",
    SECONDARY_UIC = "eIU7KMx4Tu3",

}

export const DEFAULT_PROGRAM_CONFIG: ProgramConfig = {
    id: "",
    name: "",
    columns: [
        {
            label: i18n.t("Registration Unit"),
            key: "orgUnit",
            get: {
                from: "attribute",
                id: ["enrollments", 0, "orgUnitName"]
            },
            sortable: true
        },
        {
            label: i18n.t("Registration Date"),
            key: "date",

            get: {
                from: "attribute",
                id: ["enrollments", 0, "enrollmentDate"],
                formatAs: "date"
            },
            sortable: true
        },
        {
            label: i18n.t("First Name"),
            key: "firstName",
            get: {
                from: "trackedEntityAttribute",
                id: ATTRIBUTES.FIRST_NAME,
            },
            sortable: true,
            mandatory: true
        },
        {
            label: i18n.t("Surname"),
            key: "surname",
            get: {
                from: "trackedEntityAttribute",
                id: ATTRIBUTES.SURNAME,
            },
            sortable: true,
            mandatory: true
        },
        {
            label: i18n.t("Date of Birth"),
            key: "dateOfBirth",
            get: {
                from: "trackedEntityAttribute",
                id: ATTRIBUTES.DATE_OF_BIRTH,
            },
            sortable: true
        },
    ],
    search: {
        fields: [
            {
                id: ATTRIBUTES.FIRST_NAME,
                type: "trackedEntityAttribute"
            },
            {
                id: ATTRIBUTES.SURNAME,
                type: "trackedEntityAttribute"
            }
        ]
    },
    profile: [
        {
            key: ATTRIBUTES.FIRST_NAME,
            label: i18n.t("First name"),
            get: {
                from: "trackedEntityAttribute",
                id: ATTRIBUTES.FIRST_NAME,
            },
            editable: true
        },
        {
            label: i18n.t("Surname"),
            key: ATTRIBUTES.SURNAME,
            get: {
                from: "trackedEntityAttribute",
                id: ATTRIBUTES.SURNAME,
            },
            editable: true

        },
        {
            label: i18n.t("Date of Birth"),
            key: ATTRIBUTES.DATE_OF_BIRTH,
            get: {
                from: "trackedEntityAttribute",
                id: ATTRIBUTES.DATE_OF_BIRTH,
            },
            editable: false
        },
        {
            label: i18n.t("Age"),
            key: "age",
            get: {
                from: "computed",
                id: ATTRIBUTES.DATE_OF_BIRTH,
                as: "age"
            },
            editable: false,
        },
    ],
    programStages: []
}
export const TEI_FIELDS = [
    'trackedEntityInstance',
    'orgUnit',
    'attributes[attribute,value]',
    'trackedEntityType',
    'enrollments[enrollment,orgUnitName,enrollmentDate]'
]
export const programs: ProgramConfig[] = [
    {
        ...DEFAULT_PROGRAM_CONFIG,
        id: "dwtPhZrg2k7",
        name: "0-19 OGAC Module",
    },
    {
        ...DEFAULT_PROGRAM_CONFIG,
        id: "hOEIHJDrrvz",
        name: "AGYW/DREAMS"
    },
    {
        ...DEFAULT_PROGRAM_CONFIG,
        id: "tkL2hvIRwMy",
        name: "Education(LBSE) Module"
    },
    {
        ...DEFAULT_PROGRAM_CONFIG,
        id: "CK4iMK8b0aZ",
        name: "NON-AGYW/DREAMS"
    },
    {
        ...DEFAULT_PROGRAM_CONFIG,
        id: "em38qztTI8s",
        name: "OVC",
        columns: [
            ...DEFAULT_PROGRAM_CONFIG.columns,
            {
                label: i18n.t("Primary UIC"),
                key: "primaryUIC",
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.PRIMARY_UIC,
                },
                mandatory: true
            },
            {
                label: i18n.t("Secondary UIC"),
                key: "secondaryUIC",
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.SECONDARY_UIC,
                },
            },
        ],
        profile: [
            ...DEFAULT_PROGRAM_CONFIG.profile,
            {
                label: i18n.t("Primary UIC"),
                key: ATTRIBUTES.PRIMARY_UIC,
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.PRIMARY_UIC,
                },
                editable: false
            },
            {
                label: i18n.t("Secondary UIC"),
                key: ATTRIBUTES.SECONDARY_UIC,
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.SECONDARY_UIC,
                },
                editable: false
            },
        ],
        search: {
            ...DEFAULT_PROGRAM_CONFIG.search,
            fields: [
                ...DEFAULT_PROGRAM_CONFIG.search.fields,
                {
                    id: ATTRIBUTES.PRIMARY_UIC,
                    type: "trackedEntityAttribute"
                }
            ]
        }
    },
    {
        ...DEFAULT_PROGRAM_CONFIG,
        id: "iR6hbkQABMk",
        name: "PP_PREV"
    }
]

export interface DataGetConfig {
    //Where is the data coming from for the specific resource
    from: "dataElement" | "trackedEntityAttribute" | "attribute" | "computed",
    //id of the resource from, a path for type attribute
    id: string | Array<string | number>;
    formatAs?: "date";
    as?: "age";
}

export interface ColumnConfig {
    label: string;
    key: string;
    get: DataGetConfig;
    mandatory?: boolean;
    hidden?: boolean;
    sortable?: boolean;
}

export interface ProfileConfig {
    label: string;
    key: string;
    get: DataGetConfig
    editable?: boolean
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
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.PRIMARY_UIC,
                },
                mandatory: true
            },
            {
                label: i18n.t("Secondary UIC"),
                key: "secondaryUIC",
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.SECONDARY_UIC,
                },
            },
        ],
        profile: [
            ...DEFAULT_PROGRAM_CONFIG.profile,
            {
                label: i18n.t("Primary UIC"),
                key: ATTRIBUTES.PRIMARY_UIC,
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.PRIMARY_UIC,
                },
                editable: false
            },
            {
                label: i18n.t("Secondary UIC"),
                key: ATTRIBUTES.SECONDARY_UIC,
                get: {
                    from: "trackedEntityAttribute",
                    id: ATTRIBUTES.SECONDARY_UIC,
                },
                editable: false
            },
        ],

    }
]
