import React from "react";
import { HiOutlineUsers, HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaUserMd, FaHospital } from "react-icons/fa";

const OverviewSection = () => {
  // Mock data for the overview section
  const stats = {
    totalDonors: 1234,
    activeStaff: 56,
    organizations: 12,
    hospitals: 34,
  };
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">System Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Donors</p>
              <p className="text-3xl font-semibold">{stats.totalDonors}</p>
            </div>
            <HiOutlineUsers className="text-red-500 text-4xl" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Staff</p>
              <p className="text-3xl font-semibold">{stats.activeStaff}</p>
            </div>
            <FaUserMd className="text-blue-500 text-4xl" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Organizations</p>
              <p className="text-3xl font-semibold">{stats.organizations}</p>
            </div>
            <HiOutlineOfficeBuilding className="text-green-500 text-4xl" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Hospitals</p>
              <p className="text-3xl font-semibold">{stats.hospitals}</p>
            </div>
            <FaHospital className="text-purple-500 text-4xl" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <div>
                <p className="font-medium">New Donor Registration</p>
                <p className="text-sm text-gray-500">
                  John Doe registered as a donor
                </p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <div>
                <p className="font-medium">Staff Account Created</p>
                <p className="text-sm text-gray-500">
                  New lab technician account created
                </p>
              </div>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <div>
                <p className="font-medium">Organization Added</p>
                <p className="text-sm text-gray-500">
                  Red Cross branch added to system
                </p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
