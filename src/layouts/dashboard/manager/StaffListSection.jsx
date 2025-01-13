import React, { useState, useEffect } from "react";
import { fetchStaff } from "./../../../services/apiservice";

// Function to fetch staff data from the API

const StaffListSection = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch staff data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchStaff();
        setStaffList(data); // Update staffList state with the fetched data
      } catch (err) {
        setError('Failed to fetch staff');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array ensures this effect runs once when the component mounts

  return (
    <div>
      <h2 className="text-2xl font-semibold">Staff</h2>
      {loading && <p>Loading staff data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {staff.FirstName} {staff.MiddleName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {staff.role}
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

export default StaffListSection;
