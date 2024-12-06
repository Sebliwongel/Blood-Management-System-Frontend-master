import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaBoxes, FaClipboardList, FaShoppingCart } from "react-icons/fa";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import OverviewSection from "../../../layouts/dashboard/store/OverviewSection";
import InventorySection from "../../../layouts/dashboard/store/InventorySection";
import ReportsSection from "../../../layouts/dashboard/store/ReportsSection";
import OrdersSection from "../../../layouts/dashboard/store/OrdersSection";

const StoreManagerDashboardPage = () => {
  const sidebarItems = [
    {
      name: "overview",
      displayName: "Overview",
      icon: HiOutlineViewGrid,
    },
    {
      name: "inventory",
      displayName: "Check Inventory",
      icon: FaBoxes,
    },
    {
      name: "reports",
      displayName: "View Reports",
      icon: FaClipboardList,
    },
    {
      name: "orders",
      displayName: "View Orders",
      icon: FaShoppingCart,
    },
  ];

  const components = {
    overview: OverviewSection,
    inventory: InventorySection,
    reports: ReportsSection,
    orders: OrdersSection,
  };

  return <DashboardLayout sidebarItems={sidebarItems} components={components} />;
};

export default StoreManagerDashboardPage;
