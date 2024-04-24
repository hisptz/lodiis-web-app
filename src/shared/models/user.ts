import { ATTRIBUTES } from "../../constants/metadata";

interface UserI {
	id: string;
	attributeValues: Array<{
		value: string;
		attribute: {
			id: string;
			name: string;
		};
	}>;
}

export class CurrentUser {
	user: UserI;
	constructor(user: UserI) {
		this.user = user;
	}
	get userImplmentingPartner(): string | undefined {
		return this.user.attributeValues.find(
			(attributeValue) =>
				attributeValue.attribute.id === ATTRIBUTES.IMPLEMENTING_PARTNER,
		)?.value;
	}
}
