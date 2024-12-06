import React, { useState } from "react";

const InventorySection = () => {
  const [inventory, setInventory] = useState([
    {
      bloodType: "A+",
      stockLevel: 30,
      expirationDate: "2024-12-15",
      barcode: "12345",
    },
    {
      bloodType: "B+",
      stockLevel: 45,
      expirationDate: "2024-12-18",
      barcode: "12346",
    },
    {
      bloodType: "AB+",
      stockLevel: 20,
      expirationDate: "2024-12-10",
      barcode: "12347",
    },
    {
      bloodType: "O+",
      stockLevel: 50,
      expirationDate: "2024-12-20",
      barcode: "12348",
    },
    {
      bloodType: "A-",
      stockLevel: 25,
      expirationDate: "2024-12-22",
      barcode: "12349",
    },
    {
      bloodType: "B-",
      stockLevel: 15,
      expirationDate: "2024-12-25",
      barcode: "12350",
    },
    {
      bloodType: "AB-",
      stockLevel: 10,
      expirationDate: "2024-12-30",
      barcode: "12351",
    },
    {
      bloodType: "O-",
      stockLevel: 60,
      expirationDate: "2024-12-05",
      barcode: "12352",
    },
  ]);

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
