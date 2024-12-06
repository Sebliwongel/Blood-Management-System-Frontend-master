import React from "react";

const ReportsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Collection Reports</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">Generate Reports</h3>
        <div className="space-y-4">
          <button className="block w-full md:w-auto text-left p-4 border rounded hover:bg-gray-50">
            <h4 className="font-semibold">Daily Collection Report</h4>
            <p className="text-sm text-gray-600">
              View today's collection statistics
            </p>
          </button>
          <button className="block w-full md:w-auto text-left p-4 border rounded hover:bg-gray-50">
            <h4 className="font-semibold">Weekly Collection Report</h4>
            <p className="text-sm text-gray-600">
              View this week's collection summary
            </p>
          </button>
          <button className="block w-full md:w-auto text-left p-4 border rounded hover:bg-gray-50">
            <h4 className="font-semibold">Monthly Collection Report</h4>
            <p className="text-sm text-gray-600">
              View this month's collection analytics
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;
