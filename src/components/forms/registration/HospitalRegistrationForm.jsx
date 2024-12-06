import React, { useState, useEffect } from "react";

function HospitalRegistrationForm({ formData, errorMessage, onSubmit }) {
  const [localFormData, setLocalFormData] = useState(formData);  // Local state for form fields

  // Synchronize localFormData with the incoming formData prop
  useEffect(() => {
    setLocalFormData(formData);
  }, [formData]);

  // Handle changes for all fields including confirmPassword
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();  // Prevent default form submission to handle it manually
        onSubmit(localFormData);
      }}
      className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-96"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-1">Hospital Name</label>
        <input
          type="text"
          name="name"
          value={localFormData.name}
          onChange={handleInputChange}  // Use handleInputChange for all fields
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Hospital Address</label>
        <input
          type="text"
          name="address"
          value={localFormData.address}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={localFormData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={localFormData.username}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={localFormData.password}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <p className="text-sm text-gray-500 mt-1">Password must be at least 6 characters long</p>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={localFormData.confirmPassword}
          onChange={handleInputChange}  // This now uses the same handler
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
          minLength={6}
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="w-28 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition duration-200"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-28 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default HospitalRegistrationForm;