import React from "react";
import classes from "./NavBar.module.css";
import { Tab, TabBar } from "@dhis2/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../../../../constants/nav";

export default function NavBar(): React.ReactElement {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<div className={classes.container}>
			<TabBar>
				{NAV_ITEMS.map(({ label, path, icon }) => {
					const Icon = icon;
					return (
						<Tab
							dataTest={`${label}-tab`}
							onClick={() => navigate(path)}
							key={`${path}-nav-tab`}
							selected={Boolean(location.pathname.match(path))}
							icon={Icon !== undefined ? <Icon /> : null}
						>
							{label}
						</Tab>
					);
				})}
			</TabBar>
		</div>
	);
}
