import React from "react";

export const HospitalInfoStep = ({ formData, handleChange }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Hospital Name</label>
      <input
        type="text"
        name="hospitalName"
        value={formData.hospitalName}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Hospital Type</label>
      <select
        name="hospitalType"
        value={formData.hospitalType}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      >
        <option value="">Select Type</option>
        <option value="public">Public Hospital</option>
        <option value="private">Private Hospital</option>
        <option value="specialized">Specialized Hospital</option>
      </select>
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">License Number</label>
      <input
        type="text"
        name="licenseNumber"
        value={formData.licenseNumber}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>
  </div>
);

export const LocationStep = ({ formData, handleChange }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Sub City</label>
      <input
        type="text"
        name="subCity"
        value={formData.subCity}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Woreda</label>
      <input
        type="text"
        name="woreda"
        value={formData.woreda}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Kebele</label>
      <input
        type="text"
        name="kebele"
        value={formData.kebele}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>
  </div>
);

export const ContactStep = ({ formData, handleChange }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Website (Optional)</label>
      <input
        type="url"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  </div>
);

export const AccountStep = ({ formData, handleChange }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
      <p className="text-sm text-gray-500 mt-1">Password must be at least 6 characters long</p>
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>
  </div>
);
