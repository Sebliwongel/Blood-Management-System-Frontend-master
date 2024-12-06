import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaCalendarAlt, FaChartBar } from "react-icons/fa";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import OverviewSection from "../../../layouts/dashboard/collector/OverviewSection";
import ScheduleSection from "../../../layouts/dashboard/collector/ScheduleSection";
import ReportsSection from "../../../layouts/dashboard/collector/ReportsSection";

function CollectorDashboardPage() {
  const sidebarItems = [
    {
      name: "overview",
      displayName: "Overview",
      icon: HiOutlineViewGrid,
    },
    {
      name: "schedule",
      displayName: "Collection Schedule",
      icon: FaCalendarAlt,
    },
    {
      name: "reports",
      displayName: "Reports",
      icon: FaChartBar,
    },
  ];

  const components = {
    overview: OverviewSection,
    schedule: ScheduleSection,
    reports: ReportsSection,
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} components={components} />
  );
}

export default CollectorDashboardPage;
