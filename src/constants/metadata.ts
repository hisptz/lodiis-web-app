import i18n from "@dhis2/d2-i18n"
import { ProgramConfig } from "../shared/interfaces/metadata"
import { CHART_COLORS } from "./config"

export enum ATTRIBUTES {
  FIRST_NAME = "WTZ7GLTrE8Q",
  SURNAME = "rSP9c21JsfC",
  DATE_OF_BIRTH = "qZP982qpSPS",
  PRIMARY_UIC = "fTSAY18LgCF",
  SECONDARY_UIC = "eIU7KMx4Tu3",
  IMPLEMENTING_PARTNER = "wpiLo7DTwKF",
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
        id: ["enrollments", 0, "orgUnitName"],
      },
      sortable: true,
    },
    {
      label: i18n.t("Registration Date"),
      key: "date",

      get: {
        from: "attribute",
        id: ["enrollments", 0, "enrollmentDate"],
        formatAs: "date",
      },
      sortable: true,
    },
    {
      label: i18n.t("First Name"),
      key: "firstName",
      get: {
        from: "trackedEntityAttribute",
        id: ATTRIBUTES.FIRST_NAME,
      },
      sortable: true,
      mandatory: true,
    },
    {
      label: i18n.t("Surname"),
      key: "surname",
      get: {
        from: "trackedEntityAttribute",
        id: ATTRIBUTES.SURNAME,
      },
      sortable: true,
      mandatory: true,
    },
    {
      label: i18n.t("Date of Birth"),
      key: "dateOfBirth",
      get: {
        from: "trackedEntityAttribute",
        id: ATTRIBUTES.DATE_OF_BIRTH,
      },
      sortable: true,
    },
  ],
  search: {
    fields: [
      {
        id: ATTRIBUTES.FIRST_NAME,
        type: "trackedEntityAttribute",
      },
      {
        id: ATTRIBUTES.SURNAME,
        type: "trackedEntityAttribute",
      },
    ],
  },
  profile: [
    {
      key: ATTRIBUTES.FIRST_NAME,
      label: i18n.t("First name"),
      get: {
        from: "trackedEntityAttribute",
        id: ATTRIBUTES.FIRST_NAME,
      },
      editable: true,
    },
    {
      label: i18n.t("Surname"),
      key: ATTRIBUTES.SURNAME,
      get: {
        from: "trackedEntityAttribute",
        id: ATTRIBUTES.SURNAME,
      },
      editable: true,
    },
    {
      label: i18n.t("Date of Birth"),
      key: ATTRIBUTES.DATE_OF_BIRTH,
      get: {
        from: "trackedEntityAttribute",
        id: ATTRIBUTES.DATE_OF_BIRTH,
      },
      editable: false,
    },
    {
      label: i18n.t("Age"),
      key: "age",
      get: {
        from: "computed",
        id: ATTRIBUTES.DATE_OF_BIRTH,
        as: "age",
      },
      editable: false,
    },
  ],
  programStages: [],
}
export const TEI_FIELDS = [
  "trackedEntityInstance",
  "orgUnit",
  "attributes[attribute,value]",
  "trackedEntityType",
  "enrollments[enrollment,orgUnitName,enrollmentDate]",
]
export const programs: ProgramConfig[] = [
  {
    ...DEFAULT_PROGRAM_CONFIG,
    id: "hOEIHJDrrvz",
    name: "AGYW/DREAMS",
    dashboard: {
      id: "hOEIHJDrrvz",
      visualizations: [
        {
          type: "single-value",
          dimension: {
            dx: [
              "Gm50lvf5Oxi",
              "VF63tnFeULs",
              "DbRzS15NqhM",
              "WeiI4j6sr2y",
              "j7xsRV4hBUU",
            ],
          },
          filter: {
            pe: ["2020", "2021", "2022"],
            ou: ["USER_ORGUNIT"],
          },
          id: "total-enrollments",
          span: 2,
          options: {
            title: "Beneficiary enrollments",
            singleValueItems: [
              {
                id: "Gm50lvf5Oxi",
                label: "Total Enrolled Beneficiaries",
                total: true,
              },
              {
                id: "VF63tnFeULs",
                label: "KB Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "DbRzS15NqhM",
                label: "PSI Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "WeiI4j6sr2y",
                label: "EGPAF Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "j7xsRV4hBUU",
                label: "JHPIEGO Enrolled Beneficiaries",
                percentage: true,
              },
            ],
          },
        },
        {
          id: "beneficiary-by-age-by-districts",
          dimension: {
            ou: ["LEVEL-2"],
            dx: ["WBDE3ECUY0T", "A6OeVyHyBYW", "JGdxWlIRa28"],
          },
          filter: {
            pe: ["2020", "2021", "2022"],
          },
          span: 2,
          type: "chart",
          options: {
            title: "Enrolled Beneficiaries by Gender by District",
            config: {
              layout: {
                series: ["dx"],
                category: ["ou"],
                filter: ["pe"],
              },
              type: "column",
              colors: CHART_COLORS,
            },
          },
        },
        {
          id: "beneficiary-in-community-last-12-months",
          span: 2,
          type: "map",
          options: {
            title:
              "Enrolled AGYW/DREAMS Beneficiaries in each community councils for the last 3 years",
            orgUnitSelection: {
              levels: ["2"],
            },
            thematicLayers: [
              {
                type: "choropleth",
                id: "enrollment",
                enabled: true,
                dataItem: {
                  id: "Gm50lvf5Oxi",
                  displayName: "Enrolled AGYW/DREAMS Beneficiaries",
                  type: "indicator",
                },
                control: {
                  enabled: true,
                  position: "topright",
                },
              },
            ],
            periodSelection: {
              periods: ["LAST_12_MONTHS"],
            },
            legends: {
              enabled: true,
              position: "bottomright",
              collapsible: false,
            },
          },
        },
        {
          id: "beneficiary-by-layering-by-districts",
          dimension: {
            ou: ["LEVEL-2"],
            dx: ["WBDE3ECUY0T", "A6OeVyHyBYW", "JGdxWlIRa28"],
          },
          filter: {
            pe: ["LAST_12_MONTHS"],
          },
          span: 1,
          type: "chart",
          options: {
            title: "Enrolled Beneficiaries by Gender by District",
            config: {
              layout: {
                series: ["dx"],
                category: ["ou"],
                filter: ["pe"],
              },
              type: "stacked-column",
              colors: CHART_COLORS,
            },
          },
        },
        {
          id: "table-by-layering-by-districts",
          dimension: {
            ou: ["LEVEL-2"],
            dx: [
              "wEelmVeGByt",
              "UrfERV5OKXQ",
              "asvwIHSEl5F",
              "b69S1KvmO0a",
              "yoSGcrclQYD",
              "quBQhOPqBUf",
              "PzBpn8adDud",
              "mwYdO1cIaTh",
              "PV9mj7G3Rly",
              "g9Ufw2VYZUC",
              "G9nHEZTB6zO",
              "TNf9GBn7TVJ",
            ],
            pe: ["2020", "2021", "2022"],
          },
          span: 1,
          type: "table",
          options: {
            title: "AGYW/DREAMS Service Provision by District",
            config: {
              layout: {
                columns: [{ dimension: "ou" }, { dimension: "pe" }],
                rows: [{ dimension: "dx", label: "Services" }],
                filter: [],
              },
            },
          },
        },
      ],
    },
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
        mandatory: true,
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
        editable: false,
      },
      {
        label: i18n.t("Secondary UIC"),
        key: ATTRIBUTES.SECONDARY_UIC,
        get: {
          from: "trackedEntityAttribute",
          id: ATTRIBUTES.SECONDARY_UIC,
        },
        editable: false,
      },
    ],
    search: {
      ...DEFAULT_PROGRAM_CONFIG.search,
      fields: [
        ...DEFAULT_PROGRAM_CONFIG.search.fields,
        {
          id: ATTRIBUTES.PRIMARY_UIC,
          type: "trackedEntityAttribute",
        },
      ],
    },
    programStages: [
      ...DEFAULT_PROGRAM_CONFIG.programStages,
      {
        id: "RJTRRO0wg8H",
        columns: [
          {
            key: "orgUnit",
            label: "Registering unit",
            get: {
              from: "attribute",
              id: "orgUnitName",
            },
          },
        ],
        view: [
          {
            key: "lt88RMPaBPg",
            get: {
              from: "dataElement",
              id: "lt88RMPaBPg",
            },
            editable: true,
          },
          {
            key: "lcyyWZnfQNJ",
            get: {
              from: "dataElement",
              id: "lcyyWZnfQNJ",
            },
            editable: true,
          },
          {
            key: "XqG5ql9rK3T",
            get: {
              from: "dataElement",
              id: "XqG5ql9rK3T",
            },
            editable: true,
          },
        ],
      },
    ],
    dashboard: {
      id: "em38qztTI8s",
      visualizations: [
        {
          type: "single-value",
          dimension: {
            dx: [
              "iGqe7b1PpBo",
              "bAy9bNvtJGF",
              "B0aWooj09XR",
              "gbd5A0977cj",
              "eTVEURqZgQ2",
            ],
          },
          filter: {
            pe: ["2020", "2021", "2022"],
            ou: ["USER_ORGUNIT"],
          },
          id: "total-enrollments",
          span: 2,
          options: {
            title: "Beneficiary enrollments",
            singleValueItems: [
              {
                id: "iGqe7b1PpBo",
                label: "Total Enrolled Beneficiaries",
                total: true,
              },
              {
                id: "bAy9bNvtJGF",
                label: "KB Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "B0aWooj09XR",
                label: "PSI Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "bAy9bNvtJGF",
                label: "KB Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "B0aWooj09XR",
                label: "PSI Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "bAy9bNvtJGF",
                label: "KB Enrolled Beneficiaries",
                percentage: true,
              },
              {
                id: "B0aWooj09XR",
                label: "PSI Enrolled Beneficiaries",
                percentage: true,
              },
            ],
          },
        },
        {
          id: "beneficiary-by-gender-by-districts",
          dimension: {
            ou: ["LEVEL-2"],
            dx: ["hpmyVQU4mtH", "wgNsiLa7jJ9"],
          },
          filter: {
            pe: ["2020", "2021", "2022"],
          },
          span: 2,
          type: "chart",
          options: {
            title: "Enrolled Beneficiaries by Gender by District",
            config: {
              layout: {
                series: ["dx"],
                category: ["ou"],
                filter: ["pe"],
              },
              type: "column",
              colors: CHART_COLORS,
            },
          },
        },
        {
          id: "beneficiary-in-community-last-3-years",
          dimension: {
            ou: ["LEVEL-3"],
            dx: ["hpmyVQU4mtH", "wgNsiLa7jJ9"],
          },
          span: 2,
          type: "map",
          options: {
            title:
              "Enrolled OVC Beneficiaries in each community councils for the last 3 years",
            orgUnitSelection: {
              levels: ["3"],
            },
            thematicLayers: [
              {
                type: "choropleth",
                enabled: true,
                dataItem: {
                  id: "iGqe7b1PpBo",
                  displayName: "OVC Beneficiaries",
                  type: "indicator",
                },
                control: {
                  enabled: true,
                  position: "topright",
                },
              },
            ],
            periodSelection: {
              periods: ["2020", "2021", "2022"],
            },
            legends: {
              enabled: true,
              position: "bottomright",
              collapsible: false,
            },
          },
        },
      ],
    },
  },
  {
    ...DEFAULT_PROGRAM_CONFIG,
    id: "BNsDaCclOiu",
    name: "Household/Caregiver",
  },
  {
    ...DEFAULT_PROGRAM_CONFIG,
    id: "CK4iMK8b0aZ",
    name: "NON-AGYW/DREAMS",
  },
  {
    ...DEFAULT_PROGRAM_CONFIG,
    id: "dwtPhZrg2k7",
    name: "0-19 OGAC Module",
  },
  {
    ...DEFAULT_PROGRAM_CONFIG,
    id: "tkL2hvIRwMy",
    name: "Education(LBSE) Module",
  },
  {
    ...DEFAULT_PROGRAM_CONFIG,
    id: "iR6hbkQABMk",
    name: "PP_PREV",
  },
]
