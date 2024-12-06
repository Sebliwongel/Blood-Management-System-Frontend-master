import React, { useState } from "react";

const ScheduleSection = () => {
  const [upcomingCollections, setUpcomingCollections] = useState([
    {
      id: 1,
      location: "Bole Community Center",
      date: "2024-02-15",
      time: "09:00 AM",
      expectedDonors: 20,
    },
    {
      id: 2,
      location: "Unity University",
      date: "2024-02-17",
      time: "10:00 AM",
      expectedDonors: 30,
    },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Collection Schedule</h2>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h3 className="font-semibold mb-4">Upcoming Collections</h3>
          <div className="space-y-4">
            {upcomingCollections.map((collection) => (
              <div key={collection.id} className="p-4 border rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{collection.location}</h4>
                    <p className="text-gray-600">Date: {collection.date}</p>
                    <p className="text-gray-600">Time: {collection.time}</p>
                    <p className="text-gray-600">
                      Expected Donors: {collection.expectedDonors}
                    </p>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
