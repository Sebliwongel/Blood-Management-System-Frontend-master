import React, { useState } from "react";
import { FaDroplet, FaCalendar, FaClock, FaAward } from "react-icons/fa6";

const OverviewSection = () => {
  const [donorStats] = useState({
    totalDonations: 5,
    nextAppointment: "2024-02-20",
    lastDonation: "2024-01-15",
    donorLevel: "Silver",
  });

  const [upcomingAppointment] = useState({
    date: "2024-02-20",
    time: "10:00 AM",
    location: "Red Cross Blood Center",
    status: "Confirmed",
  });

  const [recentDonations] = useState([
    {
      id: 1,
      date: "2024-01-15",
      location: "Black Lion Hospital",
      bloodType: "A+",
      units: 1,
    },
    {
      id: 2,
      date: "2023-12-10",
      location: "St. Paul's Hospital",
      bloodType: "A+",
      units: 1,
    },
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Donor Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <FaDroplet className="text-red-500 text-2xl" />
            <div>
              <h3 className="text-gray-500 text-sm">Total Donations</h3>
              <p className="text-2xl font-semibold">
                {donorStats.totalDonations}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <FaCalendar className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-gray-500 text-sm">Next Appointment</h3>
              <p className="text-2xl font-semibold">
                {donorStats.nextAppointment}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <FaClock className="text-green-500 text-2xl" />
            <div>
              <h3 className="text-gray-500 text-sm">Last Donation</h3>
              <p className="text-2xl font-semibold">
                {donorStats.lastDonation}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <FaAward className="text-yellow-500 text-2xl" />
            <div>
              <h3 className="text-gray-500 text-sm">Donor Level</h3>
              <p className="text-2xl font-semibold">{donorStats.donorLevel}</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Upcoming Appointment */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">Upcoming Appointment</h3>
        {upcomingAppointment ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Date</p>
              <p className="font-medium">{upcomingAppointment.date}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Time</p>
              <p className="font-medium">{upcomingAppointment.time}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-medium">{upcomingAppointment.location}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Status</p>
              <span className="px-2 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                {upcomingAppointment.status}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No upcoming appointments</p>
        )}
      </div>

      {/* Recent Donations */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">Recent Donations</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Blood Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Units
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentDonations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.bloodType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {donation.units}
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

export default OverviewSection;
