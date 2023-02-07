import {CustomReportInterface} from "../shared/interfaces/report";


export const PAGE_SIZE = 1000;

export const customReportConfig: CustomReportInterface[] = [
    {
        "id": "Consolidate_DREAM_services",
        "name": "Consolidated DREAMS services",
        "program": [
            "hOEIHJDrrvz"
        ],
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "XYPRtYgQUF8",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "LmAeo9S1BFX",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Educational Subsidies ",
                "codes": [
                    "EducationSubsidiesSupport"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Condom Education/ Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "NXsIkG9Q1BA"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Condom Education/ Provision",
                "codes": [
                    "CondomEducationProvision"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "zbHpXUjGv5H",
                "name": "HTS",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "N8tlZl91pBY",
                "name": "HTS",
                "isDate": false,
                "isBoolean": true,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Social Assets Building",
                "codes": [
                    "Go Girls",
                    "AFLATEEN/TOUN"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Violence prevention education",
                "codes": [
                    "ViolencePreventionEducation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "qML4gVZ2UFc",
                "name": "Post Violence(Legal) ",
                "isDate": false,
                "isBoolean": true,
                "programStage": "VLW93YjZOyf"
            },
            {
                "id": "mnYT2rZyGgJ",
                "name": "Post-Violence Care (Clinical)",
                "isDate": false,
                "isBoolean": true,
                "programStage": "yK0ENCuwPqh"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Parenting/Caregiver Programs",
                "codes": [
                    "PARENTING"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Contraceptive method mix",
                "isDate": false,
                "isBoolean": true,
                "programStage": "A7Tl3vML6as"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Financial Literacy/ Education",
                "codes": [
                    "FinancialLiteracyEducation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Savings Groups",
                "codes": [
                    "SAVING GROUP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "mcgHO4djXTu",
                "name": "PEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CEyIqiOZOwx"
            },
            {
                "id": "VtmkYCQkBQw",
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Qw8c20q5V0w"
            },
            {
                "id": "prep_from_long_form",
                "ids": [
                    "h0P6UfkUvLP",
                    "bH9DpJOIutM",
                    "veoA322323t"
                ],
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "HIV/ Prevention Education",
                "codes": [
                    "HIV Prevention Education"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "ytVTXe4RVUJ",
                "name": "HIV/ Prevention Education",
                "isDate": false,
                "isBoolean": true,
                "programStage": "mCKbTbsQoMy"
            },
            {
                "id": "qFwm4RM45gi",
                "name": "HIV Risk Assessment",
                "isDate": false,
                "isBoolean": true,
                "programStage": "PGFt6IwdZLM"
            },
            {
                "id": "NhUVtfObJFw",
                "name": "Parenting (Preg & Breastfeeding)",
                "isDate": false,
                "isBoolean": true,
                "programStage": "N5SlNqQuMyC"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "STI Screening",
                "codes": [
                    "STI Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "STI Treatment",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "EMTCT",
                "codes": [
                    "EMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Cervical Cancer Screening",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "total_services",
                "name": "Number of services received",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "completed_primary_package",
                "name": "Completed Primary Package",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "",
                "programStages": [
                    {
                        "id": "PGFt6IwdZLM",
                        "dataElements": [
                            "qFwm4RM45gi"
                        ]
                    },
                    {
                        "id": "bDJq2JWVTbC",
                        "dataElements": [
                            "Eug4BXDFLym"
                        ]
                    },
                    {
                        "id": "NXsIkG9Q1BA",
                        "dataElements": [
                            "uciT2F6ByYO"
                        ]
                    }
                ]
            },
            {
                "id": "completed_primary_package_and_atleast_secondary",
                "name": "Completed Primary Package + at least one Secondary Service",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "",
                "programStages": [
                    {
                        "id": "PGFt6IwdZLM",
                        "dataElements": [
                            "qFwm4RM45gi"
                        ]
                    },
                    {
                        "id": "bDJq2JWVTbC",
                        "dataElements": [
                            "Eug4BXDFLym"
                        ]
                    },
                    {
                        "id": "NXsIkG9Q1BA",
                        "dataElements": [
                            "uciT2F6ByYO"
                        ]
                    },
                    {
                        "id": "vAMc8n0YB6m",
                        "dataElements": [
                            "zbHpXUjGv5H"
                        ]
                    },
                    {
                        "id": "bDJq2JWVTbC",
                        "dataElements": [
                            "Eug4BXDFLym"
                        ]
                    },
                    {
                        "id": "NXsIkG9Q1BA",
                        "dataElements": [
                            "uciT2F6ByYO"
                        ]
                    },
                    {
                        "id": "mMjGlK1W0Xo",
                        "dataElements": [
                            "veoA322323t",
                            "bH9DpJOIutM",
                            "h0P6UfkUvLP"
                        ]
                    },
                    {
                        "id": "Qw8c20q5V0w",
                        "dataElements": [
                            "VtmkYCQkBQw"
                        ]
                    },
                    {
                        "id": "yK0ENCuwPqh",
                        "dataElements": [
                            "mnYT2rZyGgJ"
                        ]
                    },
                    {
                        "id": "VLW93YjZOyf",
                        "dataElements": [
                            "qML4gVZ2UFc"
                        ]
                    },
                    {
                        "id": "N5SlNqQuMyC",
                        "dataElements": [
                            "NhUVtfObJFw"
                        ]
                    },
                    {
                        "id": "A7Tl3vML6as",
                        "dataElements": [
                            "uciT2F6ByYO"
                        ]
                    },
                    {
                        "id": "MkyTrLeBG8I",
                        "dataElements": [
                            "OrC9Bh2bcFz",
                            "rsh5Kvx6qAU",
                            "hXyqgOWZ17b"
                        ]
                    }
                ]
            },
            {
                "id": "completed_secondary_package",
                "name": "Completed Secondary Service Package",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "",
                "programStages": [
                    {
                        "id": "vAMc8n0YB6m",
                        "dataElements": [
                            "zbHpXUjGv5H"
                        ]
                    },
                    {
                        "id": "bDJq2JWVTbC",
                        "dataElements": [
                            "Eug4BXDFLym"
                        ]
                    },
                    {
                        "id": "NXsIkG9Q1BA",
                        "dataElements": [
                            "uciT2F6ByYO"
                        ]
                    },
                    {
                        "id": "mMjGlK1W0Xo",
                        "dataElements": [
                            "veoA322323t",
                            "bH9DpJOIutM",
                            "h0P6UfkUvLP"
                        ]
                    },
                    {
                        "id": "Qw8c20q5V0w",
                        "dataElements": [
                            "VtmkYCQkBQw"
                        ]
                    },
                    {
                        "id": "yK0ENCuwPqh",
                        "dataElements": [
                            "mnYT2rZyGgJ"
                        ]
                    },
                    {
                        "id": "VLW93YjZOyf",
                        "dataElements": [
                            "qML4gVZ2UFc"
                        ]
                    },
                    {
                        "id": "N5SlNqQuMyC",
                        "dataElements": [
                            "NhUVtfObJFw"
                        ]
                    },
                    {
                        "id": "A7Tl3vML6as",
                        "dataElements": [
                            "uciT2F6ByYO"
                        ]
                    },
                    {
                        "id": "MkyTrLeBG8I",
                        "dataElements": [
                            "OrC9Bh2bcFz",
                            "rsh5Kvx6qAU",
                            "hXyqgOWZ17b"
                        ]
                    }
                ]
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "vVMJBQvvm5D",
            "tmuVlsiEjUi",
            "KixA3B2O8Rp",
            "A5VS8GCyb8t",
            "pNg5CAXMtLP"
        ],
        "includeEnrollmentWithoutService": true
    },
    {
        "id": "Consolidate_DREAM_referrals",
        "name": "Consolidated DREAMS referrals",
        "program": [
            "hOEIHJDrrvz"
        ],
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "XYPRtYgQUF8",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "STI Treatment (Referral Made)",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "STI Treatment (Referral Made)",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "HTS (Referral Made)",
                "codes": [
                    "HTS"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "HTS (Referral Made)",
                "codes": [
                    "HTS"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "EMTCT (Referral Made)",
                "codes": [
                    "EMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "EMTCT (Referral Made)",
                "codes": [
                    "EMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Cervical Cancer Screening (Referral Made)",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Cervical Cancer Screening (Referral Made)",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Contraceptive method mix (Referral Made)",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Contraceptive method mix (Referral Made)",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ANC (Referral Made)",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ANC",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PrEP (Referral Made)",
                "codes": [
                    "PrEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PrEP (Referral Made)",
                "codes": [
                    "PrEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PEP (Referral Made)",
                "codes": [
                    "PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PEP (Referral Made)",
                "codes": [
                    "PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "TB/ART Treatment Support (Referral Made)",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "TB/ART Treatment Support (Referral Made)",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Linkage to ART (Referral Made)",
                "codes": [
                    "ARTInitiation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Linkage to ART (Referral Made)",
                "codes": [
                    "ARTInitiation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post GBV Care (Legal) (Referral Made)",
                "codes": [
                    "PostGBVCareLegal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post GBV Care (Legal) (Referral Made)",
                "codes": [
                    "PostGBVCareLegal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post Abuse Care Services (Referral Made)",
                "codes": [
                    "PostGBVServicesClinical"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post Abuse Care Services (Referral Made)",
                "codes": [
                    "PostGBVServicesClinical"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Violence prevention education (Referral Made)",
                "codes": [
                    "ViolencePreventionEducation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Violence prevention education (Referral Made)",
                "codes": [
                    "ViolencePreventionEducation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Education subsidies (Referral Made)",
                "codes": [
                    "EducationSubsidiesSupport"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Education subsidies (Referral Made)",
                "codes": [
                    "EducationSubsidiesSupport"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "lcyyWZnfQNJ",
                "name": "Implementing Mechanism Name  (Referral Made)",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "GsWaSx1t3Qs",
                "name": "Service Provider  (Referral Made)",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "STI Treatment (Referral Completion)",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "HTS (Referral Completion)",
                "codes": [
                    "HTS"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "EMTCT (Referral Completion)",
                "codes": [
                    "EMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Cervical Cancer Screening (Referral Completion)",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Contraceptive method mix (Referral Completion)",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "ANC (Referral Completion)",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "PrEP (Referral Completion)",
                "codes": [
                    "PrEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "PEP (Referral Completion)",
                "codes": [
                    "PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "TB/ART Treatment Support (Referral Completion)",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Linkage to ART (Referral Completion)",
                "codes": [
                    "ARTInitiation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Post GBV Care (Legal) (Referral Completion)",
                "codes": [
                    "PostGBVCareLegal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Post Abuse Care Services (Referral Completion)",
                "codes": [
                    "PostGBVServicesClinical"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Violence prevention education (Referral Completion)",
                "codes": [
                    "ViolencePreventionEducation"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "service_from_referral",
                "ids": [
                    "rsh5Kvx6qAU",
                    "OrC9Bh2bcFz",
                    "hXyqgOWZ17b"
                ],
                "name": "Education subsidies (Referral Completion)",
                "codes": [
                    "EducationSubsidiesSupport"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "lcyyWZnfQNJ",
                "name": "Implementing Mechanism Name (Referral Completion)",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "vPTKp7xDX4L"
            },
            {
                "id": "GsWaSx1t3Qs",
                "name": "Service Provider (Referral Completion)",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "vPTKp7xDX4L"
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "vVMJBQvvm5D",
            "tmuVlsiEjUi",
            "KixA3B2O8Rp",
            "A5VS8GCyb8t",
            "pNg5CAXMtLP"
        ],
        "includeEnrollmentWithoutService": false
    },
    {
        "id": "KB_prep_report",
        "name": "KB PrEP report",
        "program": [
            "hOEIHJDrrvz",
            "CK4iMK8b0aZ"
        ],
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "vIX4GTSCX4P",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "Village of Residence",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "isAgywBeneficiary",
                "name": "AGYW/Dreams Beneficiary",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_residence",
                "name": "District of Residence",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "community_council_of_residence",
                "name": "Community Council of Residence",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Phone Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "is_screened_for_prep",
                "ids": [
                    "YDxOvZTdzAc",
                    "yuOiCMwlOlb",
                    "w16L3KidzUp",
                    "HIsG7OjQfqo",
                    "wg43kJ09Up5",
                    "DCXxIRxPse3",
                    "Ufy2ZT9yphQ",
                    "nLLHqOGTQK9",
                    "sa81lAvBb7Y",
                    "wJ0ctEtFyzS",
                    "dQBja8nUr18",
                    "ACcf4Jyy30c",
                    "wNIvEyH95EU",
                    "z7eAqo0LMqi",
                    "oZPPEMZ0hXt",
                    "uBJeTLcoAKM",
                    "OLaa0ZiGMVu",
                    "zGAjwEL0yL5",
                    "fufd2D8sYc3",
                    "fchWv2MSmaS",
                    "heT7TrQQAA1",
                    "mdpVjiigyEe",
                    "QTHDGaiEgMk",
                    "wSnrfl8u3Kw",
                    "pcS3AkmRGnq",
                    "ycrnvO8Am4c",
                    "eOy1XwiYC8H",
                    "X2m9v2E5WaI"
                ],
                "name": "Screened for PrEP",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "is_screened_for_prep",
                "ids": [
                    "BrcTtRhrxXp",
                    "uHrSSJghmTS",
                    "rprU5DII5Aw",
                    "kK8Gt6LA8QM",
                    "gufQ1ELVqcS",
                    "gCvMVscBNfk",
                    "WeaVsrFcWne",
                    "RqWMrqUcDqv",
                    "d3zHELPzSaH",
                    "YQI32r1MQxA",
                    "pQaAQdJnE1w",
                    "DobfAIMBOvy",
                    "jpbLNWRjUJK",
                    "bH9DpJOIutM",
                    "h0P6UfkUvLP",
                    "POaEWdS7Lw5",
                    "veoA322323t",
                    "vMR9VtzuH3R",
                    "qgNIIJBeMBT",
                    "gDlQ3IThgzH",
                    "AkuZ9MSPfZ4",
                    "qibwngZ6fd5",
                    "JBmwR9pBO4I",
                    "Ihu2PjZMh8B",
                    "W8LTmGz13QM",
                    "XfB60ruQI3I",
                    "D0tq5I6jgLk",
                    "q9dpokR3G1q",
                    "rZov68n0pzv",
                    "kqDlnMhTKTd",
                    "B8jihEQnoJG",
                    "ov7UEdiyjJA",
                    "dpfubDzhwhX"
                ],
                "name": "Screened for PrEP",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "is_eligible_for_prep",
                "ids": [
                    "sa81lAvBb7Y",
                    "dQBja8nUr18"
                ],
                "name": "Eligible for PrEP",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "is_eligible_for_prep",
                "ids": [
                    "h0P6UfkUvLP",
                    "veoA322323t"
                ],
                "name": "Eligible for PrEP",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "prep_beneficairy_status",
                "name": "Beneficiary Status",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rh881j2vfvT",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "N8tlZl91pBY",
                "name": "HIV Status",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "mdpVjiigyEe",
                "name": "Initiated",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    },
                    {
                        "value": "No",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "D0tq5I6jgLk",
                "name": "Initiated",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "mMjGlK1W0Xo",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    },
                    {
                        "value": "No",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Community Council of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "BrcTtRhrxXp",
                "name": "Health Facility",
                "isDate": false,
                "isBoolean": false,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "LNaNh7kvh4X",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "following_up_visit",
                "name": "Follow up Visit",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "following_up_visit",
                "name": "Follow up Visit",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "jjz5PgokIho",
                "name": "Next Visit Date",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "jjz5PgokIho",
                "name": "Next Visit Date",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "VW9nRqUEWbi",
                "name": "[PrEp Visit] HIV Status",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "VW9nRqUEWbi",
                "name": "[PrEp Visit] HIV Status",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "wBG1kmHK6kJ",
                "name": "Visit Outcome",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "wBG1kmHK6kJ",
                "name": "Visit Outcome",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "UL0xa3Sz9ML",
                "name": "Date PrEP stopped",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "UL0xa3Sz9ML",
                "name": "Date PrEP stopped",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "A8SPsd6PF41",
                "name": "PrEP stopped due to patient's decision",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "A8SPsd6PF41",
                "name": "PrEP stopped due to patient's decision",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "KxFYGVirFWF",
                "name": "PrEP stopped due to poor adherence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "KxFYGVirFWF",
                "name": "PrEP stopped due to poor adherence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "qe6l3Iml00L",
                "name": "PrEP stopped due to new HIV diagnosis",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "qe6l3Iml00L",
                "name": "PrEP stopped due to new HIV diagnosis",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "jjPOLtS5Kw8",
                "name": "PrEP stopped due to the patient no longer being at high risk for HIV infection",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "xxOuRNqolik",
                "name": "PrEP stopped due to significant side effects",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "xxOuRNqolik",
                "name": "PrEP stopped due to significant side effects",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "y7lRj3QSDkn",
                "name": "Other reason for stopping PrEP",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "nVCqxOg0nMQ"
            },
            {
                "id": "y7lRj3QSDkn",
                "name": "Other reason for stopping PrEP",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "Yn6AJ0CAxb2"
            },
            {
                "id": "N8tlZl91pBY",
                "name": "Linkages to care after HIV Infection(HIV status)",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "Ybc2k1zv7gK",
                "name": "Linkages to care after HIV Infection(HIV status)",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Date tested pos",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "",
                "name": "Date tested pos",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "CCgL6RQ9BkR",
                "name": "Date linked to Care",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "GwsIKCCsbSB",
                "name": "Date linked to Care",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RJIRJBkyuaj",
                "name": "Health Facility Linked to",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "vOl2rgl3KTy",
                "name": "Health Facility Linked to",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "fQInK8s2RNR",
                "name": "Sub-implementing Mechanism",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "KixA3B2O8Rp"
        ],
        "includeEnrollmentWithoutService": false
    },
    {
        "id": "consolidated_OVC_Layering_Services",
        "name": "Consolidated OVC Layering Dataset",
        "program": [
            "em38qztTI8s",
            "BNsDaCclOiu"
        ],
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "BENEFICIARY NAME",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rSP9c21JsfC",
                "name": "BENEFICIARY SURNAME",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "qZP982qpSPS",
                "name": "DATE OF BIRTH",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "BENEFICIARY AGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "beneficiary_age_range",
                "name": "AGE RANGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age_ranges",
                "name": "AGE RANGES",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Uw2Z1XNFgXI",
                "name": "18-20 IN SCHOOL",
                "isDate": false,
                "program": "em38qztTI8s",
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "dVdlJNtNLIQ"
            },
            {
                "id": "",
                "name": "18-20 IN ECONOMIC STRENGTHNING",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "DISTRICT",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "COMMUNITY COUNCIL",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "VILLAGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_type",
                "ids": [
                    "KO5NC4pfBmv"
                ],
                "name": "BENEFICIARY TYPE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "eIU7KMx4Tu3",
                "name": "BENEFICIARY CODE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "PHONE NUMBERS",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "mTv9eZZq0Nz",
                "name": "PRIMARY VULNERABILITY",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "wmKqYZML8GA",
                "name": "CHILD LIVING WITH HIV",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "GMcljM7jbNG",
                "name": "HIV EXPOSED INFANTS",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ZKMhrjWoXnD",
                "name": "CHILD OF PLHIV",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Gkjp5XZD70V",
                "name": "CHILD EXPOSED/EXPERIENCING VIOLENCE AND ABUSE",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "br1xvwAQ6el",
                "name": "CHILD OF FSW",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "UeF4OvjIIEK",
                "name": "ORPHANS(SINGLE & DOUBLE)",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "YR7Xxk14qoP",
                "name": "CHILDREN LIVING WITH DISABILITIES",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "WsmWkkFBiT6",
                "name": "SIBLINGS OF OTHER SUB-POPULATIONS",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RDobagXItZ6",
                "name": "NEW OR RETURNING",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "assessmment_date",
                "name": "ASSESSMENT DATE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "yJQi4cbzeBF",
                "name": "HIVSCREEN Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "XoSPWmpWXCy",
                "name": "HTS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "XoSPWmpWXCy",
                "name": "HTS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "ylSjcj6cv42",
                "name": "HIVTREAT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "ylSjcj6cv42",
                "name": "HIVTREAT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "cx4xBY4jZXM",
                "name": "HIVS&D Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "cx4xBY4jZXM",
                "name": "HIVS&D Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AxtahhoHcXV",
                "name": "HEALTH Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AxtahhoHcXV",
                "name": "HEALTH Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "d2vXxEPeCq7",
                "name": "PRG&L Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "d2vXxEPeCq7",
                "name": "PRG&L Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "dTFLFtUUeEK",
                "name": "SAIDS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "dTFLFtUUeEK",
                "name": "SAIDS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "x4yAqv4z2Xv",
                "name": "IMMUNIZE Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AM9oJCOHM7f",
                "name": "MALNU Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "hJUuQ648wVF",
                "name": "CCFLS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "BJrrrqQqwQO",
                "name": "STIMULATE Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "LswSBpMoG5C",
                "name": "TBSCREEN Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "gCKoJgBFdob",
                "name": "TBREFER Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "JSQ3xP1NhuN",
                "name": "FOODPREP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AwWKp6KmqgY",
                "name": "FOODPREV Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "uvJV4WGc5ct",
                "name": "FOODSUPP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "qTf8VSoojJ2",
                "name": "SOAKAGE PIT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "qTf8VSoojJ2",
                "name": "SOAKAGE PIT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "DQxqyncQtwm",
                "name": "TIPPY TAP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "DQxqyncQtwm",
                "name": "TIPPY TAP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "e6NV2ZAzFEh",
                "name": "SILC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "e6NV2ZAzFEh",
                "name": "SILC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "yPP7lkomNfK",
                "name": "SGROUP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "kvF996ugmMl",
                "name": "FE Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "WrjNxZBVHCL",
                "name": "K/TPLOT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "WrjNxZBVHCL",
                "name": "K/TPLOT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "uQiyym8SEvd",
                "name": "SLION Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "WiPTQhWLVU1",
                "name": "RTEEN Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "neF08iYV9Os",
                "name": "RKIDS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "PoxYSqq8Hgz",
                "name": "P&FC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "AaqeRcyjbyS",
                "name": "VAC LEGAL MESSAGING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "AaqeRcyjbyS",
                "name": "VAC LEGAL MESSAGING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "aPmPhwm8Zln",
                "name": "VAC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "aPmPhwm8Zln",
                "name": "VAC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "Ccp4Odlh3BE",
                "name": "COUNSELLING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "Ccp4Odlh3BE",
                "name": "COUNSELLING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "exHDkX1gPiC",
                "name": "SHELTER Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "hS7aONLz2cq",
                "name": "BIRTHCERT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "hS7aONLz2cq",
                "name": "BIRTHCERT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "Cb8qzfdrg7d",
                "name": "AFLAS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "X47zxNAqMv0",
                "name": "HWCLUB Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "X47zxNAqMv0",
                "name": "HWCLUB Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "qraZh4n14S4",
                "name": "BURSARY Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "aTKFUztYIeT",
                "name": "SFEES Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "q2N7p3UbvSF",
                "name": "SMATERIAL Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "NcMANzhhphO",
                "name": "REENROL Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "is_service_provided",
                "name": "SERVICES PROVIDED?",
                "isDate": false,
                "isBoolean": false,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "is_service_provided",
                "name": "SERVICES PROVIDED?",
                "isDate": false,
                "isBoolean": false,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "date_of_last_service_received",
                "name": "DATE OF SERVICE (YYYY/MM/DD)",
                "isDate": true,
                "isBoolean": false,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "date_of_last_service_received",
                "name": "DATE OF SERVICE (YYYY/MM/DD)",
                "isDate": true,
                "isBoolean": false,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "BYu8pI5kGXF",
                "name": "HIVSCREEN Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "JnqldNamliR",
                "name": "HTS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "JnqldNamliR",
                "name": "HTS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "YFgrURiwirq",
                "name": "HIVTREAT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "YFgrURiwirq",
                "name": "HIVTREAT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "HzI5X2yHef6",
                "name": "HIVS&D Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "HzI5X2yHef6",
                "name": "HIVS&D Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "eqhzeRBMftZ",
                "name": "HEALTH Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "eqhzeRBMftZ",
                "name": "HEALTH Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "ESIjwQ9S6Ic",
                "name": "PRG&L Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "ESIjwQ9S6Ic",
                "name": "PRG&L Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "r8wPQAog7PJ",
                "name": "SAIDS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "r8wPQAog7PJ",
                "name": "SAIDS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "UKczyQWCB0L",
                "name": "IMMUNIZE Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "KkqMjxjAR7g",
                "name": "MALNU Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "mRoO7kgpgVg",
                "name": "CCFLS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "GNQ3gDA2CTI",
                "name": "STIMULATE Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "gSp9bgPW52L",
                "name": "TBSCREEN Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "mY7GqOTKtsQ",
                "name": "TBREFER Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "zK7kMYpgPQn",
                "name": "FOODPREP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "tnspdPfpuXm",
                "name": "FOODPREV Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "DoU7AeHDsUs",
                "name": "FOODSUPP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "qL9c5r7c6kK",
                "name": "SOAKAGE PIT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "FRWCmEerPic",
                "name": "TIPPY TAP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "xTO562B5g53",
                "name": "SILC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "AnnOS2m6LZK",
                "name": "SGROUP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "lpTVK3t1Ahk",
                "name": "FE Servicre",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "gfKsz88uxtg",
                "name": "K/TPLOT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "lEkrLOFmLrH",
                "name": "K/TPLOT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "RNKOtUtLT4c",
                "name": "SLION Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "GImA3HB9YK5",
                "name": "RTEEN Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "Fj2RbXsb8Yj",
                "name": "RKIDS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "gwwUOs6yt6C",
                "name": "P&FC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "QDFZ03HbjGj",
                "name": "VAC LEGAL MESSAGING Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "QDFZ03HbjGj",
                "name": "VAC LEGAL MESSAGING Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "rMtSykWZ4HB",
                "name": "VAC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "rMtSykWZ4HB",
                "name": "VAC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "JlRnllAlSk0",
                "name": "SHELTER Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "aGChpBlIzcd",
                "name": "BIRTHCERT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "aGChpBlIzcd",
                "name": "BIRTHCERT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "LcIB5EL3IjT",
                "name": "AFLAS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "hg2bpp1HqwU",
                "name": "HWCLUB Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "hg2bpp1HqwU",
                "name": "HWCLUB Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "fvgPnlOD7e9",
                "name": "BURSARY Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "MeMaUvt3O8j",
                "name": "SFEES Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "WQlWXUmYjI2",
                "name": "SMATERIAL Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "Zc0M1jsbfyA",
                "name": "REENROL Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "Uw2Z1XNFgXI",
                "name": "SCHOOLING (02-20 years)",
                "isDate": false,
                "program": "em38qztTI8s",
                "isBoolean": true,
                "programStage": "dVdlJNtNLIQ"
            },
            {
                "id": "zpykd7zvLsC",
                "name": "SCHOOL PROGRESSION",
                "isDate": false,
                "program": "em38qztTI8s",
                "isBoolean": false,
                "programStage": "dVdlJNtNLIQ"
            },
            {
                "id": "vNeOE9abQBB",
                "name": "INITIAL HIV STATUS",
                "isDate": false,
                "isBoolean": false,
                "programStage": "uEwup8PaVBd"
            },
            {
                "id": "eSJhbqT1NQb",
                "name": "INITIAL HIV STATUS",
                "isDate": false,
                "isBoolean": false,
                "programStage": "RJTRRO0wg8H"
            },
            {
                "id": "hiv_risk_assessment_result",
                "ids": [
                    "Fz89mIraWIl",
                    "mIcseDgrIlJ",
                    "Hi9fp222l2D",
                    "YAugNMbMe2c",
                    "niqNMJrfFDs",
                    "NhjnHO0IyqY",
                    "LA4G0A6fkNF",
                    "dL8ts5GQcMI",
                    "W64q5maeL6o",
                    "VJh6KDlBkfb",
                    "SDPCwdDB9yX",
                    "v0ArPi4Rk4o"
                ],
                "name": "HIV RISK ASSESSMENT RESULT",
                "isDate": false,
                "isBoolean": false,
                "programStage": "Pb1Gb4Aky92"
            },
            {
                "id": "PN92g65TkVI",
                "name": "BENEFICIARY STATUS",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "iaVO2v6TsWa",
                "name": "REASONS FOR EXIT",
                "isDate": false,
                "isBoolean": false,
                "programStage": "GJMtfOWadC0"
            },
            {
                "id": "iaVO2v6TsWa",
                "name": "REASONS FOR EXIT",
                "isDate": false,
                "isBoolean": false,
                "programStage": "IHc7aMmyTvq"
            },
            {
                "id": "Sa0KVprHUr7",
                "name": "When did the violence/abuse happen",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "m26lCJGANwu",
                "name": "Experience sexual violence/abuse",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "BGJgzqszT0H",
                "name": "Experience Economic(Neglect) violence/abuse",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "WAjYVtFWI2n",
                "name": "Experience Physical violence/abuse",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "lm4BA6iOdlI",
                "name": "Experience Emotional violence/abuse",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Mc3k3bSwXNe",
                "name": "Action taken?",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "yI8xKOrRN9a",
                "name": "Action taken: Health Facility",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "ftRPTznAqUn",
                "name": "Action taken: Police-CGPU",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "FVBsqRoLGYW",
                "name": "Action taken: Chief",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "PoQuVkWjI4K",
                "name": "Action taken: Councilor",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "mM0mGp695z4",
                "name": "Action taken: Social Worker",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "Yu4SpTnnAqb",
                "name": "Action taken: Other",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "OLbwYRoywcZ",
                "name": "Case completed?",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "KixA3B2O8Rp",
            "SdDDPA28oVh",
            "NuxoYkqopE2",
            "RoLA6GyxTlS"
        ],
        "includeEnrollmentWithoutService": true
    },
    {
        "id": "OVC_Interverntion_enrollment",
        "name": "OVC Dataset ( Profile Data Only)",
        "program": [
            "em38qztTI8s",
            "BNsDaCclOiu"
        ],
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "BENEFICIARY NAME",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rSP9c21JsfC",
                "name": "BENEFICIARY SURNAME",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "qZP982qpSPS",
                "name": "DATE OF BIRTH",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "BENEFICIARY AGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "beneficiary_age_range",
                "name": "AGE RANGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age_ranges",
                "name": "AGE RANGES",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Uw2Z1XNFgXI",
                "name": "18-20 IN SCHOOL",
                "isDate": false,
                "program": "em38qztTI8s",
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "dVdlJNtNLIQ"
            },
            {
                "id": "",
                "name": "18-20 IN ECONOMIC STRENGTHNING",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "fQInK8s2RNR",
                "name": "ORGANIZATION",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "DISTRICT",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "COMMUNITY COUNCIL",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "VILLAGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_type",
                "ids": [
                    "KO5NC4pfBmv"
                ],
                "name": "BENEFICIARY TYPE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "eIU7KMx4Tu3",
                "name": "BENEFICIARY CODE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "PHONE NUMBERS",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "mTv9eZZq0Nz",
                "name": "PRIMARY VULNERABILITY",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ZKMhrjWoXnD",
                "name": "CHILD LIVING WITH HIV",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "GMcljM7jbNG",
                "name": "HIV EXPOSED INFANTS",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ZKMhrjWoXnD",
                "name": "CHILD OF PLHIV",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Gkjp5XZD70V",
                "name": "CHILD EXPOSED/EXPERIENCING VIOLENCE AND ABUSE",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "br1xvwAQ6el",
                "name": "CHILD OF FSW",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "UeF4OvjIIEK",
                "name": "ORPHANS(SINGLE & DOUBLE)",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "YR7Xxk14qoP",
                "name": "CHILDREN LIVING WITH DISABILITIES",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "WsmWkkFBiT6",
                "name": "OTHER",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RDobagXItZ6",
                "name": "NEW OR RETURNING",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "KixA3B2O8Rp",
            "SdDDPA28oVh",
            "NuxoYkqopE2",
            "RoLA6GyxTlS"
        ],
        "includeEnrollmentWithoutService": true
    },
    {
        "id": "OVC_Layering_Services",
        "name": "OVC Layering Dataset (Services)",
        "program": [
            "em38qztTI8s",
            "BNsDaCclOiu"
        ],
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "BENEFICIARY NAME",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rSP9c21JsfC",
                "name": "BENEFICIARY SURNAME",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "qZP982qpSPS",
                "name": "DATE OF BIRTH",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "BENEFICIARY AGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "beneficiary_age_range",
                "name": "AGE RANGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age_ranges",
                "name": "AGE RANGES",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Uw2Z1XNFgXI",
                "name": "18-20 IN SCHOOL",
                "isDate": false,
                "program": "em38qztTI8s",
                "isBoolean": true,
                "isAttribute": false,
                "programStage": "dVdlJNtNLIQ"
            },
            {
                "id": "",
                "name": "18-20 IN ECONOMIC STRENGTHNING",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": false,
                "programStage": ""
            },
            {
                "id": "fQInK8s2RNR",
                "name": "ORGANIZATION",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "DISTRICT",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "COMMUNITY COUNCIL",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "VILLAGE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_type",
                "ids": [
                    "KO5NC4pfBmv"
                ],
                "name": "BENEFICIARY TYPE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "eIU7KMx4Tu3",
                "name": "BENEFICIARY CODE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "PHONE NUMBERS",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "mTv9eZZq0Nz",
                "name": "PRIMARY VULNERABILITY",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ZKMhrjWoXnD",
                "name": "CHILD LIVING WITH HIV",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "GMcljM7jbNG",
                "name": "HIV EXPOSED INFANTS",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ZKMhrjWoXnD",
                "name": "CHILD OF PLHIV",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Gkjp5XZD70V",
                "name": "CHILD EXPOSED/EXPERIENCING VIOLENCE AND ABUSE",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "br1xvwAQ6el",
                "name": "CHILD OF FSW",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "UeF4OvjIIEK",
                "name": "ORPHANS(SINGLE & DOUBLE)",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "YR7Xxk14qoP",
                "name": "CHILDREN LIVING WITH DISABILITIES",
                "isDate": false,
                "program": "",
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "WsmWkkFBiT6",
                "name": "OTHER",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "RDobagXItZ6",
                "name": "NEW OR RETURNING",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "is_assemmenet_conducted",
                "name": "ASSESSMENT CONDUCTED?",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "assessmment_date",
                "name": "ASSESSMENT DATE",
                "isDate": false,
                "program": "",
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "yJQi4cbzeBF",
                "name": "HIVSCREEN Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "XoSPWmpWXCy",
                "name": "HTS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "XoSPWmpWXCy",
                "name": "HTS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "ylSjcj6cv42",
                "name": "HIVTREAT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "ylSjcj6cv42",
                "name": "HIVTREAT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "cx4xBY4jZXM",
                "name": "HIVS&D Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "cx4xBY4jZXM",
                "name": "HIVS&D Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AxtahhoHcXV",
                "name": "HEALTH Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AxtahhoHcXV",
                "name": "HEALTH Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "d2vXxEPeCq7",
                "name": "PRG&L Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "d2vXxEPeCq7",
                "name": "PRG&L Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "dTFLFtUUeEK",
                "name": "SAIDS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "dTFLFtUUeEK",
                "name": "SAIDS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "x4yAqv4z2Xv",
                "name": "IMMUNIZE Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AM9oJCOHM7f",
                "name": "MALNU Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "hJUuQ648wVF",
                "name": "CCFLS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "BJrrrqQqwQO",
                "name": "STIMULATE Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "LswSBpMoG5C",
                "name": "TBSCREEN Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "gCKoJgBFdob",
                "name": "TBREFER Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "JSQ3xP1NhuN",
                "name": "FOODPREP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "AwWKp6KmqgY",
                "name": "FOODPREV Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "EaJTFrklMo5",
                "name": "FOODSUPP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "qTf8VSoojJ2",
                "name": "SOAKAGE PIT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "qTf8VSoojJ2",
                "name": "SOAKAGE PIT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "DQxqyncQtwm",
                "name": "TIPPY TAP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "DQxqyncQtwm",
                "name": "TIPPY TAP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "e6NV2ZAzFEh",
                "name": "SILC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "e6NV2ZAzFEh",
                "name": "SILC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "HsxFZOuV4oZ",
                "name": "OVCFUND Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "yPP7lkomNfK",
                "name": "SGROUP Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "kvF996ugmMl",
                "name": "FE Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "WrjNxZBVHCL",
                "name": "K/TPLOT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "WrjNxZBVHCL",
                "name": "K/TPLOT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "TQSMaZgfZPO",
                "name": "PTS4G Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "TQSMaZgfZPO",
                "name": "PTS4G Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "SN2kJN3jAG9",
                "name": "PTS4&G Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "SN2kJN3jAG9",
                "name": "PTS4&G Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "uQiyym8SEvd",
                "name": "SLION Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "WiPTQhWLVU1",
                "name": "RTEEN Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "neF08iYV9Os",
                "name": "RKIDS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "PoxYSqq8Hgz",
                "name": "P&FC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "AaqeRcyjbyS",
                "name": "VAC LEGAL MESSAGING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "AaqeRcyjbyS",
                "name": "VAC LEGAL MESSAGING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "aPmPhwm8Zln",
                "name": "VAC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "aPmPhwm8Zln",
                "name": "VAC Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "Ccp4Odlh3BE",
                "name": "COUNSELLING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "Ccp4Odlh3BE",
                "name": "COUNSELLING Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "GO3Ojp1UEX7",
                "name": "FOSTER CARE Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "exHDkX1gPiC",
                "name": "SHELTER Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "hS7aONLz2cq",
                "name": "BIRTHCERT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "hS7aONLz2cq",
                "name": "BIRTHCERT Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "Cb8qzfdrg7d",
                "name": "AFLAS Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "X47zxNAqMv0",
                "name": "HWCLUB Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vjF07cZNST3"
            },
            {
                "id": "X47zxNAqMv0",
                "name": "HWCLUB Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "qraZh4n14S4",
                "name": "BURSARY Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "aTKFUztYIeT",
                "name": "SFEES Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "q2N7p3UbvSF",
                "name": "SMATERIAL Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "NcMANzhhphO",
                "name": "REENROL Case plan",
                "isDate": false,
                "isBoolean": true,
                "programStage": "gkNKXUxpyv9"
            },
            {
                "id": "is_service_provided",
                "name": "SERVICES PROVIDED?",
                "isDate": false,
                "isBoolean": false,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "is_service_provided",
                "name": "SERVICES PROVIDED?",
                "isDate": false,
                "isBoolean": false,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "date_of_last_service_received",
                "name": "DATE OF SERVICE (YYYY/MM/DD)",
                "isDate": true,
                "isBoolean": false,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "date_of_last_service_received",
                "name": "DATE OF SERVICE (YYYY/MM/DD)",
                "isDate": true,
                "isBoolean": false,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "BYu8pI5kGXF",
                "name": "HIVSCREEN Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "JnqldNamliR",
                "name": "HTS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "JnqldNamliR",
                "name": "HTS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "YFgrURiwirq",
                "name": "HIVTREAT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "YFgrURiwirq",
                "name": "HIVTREAT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "HzI5X2yHef6",
                "name": "HIVS&D Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "HzI5X2yHef6",
                "name": "HIVS&D Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "eqhzeRBMftZ",
                "name": "HEALTH Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "eqhzeRBMftZ",
                "name": "HEALTH Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "ESIjwQ9S6Ic",
                "name": "PRG&L Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "ESIjwQ9S6Ic",
                "name": "PRG&L Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "r8wPQAog7PJ",
                "name": "SAIDS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "r8wPQAog7PJ",
                "name": "SAIDS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "UKczyQWCB0L",
                "name": "IMMUNIZE Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "KkqMjxjAR7g",
                "name": "MALNU Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "mRoO7kgpgVg",
                "name": "CCFLS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "GNQ3gDA2CTI",
                "name": "STIMULATE Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "gSp9bgPW52L",
                "name": "TBSCREEN Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "mY7GqOTKtsQ",
                "name": "TBREFER Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "zK7kMYpgPQn",
                "name": "FOODPREP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "tnspdPfpuXm",
                "name": "FOODPREV Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "QnFYeBNZlbf",
                "name": "FOODSUPP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "qL9c5r7c6kK",
                "name": "SOAKAGE PIT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "FRWCmEerPic",
                "name": "TIPPY TAP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "xTO562B5g53",
                "name": "SILC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "KvLYMr8F4vg",
                "name": "OVCFUND Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "AnnOS2m6LZK",
                "name": "SGROUP Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "lpTVK3t1Ahk",
                "name": "FE Servicre",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "gfKsz88uxtg",
                "name": "K/TPLOT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "gfKsz88uxtg",
                "name": "K/TPLOT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "EYhFIkTpUS3",
                "name": "PTS4G Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "EYhFIkTpUS3",
                "name": "PTS4G Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "IiKUlAeSIE3",
                "name": "PTS4&G Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "IiKUlAeSIE3",
                "name": "PTS4&G Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "RNKOtUtLT4c",
                "name": "SLION Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "GImA3HB9YK5",
                "name": "RTEEN Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "Fj2RbXsb8Yj",
                "name": "RKIDS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "gwwUOs6yt6C",
                "name": "P&FC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "QDFZ03HbjGj",
                "name": "VAC LEGAL MESSAGING Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "QDFZ03HbjGj",
                "name": "VAC LEGAL MESSAGING Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "rMtSykWZ4HB",
                "name": "VAC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "rMtSykWZ4HB",
                "name": "VAC Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "JlRnllAlSk0",
                "name": "SHELTER Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "aGChpBlIzcd",
                "name": "BIRTHCERT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "aGChpBlIzcd",
                "name": "BIRTHCERT Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "LcIB5EL3IjT",
                "name": "AFLAS Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "hg2bpp1HqwU",
                "name": "HWCLUB Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "hg2bpp1HqwU",
                "name": "HWCLUB Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vcaHzmUuYzU"
            },
            {
                "id": "fvgPnlOD7e9",
                "name": "BURSARY Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "MeMaUvt3O8j",
                "name": "SFEES Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "WQlWXUmYjI2",
                "name": "SMATERIAL Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "Zc0M1jsbfyA",
                "name": "REENROL Service",
                "isDate": false,
                "isBoolean": true,
                "programStage": "CHFwighOquA"
            },
            {
                "id": "Uw2Z1XNFgXI",
                "name": "SCHOOLING (02-20 years)",
                "isDate": false,
                "program": "em38qztTI8s",
                "isBoolean": true,
                "programStage": "dVdlJNtNLIQ"
            },
            {
                "id": "c5TMWtM4VVJ",
                "name": "INITIAL HIV STATUS",
                "isDate": false,
                "isBoolean": false,
                "programStage": "RJTRRO0wg8H"
            },
            {
                "id": "hiv_risk_assessment_result",
                "ids": [
                    "Fz89mIraWIl",
                    "mIcseDgrIlJ",
                    "Hi9fp222l2D",
                    "YAugNMbMe2c",
                    "niqNMJrfFDs",
                    "NhjnHO0IyqY",
                    "LA4G0A6fkNF",
                    "dL8ts5GQcMI",
                    "W64q5maeL6o",
                    "VJh6KDlBkfb",
                    "SDPCwdDB9yX",
                    "v0ArPi4Rk4o"
                ],
                "name": "HIV RISK ASSESSMENT RESULT",
                "isDate": false,
                "isBoolean": false,
                "programStage": "Pb1Gb4Aky92"
            },
            {
                "id": "aRNGDZcwWmS",
                "name": "VIRAL LOAD",
                "isDate": false,
                "isBoolean": true,
                "programStage": "uEwup8PaVBd"
            },
            {
                "id": "",
                "name": "MMD",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "PN92g65TkVI",
                "name": "BENEFICIARY STATUS",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "iaVO2v6TsWa",
                "name": "REASONS FOR EXIT",
                "isDate": false,
                "isBoolean": false,
                "programStage": "GJMtfOWadC0"
            },
            {
                "id": "iaVO2v6TsWa",
                "name": "REASONS FOR EXIT",
                "isDate": false,
                "isBoolean": false,
                "programStage": "IHc7aMmyTvq"
            },
            {
                "id": "",
                "name": "HOUSEHOLD CATEGORIZATION",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "Sa0KVprHUr7",
                "name": "When did the violence/abuse happen",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "wtrZQadTkOL",
                "name": "What Type of violence/Abuse did you experience?",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "Mc3k3bSwXNe",
                "name": "Action taken?",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "CePNVGSnj00",
                "name": "What type of Action was taken?",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "OLbwYRoywcZ",
                "name": "Case completed?",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "DREAMS/OVC Overlap",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "KixA3B2O8Rp",
            "SdDDPA28oVh",
            "NuxoYkqopE2",
            "RoLA6GyxTlS"
        ],
        "includeEnrollmentWithoutService": true
    },
    {
        "id": "DREAMS_Layering_Services",
        "name": "DREAMS Layering Dataset (Services)",
        "program": "hOEIHJDrrvz",
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "JhOvli80Qbx",
                "name": "First Name",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jjZWuJfVStp",
                "name": "Surname",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jVSwC6Ln95H",
                "name": "Date of Birth",
                "isDate": true,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "district_of_service",
                "name": "District of Residence",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "an7w8LYPZ7y",
                "name": "Sex",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ox6mydZjgC3",
                "name": "Contact Numbers",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "",
                "name": "Client Type",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "LNaNh7kvh4X",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Passport Number",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rh881j2vfvT",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "isAgywBeneficiary",
                "name": "AGYW Enrolled",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "FHn0nJPumhO",
                "name": "Reason for not enrolling",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "Village",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Educational Subsidies ",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "",
                "name": "Linkage to ART",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "uWKbFmG9ZWQ",
                "name": "ART",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Gk494qKQP8B"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Condom Promotion and Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "NXsIkG9Q1BA"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Condom Promotion and Provision",
                "codes": [
                    "IPC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "N8tlZl91pBY",
                "name": "HIV Testing and Counseling",
                "codes": [
                    "Positive",
                    "Negative",
                    "Indeterminate"
                ],
                "isDate": false,
                "isBoolean": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "zbHpXUjGv5H",
                "name": "HIV Testing and Counseling",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "School-Based HIV and Violence Prevention",
                "codes": [
                    "LBSE"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Social Assets Building",
                "codes": [
                    "Go Girls",
                    "PTS 4-GRADS",
                    "PTS 4 NON-GRADS",
                    "AFLATEEN/TOUN"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Stepping Stones",
                "codes": [
                    "STEPPING STONES"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Messaging",
                "codes": [
                    "GBV Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Legal Protection",
                "codes": [
                    "GBV Legal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Messaging",
                "codes": [
                    "VAC Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Legal Protection",
                "codes": [
                    "VAC Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "mnYT2rZyGgJ",
                "name": "Post-Violence Care",
                "isDate": false,
                "isBoolean": true,
                "programStage": "yK0ENCuwPqh"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Parenting/Caregiver Programs",
                "codes": [
                    "PARENTING"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Contraceptive Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "A7Tl3vML6as"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Socio-Economic Services",
                "codes": [
                    "SILC",
                    "SAVING GROUP",
                    "FINANCIAL EDUCATION"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "VtmkYCQkBQw",
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Qw8c20q5V0w"
            },
            {
                "id": "prep_from_long_form",
                "ids": [
                    "h0P6UfkUvLP",
                    "bH9DpJOIutM",
                    "veoA322323t"
                ],
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "",
                "name": "HIV Prevention Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "qFwm4RM45gi",
                "name": "HIV Risk Assessment and Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": "PGFt6IwdZLM"
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "vVMJBQvvm5D",
            "tmuVlsiEjUi",
            "A5VS8GCyb8t",
            "pNg5CAXMtLP"
        ],
        "includeEnrollmentWithoutService": false
    },
    {
        "id": "PSI_DREAMS_Layering_Services",
        "name": "PSI DREAMS Layering Dataset (Enrollment & Services)",
        "program": "hOEIHJDrrvz",
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "JhOvli80Qbx",
                "name": "First Name",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jjZWuJfVStp",
                "name": "Surname",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jVSwC6Ln95H",
                "name": "Date of Birth",
                "isDate": true,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "district_of_service",
                "name": "District of Residence",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "an7w8LYPZ7y",
                "name": "Sex",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ox6mydZjgC3",
                "name": "Contact Numbers",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "",
                "name": "Client Type",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "LNaNh7kvh4X",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Passport Number",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rh881j2vfvT",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "isAgywBeneficiary",
                "name": "AGYW Enrolled",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "FHn0nJPumhO",
                "name": "Reason for not enrolling",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "Village",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Educational Subsidies ",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "",
                "name": "Linkage to ART",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "uWKbFmG9ZWQ",
                "name": "ART",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Gk494qKQP8B"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Condom Promotion and Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "NXsIkG9Q1BA"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Condom Promotion and Provision",
                "codes": [
                    "IPC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "N8tlZl91pBY",
                "name": "HIV Testing and Counseling",
                "codes": [
                    "Positive",
                    "Negative",
                    "Indeterminate"
                ],
                "isDate": false,
                "isBoolean": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "zbHpXUjGv5H",
                "name": "HIV Testing and Counseling",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "School-Based HIV and Violence Prevention",
                "codes": [
                    "LBSE"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Social Assets Building",
                "codes": [
                    "Go Girls",
                    "PTS 4-GRADS",
                    "PTS 4 NON-GRADS",
                    "AFLATEEN/TOUN"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Stepping Stones",
                "codes": [
                    "STEPPING STONES"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Messaging",
                "codes": [
                    "GBV Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Legal Protection",
                "codes": [
                    "GBV Legal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Messaging",
                "codes": [
                    "VAC Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Legal Protection",
                "codes": [
                    "VAC Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "mnYT2rZyGgJ",
                "name": "Post-Violence Care",
                "isDate": false,
                "isBoolean": true,
                "programStage": "yK0ENCuwPqh"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Parenting/Caregiver Programs",
                "codes": [
                    "PARENTING"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Contraceptive Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "A7Tl3vML6as"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Socio-Economic Services",
                "codes": [
                    "SILC",
                    "SAVING GROUP",
                    "FINANCIAL EDUCATION"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "VtmkYCQkBQw",
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Qw8c20q5V0w"
            },
            {
                "id": "prep_from_long_form",
                "ids": [
                    "h0P6UfkUvLP",
                    "bH9DpJOIutM",
                    "veoA322323t"
                ],
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "",
                "name": "HIV Prevention Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "qFwm4RM45gi",
                "name": "HIV Risk Assessment and Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": "PGFt6IwdZLM"
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "vVMJBQvvm5D"
        ],
        "includeEnrollmentWithoutService": true
    },
    {
        "id": "KB_DREAMS_Layering_Services",
        "name": "KB DREAMS Layering Dataset (Services)",
        "program": "hOEIHJDrrvz",
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "JhOvli80Qbx",
                "name": "First Name",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jjZWuJfVStp",
                "name": "Surname",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jVSwC6Ln95H",
                "name": "Date of Birth",
                "isDate": true,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "district_of_service",
                "name": "District of Residence",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "an7w8LYPZ7y",
                "name": "Sex",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "ox6mydZjgC3",
                "name": "Contact Numbers",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "",
                "name": "Client Type",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "LNaNh7kvh4X",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Passport Number",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rh881j2vfvT",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "isAgywBeneficiary",
                "name": "AGYW Enrolled",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "FHn0nJPumhO",
                "name": "Reason for not enrolling",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "Village",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Educational Subsidies ",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "",
                "name": "Linkage to ART",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "uWKbFmG9ZWQ",
                "name": "ART",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Gk494qKQP8B"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Condom Promotion and Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "NXsIkG9Q1BA"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Condom Promotion and Provision",
                "codes": [
                    "IPC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "N8tlZl91pBY",
                "name": "HIV Testing and Counseling",
                "codes": [
                    "Positive",
                    "Negative",
                    "Indeterminate"
                ],
                "isDate": false,
                "isBoolean": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "zbHpXUjGv5H",
                "name": "HIV Testing and Counseling",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "School-Based HIV and Violence Prevention",
                "codes": [
                    "LBSE"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Social Assets Building",
                "codes": [
                    "Go Girls",
                    "PTS 4-GRADS",
                    "PTS 4 NON-GRADS",
                    "AFLATEEN/TOUN"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Stepping Stones",
                "codes": [
                    "STEPPING STONES"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Messaging",
                "codes": [
                    "GBV Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Legal Protection",
                "codes": [
                    "GBV Legal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Messaging",
                "codes": [
                    "VAC Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Legal Protection",
                "codes": [
                    "VAC Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "mnYT2rZyGgJ",
                "name": "Post-Violence Care",
                "isDate": false,
                "isBoolean": true,
                "programStage": "yK0ENCuwPqh"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Parenting/Caregiver Programs",
                "codes": [
                    "PARENTING"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Contraceptive Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "A7Tl3vML6as"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "SILC",
                "codes": [
                    "SILC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "SAVING GROUP",
                "codes": [
                    "SAVING GROUP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "FINANCIAL EDUCATION",
                "codes": [
                    "FINANCIAL EDUCATION"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "VtmkYCQkBQw",
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Qw8c20q5V0w"
            },
            {
                "id": "prep_from_long_form",
                "ids": [
                    "h0P6UfkUvLP",
                    "bH9DpJOIutM",
                    "veoA322323t"
                ],
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "",
                "name": "HIV Prevention Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "qFwm4RM45gi",
                "name": "HIV Risk Assessment and Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": "PGFt6IwdZLM"
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "fQInK8s2RNR",
                "name": "Sub-implementing Mechanism",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "RoLA6GyxTlS",
            "NuxoYkqopE2",
            "KixA3B2O8Rp"
        ],
        "includeEnrollmentWithoutService": true
    },
    {
        "id": "DREAMS_Layering_Referral",
        "name": "DREAMS Layering Dataset (Referral)",
        "program": "hOEIHJDrrvz",
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Client Type",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "LNaNh7kvh4X",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rh881j2vfvT",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "Village",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "STI Treatment",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "STI Treatment",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "HIV Testing and Counselling",
                "codes": [
                    "HIV Testing and counselling"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "HIV Testing and Counselling",
                "codes": [
                    "HIV Testing and counselling"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Evaluation for ARVs/HAART",
                "codes": [
                    "Evaluation for ARVs/HAART"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Evaluation for ARVs/HAART",
                "codes": [
                    "Evaluation for ARVs/HAART"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post Abuse Case Mngt",
                "codes": [
                    "Post abuse case management"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post Abuse Case Mngt",
                "codes": [
                    "Post abuse case management"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ART Adherence",
                "codes": [
                    "ART and Adherence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ART Adherence",
                "codes": [
                    "ART and Adherence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PMTCT",
                "codes": [
                    "PMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PMTCT",
                "codes": [
                    "PMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Cervical Cancer Screening",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Cervical Cancer Screening",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ECD",
                "codes": [
                    "ECD"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ECD",
                "codes": [
                    "ECD"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Family Planning/SRH",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Family Planning/SRH",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Condoms Provision",
                "codes": [
                    "Condom supply"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Condoms Provision",
                "codes": [
                    "Condom supply"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "TB Treatment",
                "codes": [
                    "TB treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "TB Treatment",
                "codes": [
                    "TB treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Nutrition",
                "codes": [
                    "Nutrition"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Nutrition",
                "codes": [
                    "Nutrition"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ANC",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ANC",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PrEP/PEP",
                "codes": [
                    "PrEP/PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PrEP/PEP",
                "codes": [
                    "PrEP/PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "EID Testing",
                "codes": [
                    "EID Testing"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "EID Testing",
                "codes": [
                    "EID Testing"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "TB/ART Treatment Support",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "TB/ART Treatment Support",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Gender Based Violence",
                "codes": [
                    "Gender Based Violence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Gender Based Violence",
                "codes": [
                    "Gender Based Violence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Domestic Violence Support",
                "codes": [
                    "Domestic Violence Support group"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Domestic Violence Support",
                "codes": [
                    "Domestic Violence Support group"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post Abuse Care Services",
                "codes": [
                    "Referral to post abuse care services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post Abuse Care Services",
                "codes": [
                    "Referral to post abuse care services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Violence Against Children",
                "codes": [
                    "Violence Against Children"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Violence Against Children",
                "codes": [
                    "Violence Against Children"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Youth friendly services",
                "codes": [
                    "Youth friendly services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Youth friendly services",
                "codes": [
                    "Youth friendly services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Income generating activities",
                "codes": [
                    "Income generating activity"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Income generating activities",
                "codes": [
                    "Income generating activity"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Orphan Care",
                "codes": [
                    "Orphan Care & Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Orphan Care",
                "codes": [
                    "Orphan Care & Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Psycho-social",
                "codes": [
                    "Psycho-social Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Psycho-social",
                "codes": [
                    "Psycho-social Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "CAG",
                "codes": [
                    "CAG"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "CAG",
                "codes": [
                    "CAG"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Home based care visits",
                "codes": [
                    "Home based care visits"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Home based care visits",
                "codes": [
                    "Home based care visits"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Educational & Vocational Support",
                "codes": [
                    "Educational and vocational support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Educational & Vocational Support",
                "codes": [
                    "Educational and vocational support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Social Grants",
                "codes": [
                    "Social grants"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Social Grants",
                "codes": [
                    "Social grants"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "vVMJBQvvm5D",
            "tmuVlsiEjUi",
            "A5VS8GCyb8t",
            "RoLA6GyxTlS",
            "NuxoYkqopE2",
            "KixA3B2O8Rp",
            "pNg5CAXMtLP"
        ],
        "includeEnrollmentWithoutService": false
    },
    {
        "id": "DREAMS_Layering_Services_and_Referral",
        "name": "DREAMS Layering Dataset (Service and Referral)",
        "program": "hOEIHJDrrvz",
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "JhOvli80Qbx",
                "name": "First Name",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jjZWuJfVStp",
                "name": "Surname",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jVSwC6Ln95H",
                "name": "Date of Birth",
                "isDate": true,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "an7w8LYPZ7y",
                "name": "Sex",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "ox6mydZjgC3",
                "name": "Contact Numbers",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Client Type",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "LNaNh7kvh4X",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rh881j2vfvT",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "isAgywBeneficiary",
                "name": "AGYW Enrolled",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "FHn0nJPumhO",
                "name": "Reason for not enrolling",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "Village",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Educational Subsidies ",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "",
                "name": "Linkage to ART",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "uWKbFmG9ZWQ",
                "name": "ART",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Gk494qKQP8B"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Condom Promotion and Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "NXsIkG9Q1BA"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Condom Promotion and Provision",
                "codes": [
                    "IPC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "N8tlZl91pBY",
                "name": "HIV Testing and Counseling",
                "codes": [
                    "Positive",
                    "Negative",
                    "Indeterminate"
                ],
                "isDate": false,
                "isBoolean": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "zbHpXUjGv5H",
                "name": "HIV Testing and Counseling",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "GHfoqXKlK6o",
                "name": "Type of HIV Test",
                "isDate": false,
                "isBoolean": false,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "School-Based HIV and Violence Prevention",
                "codes": [
                    "LBSE"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Social Assets Building",
                "codes": [
                    "Go Girls",
                    "PTS 4-GRADS",
                    "PTS 4 NON-GRADS",
                    "AFLATEEN/TOUN"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Stepping Stones",
                "codes": [
                    "STEPPING STONES"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Messaging",
                "codes": [
                    "GBV Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Legal Protection",
                "codes": [
                    "GBV Legal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Messaging",
                "codes": [
                    "VAC Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Legal Protection",
                "codes": [
                    "VAC Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "mnYT2rZyGgJ",
                "name": "Post-Violence Care",
                "isDate": false,
                "isBoolean": true,
                "programStage": "yK0ENCuwPqh"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Parenting/Caregiver Programs",
                "codes": [
                    "PARENTING"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Contraceptive Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "A7Tl3vML6as"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Socio-Economic Services",
                "codes": [
                    "SILC",
                    "SAVING GROUP",
                    "FINANCIAL EDUCATION"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "VtmkYCQkBQw",
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Qw8c20q5V0w"
            },
            {
                "id": "prep_from_long_form",
                "ids": [
                    "h0P6UfkUvLP",
                    "bH9DpJOIutM",
                    "veoA322323t"
                ],
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "",
                "name": "HIV Prevention Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "qFwm4RM45gi",
                "name": "HIV Risk Assessment and Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": "PGFt6IwdZLM"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "STI Treatment (Referral)",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "STI Treatment (Referral)",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "HIV Testing and Counselling (Referral)",
                "codes": [
                    "HIV Testing and counselling"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "HIV Testing and Counselling (Referral)",
                "codes": [
                    "HIV Testing and counselling"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Evaluation for ARVs/HAART (Referral)",
                "codes": [
                    "Evaluation for ARVs/HAART"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Evaluation for ARVs/HAART (Referral)",
                "codes": [
                    "Evaluation for ARVs/HAART"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post Abuse Case Mngt (Referral)",
                "codes": [
                    "Post abuse case management"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post Abuse Case Mngt (Referral)",
                "codes": [
                    "Post abuse case management"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ART Adherence (Referral)",
                "codes": [
                    "ART and Adherence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ART Adherence (Referral)",
                "codes": [
                    "ART and Adherence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PMTCT (Referral)",
                "codes": [
                    "PMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PMTCT (Referral)",
                "codes": [
                    "PMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Cervical Cancer Screening (Referral)",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Cervical Cancer Screening (Referral)",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ECD (Referral)",
                "codes": [
                    "ECD"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ECD (Referral)",
                "codes": [
                    "ECD"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Family Planning/SRH (Referral)",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Family Planning/SRH (Referral)",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Condoms Provision (Referral)",
                "codes": [
                    "Condom supply"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Condoms Provision (Referral)",
                "codes": [
                    "Condom supply"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "TB Treatment (Referral)",
                "codes": [
                    "TB treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "TB Treatment (Referral)",
                "codes": [
                    "TB treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Nutrition (Referral)",
                "codes": [
                    "Nutrition"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Nutrition (Referral)",
                "codes": [
                    "Nutrition"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ANC (Referral)",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ANC (Referral)",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PrEP/PEP (Referral)",
                "codes": [
                    "PrEP/PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PrEP/PEP (Referral)",
                "codes": [
                    "PrEP/PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "EID Testing (Referral)",
                "codes": [
                    "EID Testing"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "EID Testing (Referral)",
                "codes": [
                    "EID Testing"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "TB/ART Treatment Support (Referral)",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "TB/ART Treatment Support (Referral)",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Gender Based Violence (Referral)",
                "codes": [
                    "Gender Based Violence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Gender Based Violence (Referral)",
                "codes": [
                    "Gender Based Violence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Domestic Violence Support (Referral)",
                "codes": [
                    "Domestic Violence Support group"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Domestic Violence Support (Referral)",
                "codes": [
                    "Domestic Violence Support group"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post Abuse Care Services (Referral)",
                "codes": [
                    "Referral to post abuse care services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post Abuse Care Services (Referral)",
                "codes": [
                    "Referral to post abuse care services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Violence Against Children (Referral)",
                "codes": [
                    "Violence Against Children"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Violence Against Children (Referral)",
                "codes": [
                    "Violence Against Children"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Youth friendly services (Referral)",
                "codes": [
                    "Youth friendly services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Youth friendly services (Referral)",
                "codes": [
                    "Youth friendly services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Income generating activities (Referral)",
                "codes": [
                    "Income generating activity"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Income generating activities (Referral)",
                "codes": [
                    "Income generating activity"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Orphan Care (Referral)",
                "codes": [
                    "Orphan Care & Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Orphan Care (Referral)",
                "codes": [
                    "Orphan Care & Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Psycho-social (Referral)",
                "codes": [
                    "Psycho-social Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Psycho-social (Referral)",
                "codes": [
                    "Psycho-social Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "CAG (Referral)",
                "codes": [
                    "CAG"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "CAG (Referral)",
                "codes": [
                    "CAG"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Home based care visits (Referral)",
                "codes": [
                    "Home based care visits"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Home based care visits (Referral)",
                "codes": [
                    "Home based care visits"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Educational & Vocational Support (Referral)",
                "codes": [
                    "Educational and vocational support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Educational & Vocational Support (Referral)",
                "codes": [
                    "Educational and vocational support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Social Grants (Referral)",
                "codes": [
                    "Social grants"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Social Grants (Referral)",
                "codes": [
                    "Social grants"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": false,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v",
            "vVMJBQvvm5D",
            "tmuVlsiEjUi",
            "A5VS8GCyb8t",
            "RoLA6GyxTlS",
            "NuxoYkqopE2",
            "KixA3B2O8Rp"
        ],
        "includeEnrollmentWithoutService": false
    },
    {
        "id": "cumulative_DREAMS_Layering",
        "name": "Cumulative DREAMS Layering Dataset",
        "program": "hOEIHJDrrvz",
        "dxConfigs": [
            {
                "id": "WTZ7GLTrE8Q",
                "name": "First Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "JhOvli80Qbx",
                "name": "First Name",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "rSP9c21JsfC",
                "name": "Surname",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jjZWuJfVStp",
                "name": "Surname",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "qZP982qpSPS",
                "name": "Date of Birth",
                "isDate": true,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "jVSwC6Ln95H",
                "name": "Date of Birth",
                "isDate": true,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "beneficiary_age",
                "name": "Age",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "VJiWumvINR6",
                "name": "Sex",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "an7w8LYPZ7y",
                "name": "Sex",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "ox6mydZjgC3",
                "name": "Contact Numbers",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "tNdoR0jYr7R",
                "name": "Contact Numbers",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Client Type",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "LNaNh7kvh4X",
                "name": "Current Pregnancy status",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "PREGNANT"
                    },
                    {
                        "value": "",
                        "displayName": "NOT PREGNANT"
                    }
                ]
            },
            {
                "id": "fTSAY18LgCF",
                "name": "ID number",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "q8qPtzanSTU",
                "name": "Number of Sex Partners",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "rh881j2vfvT",
                "name": "STIs (Past or Present)",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "iY67qYnywgS",
                "name": "Regular Condom Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "PGFt6IwdZLM",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "p33MrrhsQRz",
                "name": "Transactional Sex",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "yc3BlUIEup3",
                "name": "Experiences of Violence",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "bApA6X6TVvJ",
                "name": "School Enrollment",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "NOT ENROLLED IN SCHOOL"
                    },
                    {
                        "value": "",
                        "displayName": "ENROLLED IN SCHOOL"
                    }
                ]
            },
            {
                "id": "HJIHPjOf5s1",
                "name": "Alcohol Use",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "B4ojlzKypUF",
                "name": "Orphanhood",
                "isDate": false,
                "isBoolean": true,
                "isAttribute": true,
                "programStage": "",
                "displayValues": [
                    {
                        "value": "Yes",
                        "displayName": "Yes"
                    },
                    {
                        "value": "",
                        "displayName": "No"
                    }
                ]
            },
            {
                "id": "isAgywBeneficiary",
                "name": "AGYW Enrolled",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "FHn0nJPumhO",
                "name": "Reason for not enrolling",
                "isDate": false,
                "program": "M4uWNFJNMIR",
                "isBoolean": false,
                "programStage": "uctHRP6BBXP"
            },
            {
                "id": "enrollmentdate",
                "name": "Date of enrollment to the program",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "date_of_last_service_received",
                "name": "Date Of Last Service Received",
                "isDate": true,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "district_of_service",
                "name": "District of Service",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "last_service_community_council",
                "name": "Last Service Community Council",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "facility_name",
                "name": "Facility Name",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "RB8Wx75hGa4",
                "name": "Village",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "",
                "name": "Educational Subsidies ",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "VMMC",
                "codes": [
                    "VMMC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "",
                "name": "Linkage to ART",
                "isDate": false,
                "isBoolean": false,
                "programStage": ""
            },
            {
                "id": "uWKbFmG9ZWQ",
                "name": "ART",
                "isDate": false,
                "isBoolean": true,
                "programStage": "Gk494qKQP8B"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Condom Promotion and Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "NXsIkG9Q1BA"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Condom Promotion and Provision",
                "codes": [
                    "IPC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "N8tlZl91pBY",
                "name": "HIV Testing and Counseling",
                "codes": [
                    "Positive",
                    "Negative",
                    "Indeterminate"
                ],
                "isDate": false,
                "isBoolean": false,
                "programStage": "kq6qeEgbDVY"
            },
            {
                "id": "zbHpXUjGv5H",
                "name": "HIV Testing and Counseling",
                "isDate": false,
                "isBoolean": true,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "GHfoqXKlK6o",
                "name": "Type of HIV Test",
                "isDate": false,
                "isBoolean": false,
                "programStage": "vAMc8n0YB6m"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "School-Based HIV and Violence Prevention",
                "codes": [
                    "LBSE"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Social Assets Building",
                "codes": [
                    "Go Girls",
                    "PTS 4-GRADS",
                    "PTS 4 NON-GRADS",
                    "AFLATEEN/TOUN"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Stepping Stones",
                "codes": [
                    "STEPPING STONES"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Messaging",
                "codes": [
                    "GBV Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "GBV Legal Protection",
                "codes": [
                    "GBV Legal"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Messaging",
                "codes": [
                    "VAC Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "VAC Legal Protection",
                "codes": [
                    "VAC Legal Messaging"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "mnYT2rZyGgJ",
                "name": "Post-Violence Care",
                "isDate": false,
                "isBoolean": true,
                "programStage": "yK0ENCuwPqh"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Parenting/Caregiver Programs",
                "codes": [
                    "PARENTING"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "uciT2F6ByYO",
                "name": "Contraceptive Provision",
                "isDate": false,
                "isBoolean": true,
                "programStage": "A7Tl3vML6as"
            },
            {
                "id": "Eug4BXDFLym",
                "name": "Socio-Economic Services",
                "codes": [
                    "SILC",
                    "SAVING GROUP",
                    "FINANCIAL EDUCATION"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "bDJq2JWVTbC"
            },
            {
                "id": "h0P6UfkUvLP",
                "name": "PrEP",
                "isDate": false,
                "isBoolean": true,
                "programStage": "mMjGlK1W0Xo"
            },
            {
                "id": "",
                "name": "HIV Prevention Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": ""
            },
            {
                "id": "qFwm4RM45gi",
                "name": "HIV Risk Assessment and Messaging",
                "isDate": false,
                "isBoolean": true,
                "programStage": "PGFt6IwdZLM"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "STI Treatment (Referral)",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "STI Treatment (Referral)",
                "codes": [
                    "STI Treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "HIV Testing and Counselling (Referral)",
                "codes": [
                    "HIV Testing and counselling"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "HIV Testing and Counselling (Referral)",
                "codes": [
                    "HIV Testing and counselling"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Evaluation for ARVs/HAART (Referral)",
                "codes": [
                    "Evaluation for ARVs/HAART"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Evaluation for ARVs/HAART (Referral)",
                "codes": [
                    "Evaluation for ARVs/HAART"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post Abuse Case Mngt (Referral)",
                "codes": [
                    "Post abuse case management"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post Abuse Case Mngt (Referral)",
                "codes": [
                    "Post abuse case management"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ART Adherence (Referral)",
                "codes": [
                    "ART and Adherence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ART Adherence (Referral)",
                "codes": [
                    "ART and Adherence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PMTCT (Referral)",
                "codes": [
                    "PMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PMTCT (Referral)",
                "codes": [
                    "PMTCT"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Cervical Cancer Screening (Referral)",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Cervical Cancer Screening (Referral)",
                "codes": [
                    "Cervical Cancer Screening"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ECD (Referral)",
                "codes": [
                    "ECD"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ECD (Referral)",
                "codes": [
                    "ECD"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Family Planning/SRH (Referral)",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Family Planning/SRH (Referral)",
                "codes": [
                    "FamilyPlanningSRH"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Condoms Provision (Referral)",
                "codes": [
                    "Condom supply"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Condoms Provision (Referral)",
                "codes": [
                    "Condom supply"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "TB Treatment (Referral)",
                "codes": [
                    "TB treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "TB Treatment (Referral)",
                "codes": [
                    "TB treatment"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Nutrition (Referral)",
                "codes": [
                    "Nutrition"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Nutrition (Referral)",
                "codes": [
                    "Nutrition"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "ANC (Referral)",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "ANC (Referral)",
                "codes": [
                    "ANC"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "PrEP/PEP (Referral)",
                "codes": [
                    "PrEP/PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "PrEP/PEP (Referral)",
                "codes": [
                    "PrEP/PEP"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "EID Testing (Referral)",
                "codes": [
                    "EID Testing"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "EID Testing (Referral)",
                "codes": [
                    "EID Testing"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "TB/ART Treatment Support (Referral)",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "TB/ART Treatment Support (Referral)",
                "codes": [
                    "Treatment Support (TB/ARV)"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Gender Based Violence (Referral)",
                "codes": [
                    "Gender Based Violence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Gender Based Violence (Referral)",
                "codes": [
                    "Gender Based Violence"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Domestic Violence Support (Referral)",
                "codes": [
                    "Domestic Violence Support group"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Domestic Violence Support (Referral)",
                "codes": [
                    "Domestic Violence Support group"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Post Abuse Care Services (Referral)",
                "codes": [
                    "Referral to post abuse care services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Post Abuse Care Services (Referral)",
                "codes": [
                    "Referral to post abuse care services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Violence Against Children (Referral)",
                "codes": [
                    "Violence Against Children"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Violence Against Children (Referral)",
                "codes": [
                    "Violence Against Children"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Youth friendly services (Referral)",
                "codes": [
                    "Youth friendly services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Youth friendly services (Referral)",
                "codes": [
                    "Youth friendly services"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Income generating activities (Referral)",
                "codes": [
                    "Income generating activity"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Income generating activities (Referral)",
                "codes": [
                    "Income generating activity"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Orphan Care (Referral)",
                "codes": [
                    "Orphan Care & Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Orphan Care (Referral)",
                "codes": [
                    "Orphan Care & Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Psycho-social (Referral)",
                "codes": [
                    "Psycho-social Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Psycho-social (Referral)",
                "codes": [
                    "Psycho-social Support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "CAG (Referral)",
                "codes": [
                    "CAG"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "CAG (Referral)",
                "codes": [
                    "CAG"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Home based care visits (Referral)",
                "codes": [
                    "Home based care visits"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Home based care visits (Referral)",
                "codes": [
                    "Home based care visits"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Educational & Vocational Support (Referral)",
                "codes": [
                    "Educational and vocational support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Educational & Vocational Support (Referral)",
                "codes": [
                    "Educational and vocational support"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "OrC9Bh2bcFz",
                "name": "Social Grants (Referral)",
                "codes": [
                    "Social grants"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "rsh5Kvx6qAU",
                "name": "Social Grants (Referral)",
                "codes": [
                    "Social grants"
                ],
                "isDate": false,
                "isBoolean": true,
                "programStage": "MkyTrLeBG8I"
            },
            {
                "id": "klLkGxy328c",
                "name": "Implementing Mechanism Name",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            },
            {
                "id": "DdnlE8kmIkT",
                "name": "Service Provider",
                "isDate": false,
                "isBoolean": false,
                "isAttribute": true,
                "programStage": ""
            }
        ],
        "disablePeriodSelection": true,
        "disableOrgUnitSelection": true,
        "allowedImplementingPartners": [
            "H2CE3Iwdf7v"
        ],
        "includeEnrollmentWithoutService": true
    }
]

export const MANDATORY_COLUMNS: string[] = [
    'First Name',
    'Surname',
    'Date of Birth',
    'Sex',
    'Age',
];

export enum CUSTOM_DX_CONFIG_IDS {
    DATE_OF_LAST_SERVICE = 'date_of_last_service_received',
    BENEFICIARY_AGE = 'beneficiary_age',
    BENEFICIARY_AGE_RANGE = 'beneficiary_age_range',
    BENEFICIARY_AGE_RANGES = 'beneficiary_age_ranges',
    IS_SERVICES_PROVIDED = 'is_service_provided',
    IS_AGYW_BENEFICIARY = 'isAgywBeneficiary',
    DISTRICT_OF_SERVICE = 'district_of_service',
    FACILITY_NAME = 'facility_name',
    LAST_SERVICE_COMMUNITY_COUNCIL = 'last_service_community_council',
    DISTRICT_OF_RESIDENCE = 'district_of_residence',
    FOLLOW_UP_VISIT = 'following_up_visit',
    COMMUNITY_COUNCIL_OF_RESIDENCE = 'community_council_of_residence',
    IS_ELIGIBLE_FOR_PREP = 'is_eligible_for_prep',
    ASSESSMENT_DATE = 'assessmment_date',
    IS_ASSESSMENT_CONDUCTED = 'is_assemmenet_conducted',
    PREP_BENEFICIARY_STATUS = 'prep_beneficairy_status',
    ENROLLMENT_DATE = "enrollmentdate",
    TOTAL_SERVICES = "total-services"
}

export enum DEFAULT_ANALYTICS_KEYS {
    EVENT_DATE = 'eventdate',
    ENROLLMENT_DATE = 'enrollmentdate',
    TEI = 'tei',
    OU_NAME = 'ouname',
    OU = 'ou',
    PSI = 'psi',
}
