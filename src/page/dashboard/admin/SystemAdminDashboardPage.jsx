import React from "react";
import { HiOutlineUsers, HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaUserMd, FaHospital } from "react-icons/fa";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import OverviewSection from "../../../layouts/dashboard/admin/OverviewSection";
import DonorManagement from "../../../layouts/dashboard/admin/DonorManagement";
import StaffManagement from "../../../layouts/dashboard/admin/StaffManagement";
import HospitalsSection from "../../../layouts/dashboard/admin/HospitalsSection";

const SystemAdminDashboardPage = () => {
  // Sidebar configuration
  const sidebarItems = [
    {
      name: "overview",
      displayName: "Overview",
      icon: HiOutlineUsers,
    },
    {
      name: "donors",
      displayName: "Donor Management",
      icon: HiOutlineUsers,
    },
    {
      name: "staff",
      displayName: "Staff Management",
      icon: FaUserMd,
    },
    {
      name: "hospitals",
      displayName: "Hospitals",
      icon: FaHospital,
    },
  ];

  const components = {
    overview: OverviewSection,
    donors: DonorManagement,
    staff: StaffManagement,
    hospitals: HospitalsSection,
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} components={components} />
  );
};

export default SystemAdminDashboardPage;
