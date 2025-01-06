import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import Dropdown from "../../../components/forms/DropDown";
import { createBloodInventory } from "./../../../services/apiservice"; // Updated import path

const BloodInformationForm = () => {
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [barcode, setBarcode] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [storageStatus, setStorageStatus] = useState('');
  const [donorId, setDonorId] = useState('');

  // Handle barcode input: allows both numbers and alphabets
  const handleBarcodeChange = (e) => {
    const value = e.target.value;
    setBarcode(value); // Update the barcode state without restriction
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBloodInventory({
        donorId: Number(donorId),
        bloodType,
        barcode,
        donationDate,
        expirationDate,
        storageStatus,
        quantity: Number(quantity),
      });
      console.log("Blood inventory successfully created:", response);
      alert("Blood inventory successfully created!");
    } catch (error) {
      console.error("Failed to create blood inventory:", error);
      alert("Failed to create blood inventory.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Donor ID Field */}
      <div>
        <label htmlFor="donorId" className="block text-sm font-medium text-gray-700">
          Donor ID
        </label>
        <input
          type="number"
          id="donorId"
          name="donorId"
          value={donorId}
          onChange={(e) => setDonorId(e.target.value)}
          className="w-full p-2 border rounded-md"
          min="1"
          required
        />
      </div>

      {/* Blood Type Dropdown */}
      <div>
        <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">
          Blood Type
        </label>
        <Dropdown
          items={[
            { label: "O_POS", value: "O_POS" },
            { label: "O_NEG", value: "O_NEG" },
            { label: "A_POS", value: "A_POS" },
            { label: "A_NEG", value: "A_NEG" },
            { label: "B_POS", value: "B_POS" },
            { label: "B_NEG", value: "B_NEG" },
            { label: "AB_POS", value: "AB_POS" },
            { label: "AB_NEG", value: "AB_NEG" },
          ]}
          value={bloodType}
          onChange={setBloodType}
          name="bloodType"
          placeholder="Choose a blood type"
        />
      </div>

      {/* Quantity Field */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity (ml)
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded-md"
          min="1"
          required
        />
      </div>

      {/* Barcode Field */}
      <div>
        <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
          Barcode
        </label>
        <input
          type="text"
          id="barcode"
          name="barcode"
          value={barcode}
          onChange={handleBarcodeChange} // Updated handler
          className="w-full p-2 border rounded-md"
          placeholder="Enter barcode"
          required
        />
      </div>

      {/* Donation Date Field */}
      <div>
        <label htmlFor="donationDate" className="block text-sm font-medium text-gray-700">
          Donation Date
        </label>
        <input
          type="date"
          id="donationDate"
          name="donationDate"
          value={donationDate}
          onChange={(e) => setDonationDate(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      {/* Expiration Date Field */}
      <div>
        <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
          Expiration Date
        </label>
        <input
          type="date"
          id="expirationDate"
          name="expirationDate"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      {/* Storage Status Dropdown */}
      <div>
        <label htmlFor="storageStatus" className="block text-sm font-medium text-gray-700">
          Storage Status
        </label>
        <Dropdown
          items={[
            { label: "AVAILABLE", value: "AVAILABLE" },
            { label: "RESERVED", value: "RESERVED" },
            { label: "EXPIRED", value: "EXPIRED" },
          ]}
          value={storageStatus}
          onChange={setStorageStatus}
          name="storageStatus"
          placeholder="Choose a storage status"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default BloodInformationForm;
