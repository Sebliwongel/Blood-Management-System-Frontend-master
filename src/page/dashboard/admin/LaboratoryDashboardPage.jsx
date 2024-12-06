import React from "react";
import { FaBell, FaClipboardList } from "react-icons/fa";
import NotificationsSection from "../../../layouts/dashboard/laboratory/NotificationsSection";
import ReportSection from "../../../layouts/dashboard/laboratory/ReportSection";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";

function LaboratoryDashboardPage() {
  const sidebarItems = [
    {
      name: "notifications",
      displayName: "Notifications",
      icon: FaBell,
    },
    {
      name: "reports",
      displayName: "Generate Report",
      icon: FaClipboardList,
    },
  ];

  const components = {
    notifications: NotificationsSection,
    reports: ReportSection,
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} components={components} />
  );
}

export default LaboratoryDashboardPage;
