import React from "react";
import {
  FaBell,
  FaChartBar,
  FaClipboardList,
  FaHospital,
  FaPaperPlane,
  FaWarehouse,
} from "react-icons/fa";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import BloodRequestSection from "../../../layouts/dashboard/hospital/BloodRequestForm";
import HospitalProfile from "../../../layouts/dashboard/hospital/HospitalProfile";
import NotificationsSection from "../../../layouts/dashboard/hospital/NotificationsSection";
import OverviewSection from "../../../layouts/dashboard/hospital/OverviewSection";
import ReportSection from "../../../layouts/dashboard/hospital/ReportSection";

function HospitalDashboardPage() {
  const sidebarItems = [
    {
      name: "overview",
      displayName: "Overview",
      icon: FaChartBar,
    },
    {
      name: "reports",
      displayName: "Reports",
      icon: FaClipboardList,
    },
    {
      name: "notifications",
      displayName: "Notifications",
      icon: FaBell,
    },
    {
      name: "sendrequest",
      displayName: "Send Request",
      icon: FaPaperPlane,
    },
    {
      name: "profile",
      displayName: "Profile",
      icon: FaHospital,
    },
  ];

  const components = {
    overview: OverviewSection,
    reports: ReportSection,
    notifications: NotificationsSection,
    sendrequest: BloodRequestSection,
    profile: HospitalProfile,
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} components={components} />
  );
}

export default HospitalDashboardPage;
