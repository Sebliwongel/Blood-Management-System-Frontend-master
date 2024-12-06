import React, { useState } from "react";
import DashboardNavbar from "../../../components/common/DashboardNavbar";

function DashboardPage() {
  const [bloodInventory] = useState([
    { type: "A+", units: 50, status: "Available" },
    { type: "A-", units: 30, status: "Low" },
    { type: "B+", units: 45, status: "Available" },
    { type: "B-", units: 20, status: "Critical" },
    { type: "O+", units: 60, status: "Available" },
    { type: "O-", units: 25, status: "Low" },
    { type: "AB+", units: 15, status: "Critical" },
    { type: "AB-", units: 10, status: "Critical" },
  ]);

  const [recentDonations] = useState([
    {
      id: 1,
      donor: "John Doe",
      bloodType: "A+",
      date: "2024-02-10",
      location: "Central Blood Bank",
    },
    {
      id: 2,
      donor: "Jane Smith",
      bloodType: "O-",
      date: "2024-02-09",
      location: "Mobile Collection Unit",
    },
  ]);

  const [recentRequests] = useState([
    {
      id: 1,
      hospital: "City General Hospital",
      bloodType: "B+",
      units: 3,
      status: "Pending",
      date: "2024-02-10",
    },
    {
      id: 2,
      hospital: "St. Mary's Hospital",
      bloodType: "O-",
      units: 2,
      status: "Approved",
      date: "2024-02-09",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "available":
        return "bg-green-100 text-green-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      case "critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRequestStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-8">Blood Bank Dashboard</h1>

        {/* Blood Inventory Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Blood Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {bloodInventory.map((item) => (
              <div
                key={item.type}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{item.type}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{item.units} units</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{donation.donor}</h3>
                      <p className="text-sm text-gray-600">
                        Blood Type: {donation.bloodType}
                      </p>
                      <p className="text-sm text-gray-600">
                        Location: {donation.location}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {donation.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Requests */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{request.hospital}</h3>
                      <p className="text-sm text-gray-600">
                        Blood Type: {request.bloodType} ({request.units} units)
                      </p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 ${getRequestStatusColor(
                          request.status
                        )}`}
                      >
                        {request.status}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {request.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
