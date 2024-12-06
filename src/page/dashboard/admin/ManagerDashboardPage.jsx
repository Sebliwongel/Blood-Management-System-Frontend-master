import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaPerson } from "react-icons/fa6";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import OverviewSection from "../../../layouts/dashboard/manager/OverviewSection";
import TasksSection from "../../../layouts/dashboard/manager/TasksSection";
import ApprovedHospitalsSection from "../../../layouts/dashboard/manager/ApprovedHospitalsSection";
import StaffListSection from "../../../layouts/dashboard/manager/StaffListSection";

function ManagerDashboardPage() {
  const sidebarItems = [
    {
      name: "overview",
      displayName: "Overview",
      icon: HiOutlineViewGrid,
    },
    {
      name: "tasks",
      displayName: "Tasks",
      icon: FaClipboardList,
    },
    {
      name: "approved_hospitals",
      displayName: "Approved Hospitals",
      icon: FaPerson,
    },
    {
      name: "staff_list",
      displayName: "Staff List",
      icon: FaPerson,
    },
  ];

  const components = {
    overview: OverviewSection,
    tasks: TasksSection,
    approved_hospitals: ApprovedHospitalsSection,
    staff_list: StaffListSection,
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} components={components} />
  );
}

export default ManagerDashboardPage;
