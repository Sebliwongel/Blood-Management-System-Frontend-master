import React from "react";

export const PersonalInfoStep = ({ formData, setFormData, error }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700">Title</label>
        <select
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        >
          <option value="">Select Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">middleName</label>
        <input
          type="text"
          value={formData.middleName}
          onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">lastName</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">gender</label>
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">birthDate</label>
        <input
          type="date"
          value={formData.birthDate}
          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">Occupation</label>
        <input
          type="text"
          value={formData.occupation}
          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export const ContactInfoStep = ({ formData, setFormData, error }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={formData.PhoneNumber}
          onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export const AccountInfoStep = ({ formData, setFormData, error }) => {
  return (
    <div className="space-y-4">
       <div className="flex flex-col">
        <label className="text-gray-700">Username</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
        <p className="text-sm text-gray-500 mt-1">Username is required and should be at least 3 characters long</p>
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
          minLength={6}
        />
        <p className="text-sm text-gray-500 mt-1">Password must be at least 6 characters long</p>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">Confirm Password</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
          minLength={6}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export const LocationStep = ({ formData, setFormData, error }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700">City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">Sub City</label>
        <input
          type="text"
          value={formData.subCity}
          onChange={(e) => setFormData({ ...formData, subCity: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">Woreda</label>
        <input
          type="text"
          value={formData.woreda}
          onChange={(e) => setFormData({ ...formData, woreda: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700">Kebele</label>
        <input
          type="text"
          value={formData.kebele}
          onChange={(e) => setFormData({ ...formData, kebele: e.target.value })}
          className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
