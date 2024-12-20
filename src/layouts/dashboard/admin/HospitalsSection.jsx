import React, { useState, useEffect } from "react";
import { fetchHospitals, updateHospital, deleteHospital } from "./../../../services/apiservice"; // Ensure these functions are defined in apiService

const HospitalManagement = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch hospitals on component mount
  useEffect(() => {
    const getHospitals = async () => {
      try {
        const hospitals = await fetchHospitals(); // Call API to get hospital list
        setHospitalList(hospitals);
        setLoading(false);
      } catch (err) {
        setError("Failed to load hospitals.");
        setLoading(false);
      }
    };

    getHospitals();
  }, []);

  // Toggle the hospital active status
  const toggleHospitalActiveStatus = async (id, currentStatus) => {
    try {
      const updatedHospital = await updateHospital(id, { active: !currentStatus });
      setHospitalList((prevList) =>
        prevList.map((hospital) =>
          hospital.id === id ? { ...hospital, active: updatedHospital.active } : hospital
        )
      );
    } catch (err) {
      console.error("Error updating hospital status", err);
    }
  };

  // Handle hospital deletion
  const handleDeleteHospital = async (id) => {
    try {
      await deleteHospital(id); // Call API to delete hospital
      setHospitalList((prevList) => prevList.filter((hospital) => hospital.id !== id));
    } catch (err) {
      console.error("Error deleting hospital", err);
    }
  };

  if (loading) {
    return <div>Loading hospitals...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Hospital Management</h2>
      </div>

      {/* Hospital List Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
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
              {hospitalList.map((hospital) => (
                <tr key={hospital.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{hospital.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        hospital.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {hospital.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleHospitalActiveStatus(hospital.id, hospital.active)}
                      className={`$${
                        hospital.active ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-green-100 text-green-600 hover:bg-green-200"
                      } px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {hospital.active ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDeleteHospital(hospital.id)}
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

export default HospitalManagement;
