import React, { useState } from "react";

const OverviewSection = () => {
  const [collectorData] = useState({
    name: "John Doe",
    id: "COL123",
    assignedArea: "Addis Ababa, Zone 1",
    collectionStats: {
      today: 5,
      thisWeek: 25,
      thisMonth: 95,
    },
  });

  const [upcomingCollections] = useState([
    {
      id: 1,
      location: "Bole Community Center",
      date: "2024-02-15",
      time: "09:00 AM",
      expectedDonors: 20,
    },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Collector Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Collections Today</h3>
          <p className="text-3xl font-semibold">
            {collectorData.collectionStats.today}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Collections This Week</h3>
          <p className="text-3xl font-semibold">
            {collectorData.collectionStats.thisWeek}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Collections This Month</h3>
          <p className="text-3xl font-semibold">
            {collectorData.collectionStats.thisMonth}
          </p>
        </div>
      </div>

      {/* Assigned Area */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="font-semibold mb-2">Assigned Collection Area</h3>
        <p className="text-gray-600">{collectorData.assignedArea}</p>
      </div>

      {/* Next Collection */}
      {upcomingCollections.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Next Collection Event</h3>
          <div>
            <p className="text-gray-600">
              Location: {upcomingCollections[0].location}
            </p>
            <p className="text-gray-600">
              Date: {upcomingCollections[0].date}
            </p>
            <p className="text-gray-600">
              Time: {upcomingCollections[0].time}
            </p>
            <p className="text-gray-600">
              Expected Donors: {upcomingCollections[0].expectedDonors}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewSection;
