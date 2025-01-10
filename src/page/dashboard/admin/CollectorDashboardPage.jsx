// import React from "react";
// import { HiOutlineViewGrid } from "react-icons/hi";
// import { FaCalendarAlt, FaChartBar } from "react-icons/fa";
// import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
// import OverviewSection from "../../../layouts/dashboard/collector/OverviewSection";
// import ScheduleSection from "../../../layouts/dashboard/collector/ScheduleSection";
// import ReportsSection from "../../../layouts/dashboard/collector/ReportsSection";

// function CollectorDashboardPage() {
//   const sidebarItems = [
//     {
//       name: "overview",
//       displayName: "Overview",
//       icon: HiOutlineViewGrid,
//     },
//     {
//       name: "schedule",
//       displayName: "Collection Schedule",
//       icon: FaCalendarAlt,
//     },
//     {
//       name: "reports",
//       displayName: "Reports",
//       icon: FaChartBar,
//     },
//   ];

//   const components = {
//     overview: OverviewSection,
//     schedule: ScheduleSection,
//     reports: ReportsSection,
//   };

//   return (
//     <DashboardLayout sidebarItems={sidebarItems} components={components} />
//     <div className="mt-6">
//     <button
//       onClick={() => navigate("/registration/individual")}
//       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//     >
//       <FaUserPlus className="inline-block mr-2" />
//       Register Donor
//     </button>
//   </div>
// </DashboardLayout>
//   );
// }

// export default CollectorDashboardPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaCalendarAlt, FaChartBar, FaUserPlus } from "react-icons/fa";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import OverviewSection from "../../../layouts/dashboard/collector/OverviewSection";
//import ScheduleSection from "../../../layouts/dashboard/collector/ScheduleSection";
import ReportsSection from "../../../layouts/dashboard/collector/ReportsSection";
import IndividualRegistrationPage from "../../registration/individual/IndividualRegistrationPage";
import BloodInformationForm from "../../../layouts/dashboard/collector/BloodInformationForm"; // Import BloodInformationForm
import BloodCollectionSection from "../../../layouts/dashboard/collector/BloodCollectionSection"; 
import PreDonationScreeningSection from "../../../layouts/dashboard/collector/PreDonationScreeningSection"; 
function CollectorDashboardPage() {
  const navigate = useNavigate();

  const sidebarItems = [
    {
      name: "overview",
      displayName: "Overview",
      icon: HiOutlineViewGrid,
    },
    // {
    //   name: "schedule",
    //   displayName: "Collection Schedule",
    //   icon: FaCalendarAlt,
    // },
    {
      name: "reports",
      displayName: "Reports",
      icon: FaChartBar,
    },
    {
      name: "registerdonor",
      displayName: "Register Donor",
      icon: FaUserPlus, // Updated the icon to match the register donor action
    },
    {
      name: "bloodinformation",  // New section for Blood Information
      displayName: "Blood Information",
      icon: FaChartBar,  // You can update this icon as needed
    },
    {
      name: "predonation",
      displayName: "Pre-Donation Screening",
      icon: FaChartBar, // Icon for pre-donation
    },
    {
      name: "bloodcollection",
      displayName: "Blood Collection",
      icon: FaUserPlus, // Icon for blood collection
    },
  ];

 

  const components = {
    overview: OverviewSection,
    //schedule: ScheduleSection,
    reports: ReportsSection,
    registerdonor: IndividualRegistrationPage,
    bloodinformation: BloodInformationForm,  // Add BloodInformationForm to components
    PreDonation:PreDonationScreeningSection,
    BloodCollection:BloodCollectionSection
  };

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      components={components}
    />
  );
}

export default CollectorDashboardPage;

