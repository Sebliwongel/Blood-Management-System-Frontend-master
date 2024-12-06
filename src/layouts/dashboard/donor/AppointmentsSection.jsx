import React, { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa6";
import AppointmentScheduleForm from "../../../components/forms/donor/AppointmentScheduleForm";

const AppointmentsSection = () => {
  const [appointments] = useState([
    {
      id: 1,
      date: "2024-02-20",
      time: "10:00 AM",
      location: "Red Cross Blood Center",
      status: "Confirmed",
      type: "Blood Donation",
    },
    {
      id: 2,
      date: "2024-03-15",
      time: "2:30 PM",
      location: "St. Paul's Hospital",
      status: "Pending",
      type: "Blood Donation",
    },
  ]);

  const [showScheduleForm, setShowScheduleForm] = useState(false);

  const handleSchedule = (formData) => {
    // Handle appointment scheduling logic here
    console.log("New appointment:", formData);
    setShowScheduleForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">My Appointments</h2>
        <button
          onClick={() => setShowScheduleForm(true)}
          className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaCalendarPlus />
          <span>Schedule New</span>
        </button>
      </div>

      {/* Schedule Form */}
      {showScheduleForm && (
        <AppointmentScheduleForm
          onSubmit={handleSchedule}
          onCancel={() => setShowScheduleForm(false)}
        />
      )}

      {/* Appointments List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        appointment.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-red-500 hover:text-red-700">
                      Cancel
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

export default AppointmentsSection;
