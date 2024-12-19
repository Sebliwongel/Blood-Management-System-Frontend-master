import React, { useState, useEffect } from "react";
import { fetchDonors, updateDonor, deleteDonor } from "./../../../services/apiservice"; // Make sure these functions are defined in apiService

const DonorManagement = () => {
  const [donorList, setDonorList] = useState([]);
  const [loading, setLoading] = useState(true); // for loading state
  const [error, setError] = useState(null); // for error handling

  // Fetch donors on component mount
  useEffect(() => {
    const getDonor = async () => {
      try {
        const donor= await fetchDonors(); // Call API to get donor list
        setDonorList(donor);
        setLoading(false);
      } catch (err) {
        setError("Failed to load donors.");
        setLoading(false);
      }
    };

    getDonor();
  }, []);

  // Toggle the donor active status
  const toggleDonorActiveStatus = async (id, currentStatus) => {
    try {
      const updatedDonor = await updateDonor(id, { active: !currentStatus });
      setDonorList((prevList) =>
        prevList.map((donor) =>
          donor.id === id ? { ...donor, active: updatedDonor.active } : donor
        )
      );
    } catch (err) {
      console.error("Error updating donor status", err);
    }
  };

  // Handle donor deletion
  const handleDeleteDonor = async (id) => {
    try {
      await deleteDonor(id); // Call API to delete donor
      setDonorList((prevList) => prevList.filter((donor) => donor.id !== id));
    } catch (err) {
      console.error("Error deleting donor", err);
    }
  };

  if (loading) {
    return <div>Loading donors...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
                        donor.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {donor.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleDonorActiveStatus(donor.id, donor.active)}
                      className={`${
                        donor.active ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-green-100 text-green-600 hover:bg-green-200"
                      } px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {donor.active ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDeleteDonor(donor.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium ml-2"
                    >
                      Delete
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
