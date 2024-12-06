import React, { useState } from "react";

const ReportsSection = () => {
  const [reports] = useState([
    {
      donorName: "John Doe",
      collectionDate: "2024-11-15",
      barcode: "12345",
      bloodType: "A+",
      status: "Processed",
    },
    {
      donorName: "Jane Smith",
      collectionDate: "2024-11-16",
      barcode: "12346",
      bloodType: "B+",
      status: "Testing",
    },
    {
      donorName: "Mark Lee",
      collectionDate: "2024-11-17",
      barcode: "12347",
      bloodType: "AB+",
      status: "Available",
    },
    {
      donorName: "Emily White",
      collectionDate: "2024-11-18",
      barcode: "12348",
      bloodType: "O+",
      status: "Available",
    },
    {
      donorName: "Chris Brown",
      collectionDate: "2024-11-19",
      barcode: "12349",
      bloodType: "A-",
      status: "Testing",
    },
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Blood Collection Reports</h2>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Donor Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Collection Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Barcode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {report.donorName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {report.collectionDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.barcode}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {report.bloodType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        report.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : report.status === "Testing"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;
