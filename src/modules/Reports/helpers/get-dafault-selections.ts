import * as _ from "lodash";

export function getDefaultOrganisationUnitSelections(userOrganisationUnits) {
	return userOrganisationUnits && userOrganisationUnits.length > 0
		? _.uniqBy(userOrganisationUnits, "id")
		: [];
}
