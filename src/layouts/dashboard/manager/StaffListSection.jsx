import React, { useState } from "react";

const StaffListSection = () => {
  const [staffList] = useState([
    { id: 1, name: "John Doe", title: "collector" },
    { id: 2, name: "Jane Smith", title: "collector" },
    { id: 3, name: "Emily Johnson", title: "storemanager" },
    { id: 4, name: "Michael Brown", title: "collector" },
    { id: 5, name: "Sarah Davis", title: "collector" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Staff</h2>
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
                    {staff.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {staff.title}
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
