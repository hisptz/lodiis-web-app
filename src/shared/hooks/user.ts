import { useDataQuery } from "@dhis2/app-runtime";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { CurrentUserState } from "../state/currentUser";
import { CurrentUser } from "../models/user";

const query = {
	response: {
		resource: "me",
		params: {
			fields: ["id", "attributeValues[value,attribute[id,name]]"],
		},
	},
};

const userQuery = {
	response: {
		resource: "users",
		params: ({userId}:any)=>({
			filter: [`id:eq:${userId}`],
			fields: ["id", "attributeValues[value,attribute[id,name]]"],
		}),
	},
};

export function useCurrentUser() {
	const { data, loading, error } = useDataQuery(query);
	const [currentUser, setCurrentUser] = useRecoilState(CurrentUserState);
	useEffect(() => {
		if (data) {
			const user = new CurrentUser(data.response as any);
			setCurrentUser(user);
		}
	}, [data]);
	return {
		currentUser,
		loading,
		error,
	};
}

export function useCurrentUserInfo(userId: string) {
	const [currentUser, setCurrentUser] = useRecoilState(CurrentUserState);
	const { data, loading, error, refetch } = useDataQuery(userQuery, {
		variables: {
			userId,
		},
	});
	useEffect(() => {
		if (userId !=='') {
			refetch({
				userId,
			});
		}
		return () => {};
	}, [userId]);
	
	useEffect(() => {
		if(userId === '') return;
		
		const response: any = data?.response ?? {}
		const users = response.users ?? [];
		if(users.length > 0){
			const user = new CurrentUser( users[0]);
			setCurrentUser(user);	
		}
	}, [data]);

	return {
		currentUser,
		loading,
		error
	};

}
