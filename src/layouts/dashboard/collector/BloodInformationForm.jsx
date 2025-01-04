import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import Dropdown from "../../../components/forms/DropDown";

const BloodInformationForm = () => {
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [barcode, setBarcode] = useState('');
  const [donationDate, setDonationDate] = useState('');
  
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log({ bloodType, quantity, barcode, donationDate });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Blood Type Dropdown */}
      <div>
        <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">
          Blood Type
        </label>

                <Dropdown
                items={[
                    { label: "O_POS", value: "O+" },
                    { label: " O_NEG", value: "O-" },
                    { label: "A_POS", value: "A+" },
                    { label: "A_NEG", value: "A-" },
                    { label: " B_POS", value: "B+" },
                    { label: "B_NEG-", value: "B-" },
                    { label: "AB_POS", value: "AB+" },
                    { label: " AB_NEG", value: "AB-" },
                   
                ]}
                value={selectedValue}
                onChange={setSelectedValue}
                name="dropdown-field"
                placeholder="Choose an option..." // optional
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
          min="0"
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
          onChange={(e) => setBarcode(e.target.value)}
          className="w-full p-2 border rounded-md"
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
