import React, { useState, useEffect } from "react";
import { FaDroplet, FaCalendar, FaClock, FaAward } from "react-icons/fa6";
import axios from "axios";

const OverviewSection = ({ donorId }) => {
  const [donorStats, setDonorStats] = useState(null);
  const [upcomingAppointment, setUpcomingAppointment] = useState(null);
  const [recentDonations, setRecentDonations] = useState([]);

  // Fetch donor stats
  useEffect(() => {
    if (!donorId) return; // Prevent fetching if donorId is not available

    const fetchData = async () => {
      try {
        // Fetch donor stats
        const statsResponse = await axios.get(`/api/donor/${donorId}/stats`);
        console.log("Donor Stats:", statsResponse.data);
        setDonorStats(statsResponse.data);

        // Fetch upcoming appointment
        const appointmentResponse = await axios.get(`/api/donor/${donorId}/appointments`);
        console.log("Upcoming Appointment:", appointmentResponse.data);
        setUpcomingAppointment(appointmentResponse.data);

        // Fetch recent donations
        const donationsResponse = await axios.get(`/api/donor/${donorId}/recent-donations`);
        console.log("Recent Donations:", donationsResponse.data);
        setRecentDonations(donationsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [donorId]);

  // If data is not yet available, show loading message
  if (!donorStats || !upcomingAppointment || !recentDonations.length) {
    return <p>Loading...</p>;
  }

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
              <p className="text-2xl font-semibold">{donorStats.totalDonations}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <FaCalendar className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-gray-500 text-sm">Next Appointment</h3>
              <p className="text-2xl font-semibold">{donorStats.nextAppointment}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <FaClock className="text-green-500 text-2xl" />
            <div>
              <h3 className="text-gray-500 text-sm">Last Donation</h3>
              <p className="text-2xl font-semibold">{donorStats.lastDonation}</p>
            </div>
          </div>
        </div>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Blood Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Units</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentDonations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.bloodType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.units}</td>
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
