import React, { useState } from "react";

const ApprovedHospitalsSection = () => {
  const [hospitalRegistrations] = useState([
    { id: 1, name: "City Hospital", location: "Downtown", status: "Approved" },
    { id: 2, name: "General Hospital", location: "Uptown", status: "Pending" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Approved Hospitals</h2>
      <table className="mt-8 w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {hospitalRegistrations
            .filter((hospital) => hospital.status === "Approved")
            .map((hospital) => (
              <tr key={hospital.id}>
                <td className="border px-4 py-2">{hospital.name}</td>
                <td className="border px-4 py-2">{hospital.location}</td>
                <td className="border px-4 py-2">{hospital.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedHospitalsSection;
