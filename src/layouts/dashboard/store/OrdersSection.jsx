import React, { useState, useEffect } from "react";
import { getAllOrders } from "./../../../services/apiservice";
// import api from './api'; // Assuming the API function is in a separate file

// Function to get an order by ID


const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect hook to fetch orders (for demonstration, using a sample list of order IDs)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Here, you would normally fetch an array of order IDs and then fetch details for each one
        // For the sake of example, let's assume you have these order IDs
        //const orderIds = [1, 2, 3, 4, 5]; // Example order IDs, replace with real data if needed
        
        const fetchedOrders = await getAllOrders();

        setOrders(fetchedOrders);
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); // Empty array ensures this effect runs once when the component mounts

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Blood Orders</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  A-
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  A+
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  B+
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  B-
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AB+
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AB-
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  O+
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  O-
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
                    {order.hospital.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.aNegAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.aPosAmount}
                  </td><td className="px-6 py-4 whitespace-nowrap">
                    {order.bNegAmount}
                  </td><td className="px-6 py-4 whitespace-nowrap">
                    {order.bPosAmount}
                  </td><td className="px-6 py-4 whitespace-nowrap">
                    {order.abNegAmount}
                  </td><td className="px-6 py-4 whitespace-nowrap">
                    {order.abPosAmount}
                  </td><td className="px-6 py-4 whitespace-nowrap">
                    {order.oNegAmount}
                  </td><td className="px-6 py-4 whitespace-nowrap">
                    {order.oPosAmount}
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
