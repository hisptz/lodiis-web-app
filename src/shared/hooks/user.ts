import {useDataQuery} from "@dhis2/app-runtime";
import {useRecoilState} from "recoil";
import {useEffect} from "react";
import { CurrentUserState } from "../state/currentUser";
import { CurrentUser } from "../models/user";

const query = {
    response: {
        resource: "me",
        params: {
            fields: [
                'id',
                'attributeValues[value,attribute[id,name]]',
            ]
        }
    },
}

export function useCurrentUser() {
    const {data, loading, error} = useDataQuery(query);
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
        error
    };
}
