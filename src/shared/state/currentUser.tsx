import { atom, useRecoilState } from "recoil";
import React from "react";
import FullPageLoader from "../components/Loaders";
import { ErrorThrower } from "../components/ErrorThrower";
import { CurrentUser } from "../models/user";
import { useCurrentUser,useCurrentUserInfo } from "../hooks/user";

export const CurrentUserState = atom<CurrentUser | undefined | null>({
	key: "kb-current-user-state",
	default: undefined,
});

export function CurrentUserSync({ children }: { children: React.ReactNode }) {
	const {  loading, error } = useCurrentUser();
	if (loading) {
		return <FullPageLoader />;
	}

	if (error) {
		return <ErrorThrower error={error} />;
	}

	return <CurrentUserInfoSync children={children}></CurrentUserInfoSync>;
}


export function CurrentUserInfoSync({ children }: { children: React.ReactNode }) {
	const [currentUser] = useRecoilState(CurrentUserState);
	const {  loading, error } = useCurrentUserInfo(currentUser?.user.id ?? '');
	if (loading) {
		return <FullPageLoader />;
	}

	if (error) {
		return <ErrorThrower error={error} />;
	}

	return <>{children}</>;
}