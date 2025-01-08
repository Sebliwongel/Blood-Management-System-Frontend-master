import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { fetchDonors, updateDonor } from "./../../../services/apiservice"; // Adjust the import path

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    title: "",
    birthDate: "",
    gender: "",
    occupation: "",
    city: "",
    subCity: "",
    woreda: "",
    kebele: "",
    email: "",
    phoneNumber: "",
    username: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);
  const donorId = 1; // You can dynamically set this depending on the donor you are editing

  useEffect(() => {
    // Fetch the donor data from the API when the component mounts
    const fetchProfileData = async () => {
      try {
        const donors = await fetchDonors();
        // Assuming you want to set the first donor's data as the profile
        if (donors.length > 0) {
          setProfile(donors[0]); // Adjust this based on how the API response structure looks
          setEditedProfile(donors[0]); // Set the edited profile to the fetched data
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleSave = async () => {
    try {
      // Call the updateDonor function
      const updatedData = await updateDonor(donorId, editedProfile);
      setProfile(updatedData); // Update the profile state with the updated data from the API
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
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
              <label className="block text-gray-700 mb-2">Middle Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.middleName}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      middleName: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <FaUser className="text-gray-400" />
                  <p>{profile.middleName}</p>
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
              <label className="block text-gray-700 mb-2">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.phoneNumber}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-400" />
                  <p>{profile.phoneNumber}</p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Username</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.username}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      username: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <p>{profile.username}</p>
              )}
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Address Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">City</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.city}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      city: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <p>{profile.city}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">SubCity</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.subCity}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      subCity: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <p>{profile.subCity}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Woreda</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.woreda}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      woreda: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <p>{profile.woreda}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Kebele</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.kebele}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      kebele: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              ) : (
                <p>{profile.kebele}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
