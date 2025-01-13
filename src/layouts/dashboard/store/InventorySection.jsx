import React, { useState, useEffect } from "react";
import { getAllBloodInventories } from "./../../../services/apiservice";

const InventorySection = () => {
  const [inventory, setInventory] = useState([
    
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blood inventories when the component mounts
    const fetchBloodInventories = async () => {
      try {
        const data = await getAllBloodInventories();
        setInventory(data);
      } catch (err) {
        setError('Failed to fetch blood inventories');
      } finally {
        setLoading(false);
      }
    };

    fetchBloodInventories();
  }, []);

  const handleIncrease = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory[index].stockLevel += 1;
    setInventory(updatedInventory);
  };

  const handleDecrease = (index) => {
    const updatedInventory = [...inventory];
    if (updatedInventory[index].stockLevel > 0) {
      updatedInventory[index].stockLevel -= 1;
    }
    setInventory(updatedInventory);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Inventory Management</h2>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiration Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Barcode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.bloodType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.stockLevel}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.expirationDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.barcode}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDecrease(index)}
                      className="text-red-600 hover:text-red-900 mr-4"
                    >
                      Decrease
                    </button>
                    <button
                      onClick={() => handleIncrease(index)}
                      className="text-green-600 hover:text-green-900"
                    >
                      Increase
                    </button>
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

export default InventorySection;
