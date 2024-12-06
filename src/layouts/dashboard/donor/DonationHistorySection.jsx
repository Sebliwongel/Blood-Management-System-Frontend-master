import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";

const DonationHistorySection = () => {
  const [donations] = useState([
    {
      id: 1,
      date: "2024-01-15",
      location: "Black Lion Hospital",
      bloodType: "A+",
      units: 1,
      status: "Completed",
      certificate: "certificate_1.pdf",
    },
    {
      id: 2,
      date: "2023-12-10",
      location: "St. Paul's Hospital",
      bloodType: "A+",
      units: 1,
      status: "Completed",
      certificate: "certificate_2.pdf",
    },
    {
      id: 3,
      date: "2023-10-05",
      location: "Red Cross Blood Center",
      bloodType: "A+",
      units: 1,
      status: "Completed",
      certificate: "certificate_3.pdf",
    },
  ]);

  const [filters] = useState({
    dateRange: "all",
    location: "all",
  });

  const downloadCertificate = (certificateFile) => {
    // Handle certificate download logic here
    console.log("Downloading certificate:", certificateFile);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Donation History</h2>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Donations</h3>
          <p className="text-3xl font-semibold">{donations.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Units</h3>
          <p className="text-3xl font-semibold">
            {donations.reduce((total, donation) => total + donation.units, 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Last Donation</h3>
          <p className="text-3xl font-semibold">
            {donations[0]?.date || "Never"}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Date Range</label>
            <select
              value={filters.dateRange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Time</option>
              <option value="year">Past Year</option>
              <option value="6months">Past 6 Months</option>
              <option value="3months">Past 3 Months</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Location</label>
            <select
              value={filters.location}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Locations</option>
              <option value="red_cross">Red Cross Blood Center</option>
              <option value="st_pauls">St. Paul's Hospital</option>
              <option value="black_lion">Black Lion Hospital</option>
            </select>
          </div>
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Blood Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Units
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Certificate
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.bloodType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.units}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {donation.status}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => downloadCertificate(donation.certificate)}
                      className="flex items-center space-x-1 text-red-500 hover:text-red-700"
                    >
                      <FaDownload />
                      <span>Download</span>
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationHistorySection;
