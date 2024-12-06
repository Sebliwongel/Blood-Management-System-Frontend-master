import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

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
  const inventory = [
    { bloodType: "A+", stockLevel: 50 },
    { bloodType: "O-", stockLevel: 30 },
    { bloodType: "B+", stockLevel: 40 },
    { bloodType: "AB-", stockLevel: 20 },
    { bloodType: "A-", stockLevel: 60 },
    { bloodType: "B-", stockLevel: 25 },
    { bloodType: "O+", stockLevel: 70 },
    { bloodType: "AB+", stockLevel: 10 },
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
          "#ff7f7f",
          "#b3b3ff",
          "#ffb366",
          "#ff9966",
        ],
        hoverBackgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#ff7f7f",
          "#b3b3ff",
          "#ffb366",
          "#ff9966",
        ],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Overview</h2>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">
          Blood Stock Levels (Line Chart)
        </h3>
        <div className="h-64">
          <Line data={lineChartData} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">
          Blood Type Distribution (Pie Chart)
        </h3>
        <div className="h-64">
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
