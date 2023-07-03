# KB WEB APPLICATION

### Contents:

- [Introduction](#introduction)
- [Pre-requisites](#pre-requisites)
- [Getting started](#getting-started)
- [Configurations](#configuration)
- [Running the application](#run-app)
- [Build and deployment](#build-deploy)

## Introduction <a name="intro"></a>

This is a custom DHIS2 web application that facilitates management, tracking and monitoring of beneficiaries along side service provision on different interventions across multiple implementing partners. The interventions being tracked by this systems are:

<li>DREAMS Module</li>
<li>OVC Module</li>
<li>Education module
  <ul>
    <li>LBSE module</li>
    <li>BURSARY module</li>
  </ul>
</li>
<li>PP_PREV Module</li>
<li>OGAC Module</li>

It is part of the Lesotho OVC-DREAMS Integrated Information
System (LODIIS) that allows data managers and administrators to to validate entered data from the [KB mobile applications](https://play.google.com/store/apps/details?id=org.hisptanzania.kb_mobile_app) and view reports and different dashboards showing progress and quality of service provided to beneficiaries of the programme.

## Pre-requisites <a name="pre-requisites"></a>

This application was developed with [React](https://reactjs.org/) using the [DHIS2 Application Platform](https://platform.dhis2.nu/). The source code was written using [Typescript](https://www.typescriptlang.org/) with [yarn]() as the package manager.

<strong>Note:</strong> The react version used with this app should be at most v16.

## Getting started <a name="getting-started"></a>

To get started with the project, you need to follow the instructions below

- Clone the project from github with the command

```
git clone https://github.com/hisptz/kb-web-app.git
```

- Navigate into the project folder and install the app dependencies:

```
cd kb-web-app && yarn
```

## Configurations <a name="configuration"></a>

There are two sorts of configurations that needs to be done for this project.

- Source code configurations
- DHIS2 instance configurations

### Source code configuration

These are in-app configurations that needs to be done to initiate connection with the DHIS2 instance during development. These configuration can be done by creating `.env` file in the root directory of the project with contents similar to the `.env.example` files or as elaborated bellow

```
REACT_APP_DHIS2_BASE_URL=<base-url-for-app>
DHIS2_PROXY=<url-to-proxy-dhis2>
```

- <strong>REACT_APP_DHIS2_BASE_URL</strong> is the url that will be provide a proxy to all the API requests to the DHIS2 instance. For example `http://localhost:8080`
- <strong>DHIS2_PROXY</strong> is the url where the actual DHIS2 is found so as to proxy it during development.

### DHIS2 instance configurations

These configurations are done in the DHIS2 instance to configure reports, dashboards and what data are visible and editable on the data management module. These configurations can be made through the Datastore management app in the DHIS2 instance. Inside the Datastore management, select the `kb-web-app` namespace and `settings` key. After this selections the configurations will be displayed as:

```
{
  "reports" : [...],
  "programs" : [...]
}
```

- Report configurations

  These are configuration of custom reports that can be extracted from the app. A single report configurations can be as shown below:

```
{
  "id": "<report-id>",
  "name": "<report-name>",
  "program": [<list-of-program-ids-associated-with-report>],
  "allowedImplementingPartners": [<list-of-implementing-partner-ids-to-access-report>],
  "includeEnrollmentWithoutService": <boolean-value-to-wether-show-enrollment-without-service>,
  "disablePeriodSelection": <boolean-value-to-wether-disable-period-selection>,
  "dxConfigs":[
    ...,
    {
      "id": "<dataElement-or-attribute-id>",
      "name": "<label-to-display-on-report>",
      "isDate":<boolean-to-wether-show-as-date>,
      "isBoolean":<boolean-to-wether-show-as-boolean>,
      "isAttribute":<boolean-wether-a-dx-is-attribute>,
      "programStage": "<program-stage-id-if-data-element>",
    },
    ...
  ]
}
```

- Program Configurations

This is the configuration of programs and what data from the programs can be accessible on the dashboard and data management modules. The configuration for a single program can be as show below:

```
{
  "id": "<program-id>",
  "name": "<program-name-as-label>",
  "search": {...},
  "columns": [...],
  "profile": [...],
  "dashboard": {
    "id": "<program-id>",
    "visualizations": [...]
  },
  "programStages": [...]
}
```

From the above configuration

<ol>
  <li>
    <strong>search: </strong> This specifies the list of attributes that can be searched from the data management list. Is is configured as below:

      {
        "fields": [
          ...,
          {
            "id": "<attribute-id>",
            "type": "<type-of-attribute>"
          },
          ...
        ]
      }

<strong>Note</strong>: type of attributes supported are: `trackedEntityAttribute` (for tracked entity attributes) and `attribute` (for metadata attributes like enrollment date) only.

  </li>
  <li>
    <strong>columns: </strong> This specifies the columns to be displayed on the data management table. The configuration of a single column can be as below:

      {
        "key": "<column-id>",
        "label": "column-label",
        "sortable": <boolean-wether-a-column-is-sortable>,
        "mandatory": <boolean-wether-a-column-must-be-shown>,
        "get": {
          "id": "<attribute-id>"
          "from": "<type-of-attribute>"
        }
      }

  </li>
<strong>Note</strong>:

  <ul>
    <li>
     On the <code>get</code> property, the <code>id</code> can be passed as a list of strings if it is to fetch data from a nested attribute; for examples for enrollment data, it can be specified as <code>{"id": ["enrollments", 0, ""enrollmentDate""], "from": "attribute"}</code>. This is only applicable if <code>from</code> is specified as <code>attribute</code>.
    </li>
    <li>
      <code>from</code> attribute in the <code>get</code> can be <code>trackedEntityAttribute</code> or <code>attribute</code>
    </li>
  </ul>

  </li>
  <li>
    <strong>profile: </strong> This specifies the fields to be displayed and enabled as editable on the beneficiary profile page. The configuration for a single profile attribute can be as below:

       {
        "key": "<attribute-id>",
        "label": "attribute-label",
        "editable": <boolean-wether-an-attribute-is-editable>,
        "identifiableObject": <boolean-to-show-dhis2-identifiable-objects>
        "get": {
          "id": "<attribute-id>"
          "from": "<type-of-attribute>"
        }
      }

  </li>
    <strong>Note: </strong> The <code>get</code> attribute will be as in the <code>column</code> attribute. The <strong>identifiableObjects</strong> attribute marks the attributes that are stored as DHIS2 ids hence requires refetching to display user friendly values.

  <li>
    <strong>programStages: </strong> This specified the details to be displayed on the services that are displayed on the beneficiary page. Below is the example of the configuration:

    {
      "id": "<program-stage-id>",
      "label": "<program-stage-label>",
      "view": [...],
      "columns":[...]
    }

  </li>

<strong>Note: </strong> The configuration of of `view` is the same as how `profile` was configured for a program, where as the `columns` as also configured in the same way as program's columns above. It should be well noted that for `programStage` configurations, all `get` attributes that should fetch data elements values needs to have `"from": "dataElement"` attribute.

  <li>
    <strong>dashboard: </strong> This configuration allows setting up of how and what data should be displayed on the dashboard module. Bellow is an example of dashboard configuration:

    {
      "id": "<program-id>",
      "visualizations": [
        ...,
        {
          "id": "<visualization-id>",
          "span": "<col-span-ratio>",
          "type": "<visualization-type>",
          "options": {
            "title": "<visualization-title>",
            "config": {
              "type": "visualization-sub-type",
              "colors": [<list-of-color-codes>],
              "layout": {
                "filter": [<list-of-filter-dimensions>],
                "columns": [<list-of-columns-dimensions>],
                "rows": [<list-of-rows-dimensions>],
                "series": [<list-of-series-dimensions>],
                "category": [<list-of-category-dimensions>]
              }
            },
            "legends": {
              "enabled": <boolean-wether-legends-are-enabled>,
              "collapsible": <boolean-wether-legends-are-collapsible>,
              "position": "<legends-position>"
            },
            "periodSelection": {
              "period": [<period-id-selections>]
            },
            "thematicLayers": [
              ...,
              {
                "id": "<thematic-layer-id>",
                "type": "<layer-type>",
                "enabled": <boolean-wether-thematic-layer-is-enabled>,
                "controls": {
                  "enabled": <boolean-wether-controls-enabled>,
                  "position": "<controlsPosition>"
                },
                "dataItem": {
                  "id": "<data-item-id>",
                  "type": "data-item-type",
                  "displayName": "<data-item-display-name>"
                }
              },
              ...
            ]
            "orgUnitSelection": {
              levels: [<org-unit-levels>],
              orgUnits: [<org-unit-ids>]
            }
          },
          "dimension": {
            "dx": [<list-of-dx-dimensions>],
            "pe": [<list-of-pe-dimensions>],
            "ou": [<list-of-ou-dimensions>]
          }
        },
        ...
      ]
    }

</li>

<strong>Note: </strong> These configurations may differ depending on the type of visualization.

</ol>

<strong>Note</strong> These configurations can be done after the application has been run.

## Running the application <a name="run-app"></a>

The application can be run by running the below command at the root directory of the project:

```
yarn start
```

This runs the application and it can be accessible through the browser using: [http://localhost:3000](http://localhost:3000) address. Since the application uses ReactJs, it will be refreshing on files changes saving.

## Build and deployment <a name="build-deploy"></a>

To build and deploy the application, the following commands can be used respectively:

```
yarn build
yarn deploy

```

Check on these links for more information on [building](https://platform.dhis2.nu/#/scripts/build) and [deploying](https://platform.dhis2.nu/#/scripts/deploy).

<strong>Note: </strong> You must run `yarn build` before running `yarn deploy`.<br />
