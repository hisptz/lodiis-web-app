# KB WEB APPLICATION

This is a DHIS2 custom application that facilitates tracking of beneficiaries along with service provision within
different
interventions across all implementing partners. It is an essential part of the Lesotho OVC-DREAMS Integrated Information
System (LODIIS) since it is the primary source of data within the system where it offers offline data capture from
different implementing partners, with support for data synchronization.

The mobile app is divided into multiple modules based on the interventions. These interventions includes:

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

The access to these interventions is basing on user implementing partner, since the KB Mobile application allows access
to multiple modules.

# Getting Started

This project was bootstrapped with [DHIS2 Application Platform](https://github.com/dhis2/app-platform).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner and runs all available tests found in `/src`.<br />

See the section about [running tests](https://platform.dhis2.nu/#/scripts/test) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
A deployable `.zip` file can be found in `build/bundle`!

See the section about [building](https://platform.dhis2.nu/#/scripts/build) for more information.

### `yarn deploy`

Deploys the built app in the `build` folder to a running DHIS2 instance.<br />
This command will prompt you to enter a server URL as well as the username and password of a DHIS2 user with the App Management authority.<br/>
You must run `yarn build` before running `yarn deploy`.<br />

See the section about [deploying](https://platform.dhis2.nu/#/scripts/deploy) for more information.

## Learn More

You can learn more about the platform in the [DHIS2 Application Platform Documentation](https://platform.dhis2.nu/).

You can learn more about the runtime in the [DHIS2 Application Runtime Documentation](https://runtime.dhis2.nu/).

To learn React, check out the [React documentation](https://reactjs.org/).
