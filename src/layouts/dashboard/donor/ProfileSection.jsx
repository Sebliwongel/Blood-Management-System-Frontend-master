import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaDroplet } from "react-icons/fa6";

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+251912345678",
    bloodType: "A+",
    medicalHistory: "No chronic conditions",
    address: "Addis Ababa, Ethiopia",
    emergencyContact: {
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "+251987654321",
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Profile</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Edit Profile
          </button>
        ) : (
          <div className="space-x-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.firstName}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      firstName: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <FaUser className="text-gray-400" />
                  <p>{profile.firstName}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.lastName}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      lastName: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <FaUser className="text-gray-400" />
                  <p>{profile.lastName}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) =>
                    setEditedProfile({ ...editedProfile, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-400" />
                  <p>{profile.email}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.phone}
                  onChange={(e) =>
                    setEditedProfile({ ...editedProfile, phone: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-400" />
                  <p>{profile.phone}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Medical Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Blood Type</label>
              {isEditing ? (
                <select
                  value={editedProfile.bloodType}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      bloodType: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              ) : (
                <div className="flex items-center space-x-2">
                  <FaDroplet className="text-red-500" />
                  <p>{profile.bloodType}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Medical History</label>
              {isEditing ? (
                <textarea
                  value={editedProfile.medicalHistory}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      medicalHistory: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows="3"
                />
              ) : (
                <p className="text-gray-600">{profile.medicalHistory}</p>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Emergency Contact</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.emergencyContact.name}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      emergencyContact: {
                        ...editedProfile.emergencyContact,
                        name: e.target.value,
                      },
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <p>{profile.emergencyContact.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Relationship</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.emergencyContact.relationship}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      emergencyContact: {
                        ...editedProfile.emergencyContact,
                        relationship: e.target.value,
                      },
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <p>{profile.emergencyContact.relationship}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.emergencyContact.phone}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      emergencyContact: {
                        ...editedProfile.emergencyContact,
                        phone: e.target.value,
                      },
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-400" />
                  <p>{profile.emergencyContact.phone}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Address</h3>
          <div>
            {isEditing ? (
              <textarea
                value={editedProfile.address}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, address: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="3"
              />
            ) : (
              <p className="text-gray-600">{profile.address}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
