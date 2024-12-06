import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const OverviewSection = () => {
  // Mock data for blood inventory
  const inventory = [
    { bloodType: "A+", stockLevel: 30 },
    { bloodType: "B+", stockLevel: 45 },
    { bloodType: "AB+", stockLevel: 20 },
    { bloodType: "O+", stockLevel: 50 },
    { bloodType: "A-", stockLevel: 25 },
    { bloodType: "B-", stockLevel: 15 },
    { bloodType: "AB-", stockLevel: 10 },
    { bloodType: "O-", stockLevel: 60 },
  ];

  const bloodTypes = inventory.map((item) => item.bloodType);
  const stockLevels = inventory.map((item) => item.stockLevel);

  const lineChartData = {
    labels: bloodTypes,
    datasets: [
      {
        label: "Stock Levels",
        data: stockLevels,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: bloodTypes,
    datasets: [
      {
        data: stockLevels,
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#ff9f40",
          "#4bc0c0",
          "#f44336",
          "#9c27b0",
        ],
        hoverBackgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#ff9f40",
          "#4bc0c0",
          "#f44336",
          "#9c27b0",
        ],
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Blood Units</p>
              <p className="text-3xl font-semibold">255</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Low Stock Alert</p>
              <p className="text-3xl font-semibold text-red-500">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Orders</p>
              <p className="text-3xl font-semibold">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Today's Collections</p>
              <p className="text-3xl font-semibold">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Blood Stock Levels</h3>
          <div className="h-64">
            <Line data={lineChartData} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Blood Type Distribution</h3>
          <div className="h-64">
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
