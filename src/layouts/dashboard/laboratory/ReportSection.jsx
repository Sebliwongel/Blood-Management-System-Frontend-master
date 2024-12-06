import React, { useState } from 'react';

const ReportSection = () => {
  const [donors] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      bloodBarcode: "B123456",
      collectionDate: "2024-11-18",
      bloodType: "",
    },
    {
      id: 2,
      name: "Bob Smith",
      bloodBarcode: "B123457",
      collectionDate: "2024-11-19",
      bloodType: "",
    },
    {
      id: 3,
      name: "Charlie Brown",
      bloodBarcode: "B123458",
      collectionDate: "2024-11-20",
      bloodType: "",
    },
  ]);

  const [generatedReport, setGeneratedReport] = useState(null);

  const handleGenerateReport = () => {
    const report = donors.map((donor) => ({
      name: donor.name,
      bloodBarcode: donor.bloodBarcode,
      collectionDate: donor.collectionDate,
      bloodType: donor.bloodType || "Not provided",
    }));
    setGeneratedReport(report);
  };

  const handleSendReport = () => {
    alert("Report sent successfully!");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-red-500 mb-6">
        Generated Report
      </h2>
      {generatedReport && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="py-2 px-4 text-left">Donor Name</th>
                <th className="py-2 px-4 text-left">Blood Barcode</th>
                <th className="py-2 px-4 text-left">Collection Date</th>
                <th className="py-2 px-4 text-left">Blood Type</th>
              </tr>
            </thead>
            <tbody>
              {generatedReport.map((report, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-4">{report.name}</td>
                  <td className="py-2 px-4">{report.bloodBarcode}</td>
                  <td className="py-2 px-4">{report.collectionDate}</td>
                  <td className="py-2 px-4">{report.bloodType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={handleGenerateReport}
          className="bg-green-500 text-white py-2 px-6 rounded-full"
        >
          Generate Report
        </button>
        <button
          onClick={handleSendReport}
          className="bg-blue-500 text-white py-2 px-6 rounded-full"
        >
          Send Report
        </button>
      </div>
    </div>
  );
};

export default ReportSection;
