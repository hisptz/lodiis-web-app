import React from "react";
import DataManagement from "../modules/DataManagement";
import i18n from '@dhis2/d2-i18n';
import Dashboard from "../modules/Dashboard";
import Reports from "../modules/Reports";
import {IconDashboardWindow24, IconEditItems24, IconTable24, IconVisualizationGauge24} from '@dhis2/ui'
import PerformanceMonitoring from "../modules/PerformanceMonitoring";

export interface NavItem {
    label?: string;
    path: string;
    icon?: React.JSXElementConstructor<any>;
    element: React.JSXElementConstructor<any>;
    subItems?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
    {
        element: DataManagement,
        label: i18n.t("Data Management"),
        path: "data-management",
        icon: IconEditItems24
    },
    {
        element: Dashboard,
        label: i18n.t("Dashboard"),
        path: "dashboard",
        icon: IconDashboardWindow24
    },
    {
        element: Reports,
        label: i18n.t("Custom Reports"),
        path: "reports",
        icon: IconTable24
    },
    {
        element: PerformanceMonitoring,
        label: i18n.t("Performance Monitoring"),
        path: "performance-monitoring",
        icon: IconVisualizationGauge24
    },

]
