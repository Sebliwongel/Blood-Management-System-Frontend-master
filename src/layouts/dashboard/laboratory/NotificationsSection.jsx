import React, { useState } from 'react';

const NotificationsSection = () => {
  // Sample donor list with initial data (bloodType is empty initially)
  const [donors, setDonors] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      bloodBarcode: "B123456",
      collectionDate: "2024-11-18",
      bloodType: "",
    },
    {
      id: 2,
      name: "Bob Smith",
      bloodBarcode: "B123457",
      collectionDate: "2024-11-19",
      bloodType: "",
    },
    {
      id: 3,
      name: "Charlie Brown",
      bloodBarcode: "B123458",
      collectionDate: "2024-11-20",
      bloodType: "",
    },
  ]);

  const [editableDonorId, setEditableDonorId] = useState(null);
  const [updatedBloodType, setUpdatedBloodType] = useState("");

  const handleInputChange = (e) => {
    setUpdatedBloodType(e.target.value);
  };

  const handleEditBloodType = (donorId, currentBloodType) => {
    setEditableDonorId(donorId);
    setUpdatedBloodType(currentBloodType || "");
  };

  const handleSaveBloodType = (donorId) => {
    const updatedDonors = donors.map((donor) =>
      donor.id === donorId ? { ...donor, bloodType: updatedBloodType } : donor
    );
    setDonors(updatedDonors);
    setEditableDonorId(null);
    setUpdatedBloodType("");
    alert("Blood type updated successfully!");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-red-500 mb-6">
        Notification Reports
      </h2>
      <div className="space-y-4">
        {donors.map((donor) => (
          <div
            key={donor.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div>
              <span className="text-lg font-semibold">{`Donor: ${donor.name}`}</span>
              <div className="text-sm text-gray-500">{`Blood Barcode: ${donor.bloodBarcode}`}</div>
              <div className="text-sm text-gray-500">{`Collection Date: ${donor.collectionDate}`}</div>
            </div>
            <div className="text-sm text-gray-500">
              <span>{`Blood Type: ${donor.bloodType || "N/A"}`}</span>
              {editableDonorId === donor.id ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={updatedBloodType}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter Blood Type"
                  />
                  <button
                    onClick={() => handleSaveBloodType(donor.id)}
                    className="bg-green-500 text-white py-1 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              ) : null}
            </div>
            <button
              onClick={() => handleEditBloodType(donor.id, donor.bloodType)}
              className="bg-blue-500 text-white py-1 px-4 rounded"
            >
              {editableDonorId === donor.id ? "Cancel" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;
