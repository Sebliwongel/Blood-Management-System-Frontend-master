import React from "react";
import { FaCalendarAlt, FaHistory, FaHome, FaUserCog } from "react-icons/fa";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import AppointmentsSection from "../../../layouts/dashboard/donor/AppointmentsSection";
import DonationHistorySection from "../../../layouts/dashboard/donor/DonationHistorySection";
import OverviewSection from "../../../layouts/dashboard/donor/OverviewSection";
import ProfileSection from "../../../layouts/dashboard/donor/ProfileSection";

const DonorDashboardPage = () => {
  const sidebarItems = [
    {
      icon: FaHome,
      displayName: "Overview",
      name: "overview",
    },
    {
      icon: FaCalendarAlt,
      displayName: "Appointments",
      name: "appointments",
    },
    {
      icon: FaHistory,
      displayName: "Donation History",
      name: "history",
    },
    {
      icon: FaUserCog,
      displayName: "Profile",
      name: "profile",
    },
  ];

  const components = {
    overview: OverviewSection,
    appointments: AppointmentsSection,
    history: DonationHistorySection,
    profile: ProfileSection,
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} components={components} />
  );
};

export default DonorDashboardPage;
