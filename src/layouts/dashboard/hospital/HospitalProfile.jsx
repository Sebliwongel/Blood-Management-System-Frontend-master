import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { fetchHospitals, updateHospital } from "./../../../services/apiservice"; // Import API functions

const HospitalProfile = () => {
  const [hospitalInfo, setHospitalInfo] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Fetch hospital data on component mount
  useEffect(() => {
    const getHospitalData = async () => {
      try {
        const data = await fetchHospitals(); // Fetch data from API
        setHospitalInfo(data[0]); // Assuming the API returns an array of hospitals, we use the first one
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError("Error fetching hospital data."); // Set error state if API call fails
        setLoading(false); // Set loading to false on error
      }
    };

    getHospitalData();
  }, []);

  // Handle updating the hospital information
  const handleUpdateHospital = async (updatedData) => {
    try {
      await updateHospital(hospitalInfo.id, updatedData); // Update hospital data using the API
      setHospitalInfo((prevData) => ({
        ...prevData,
        ...updatedData, // Merge the updated data into the existing state
      }));
      alert("Hospital information updated successfully!");
    } catch (err) {
      setError("Error updating hospital data.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error message if any error occurs
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Hospital Profile
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Profile Header */}
        <div className="flex items-center mb-6 pb-6 border-b">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <FaUserCircle className="w-16 h-16 text-red-500" />
          </div>
          <div className="ml-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              {hospitalInfo.name}
            </h3>
            <p className="text-gray-600">
              License: {hospitalInfo.licenseNumber}
            </p>
            <p className="text-gray-600">
              Member since {hospitalInfo.registrationDate}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            Contact Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaEnvelope className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-gray-800">{hospitalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-gray-800">{hospitalInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-gray-800">{hospitalInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            Request Statistics
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Total Requests</p>
              <p className="text-2xl font-semibold text-gray-800">
                {hospitalInfo.totalRequests}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Accepted Requests</p>
              <p className="text-2xl font-semibold text-green-600">
                {hospitalInfo.acceptedRequests}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Pending Requests</p>
              <p className="text-2xl font-semibold text-yellow-600">
                {hospitalInfo.pendingRequests}
              </p>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-6">
          <button
            onClick={() =>
              handleUpdateHospital({
                email: "newemail@hospital.com", // Example update
                phone: "+251-911-987654", // Example update
              })
            }
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Update Hospital Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalProfile;
