import React, { useState } from "react";

const OrdersSection = () => {
  const [orders] = useState([
    {
      hospitalName: "City Hospital",
      bloodType: "A+",
      unitsRequested: 10,
      orderDate: "2024-11-18",
      status: "Pending",
    },
    {
      hospitalName: "General Hospital",
      bloodType: "B+",
      unitsRequested: 5,
      orderDate: "2024-11-19",
      status: "Approved",
    },
    {
      hospitalName: "County Hospital",
      bloodType: "O-",
      unitsRequested: 20,
      orderDate: "2024-11-20",
      status: "Processing",
    },
    {
      hospitalName: "St. Mary's Hospital",
      bloodType: "AB+",
      unitsRequested: 15,
      orderDate: "2024-11-21",
      status: "Delivered",
    },
    {
      hospitalName: "Children's Hospital",
      bloodType: "A-",
      unitsRequested: 8,
      orderDate: "2024-11-22",
      status: "Pending",
    },
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Blood Orders</h2>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Requested
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.hospitalName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.bloodType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.unitsRequested}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.orderDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Approved"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
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

export default OrdersSection;
