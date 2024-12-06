import React, { useState } from "react";

const DonorManagement = () => {
  const [donorList, setDonorList] = useState([
    {
      id: 1,
      name: "Jane Smith",
      username: "janesmith",
      email: "janesmith@example.com",
      active: true,
    },
    {
      id: 2,
      name: "John Doe",
      username: "johndoe",
      email: "johndoe@example.com",
      active: true,
    },
    {
      id: 3,
      name: "Alice Johnson",
      username: "alicej",
      email: "alice.j@example.com",
      active: false,
    },
  ]);

  const toggleDonorActiveStatus = (id) => {
    setDonorList((prevList) =>
      prevList.map((donor) =>
        donor.id === id ? { ...donor, active: !donor.active } : donor
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Donor Account Management</h2>
      </div>

      {/* Donor List Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donorList.map((donor) => (
                <tr key={donor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{donor.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donor.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donor.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        donor.active
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {donor.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleDonorActiveStatus(donor.id)}
                      className={`${
                        donor.active
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-green-100 text-green-600 hover:bg-green-200"
                      } px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {donor.active ? "Deactivate" : "Activate"}
                    </button>
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

export default DonorManagement;
