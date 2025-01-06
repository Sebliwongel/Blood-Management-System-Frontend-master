import React, { useState } from "react";
import { createOrder } from "./../../../services/apiservice";

const BloodRequestSection = () => {
  const [requestData, setRequestData] = useState({
    orderDate: "",
    bloodTypes: [], // Array to hold selected blood types
    quantities: {}, // Object to hold quantities for selected blood types
    hospitalId: "", // Changed to hospitalName instead of hospitalId
    errorMessage: "",
    successMessage: "",
    isRequestSent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedBloodTypes = checked
        ? [...requestData.bloodTypes, value]
        : requestData.bloodTypes.filter((type) => type !== value);
      setRequestData({ ...requestData, bloodTypes: updatedBloodTypes });
    } else {
      setRequestData({ ...requestData, [name]: value });
    }
  };

  const handleQuantityChange = (bloodType, value) => {
    setRequestData((prevData) => ({
      ...prevData,
      quantities: {
        ...prevData.quantities,
        [bloodType]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { orderDate, bloodTypes, quantities, hospitalId } = requestData;

    // Format data to match the backend's expected structure
    const formattedRequest = bloodTypes.map((bloodType) => ({
      orderDate,
      bloodType,
      quantity: parseInt(quantities[bloodType] || 0, 10),
      hospitalId, // Use hospitalName instead of hospitalId
    }));

    try {
      // Make API calls to create orders for each selected blood type
      await Promise.all(formattedRequest.map((order) => createOrder(order)));
      
      // Update the state after successful order submission
      setRequestData({
        orderDate: "",
        bloodTypes: [],
        quantities: {},
        hospitalId: "",
        isRequestSent: true,
        successMessage: "Request sent successfully!",
        errorMessage: "",
      });
    } catch (error) {
      // Handle error and update state with failure message
      setRequestData({
        ...requestData,
        successMessage: "",
        errorMessage: "Failed to send request. Please try again.",
      });
    }
  };

  const resetForm = () => {
    setRequestData({
      orderDate: "",
      bloodTypes: [],
      quantities: {},
      hospitalId: "",
      errorMessage: "",
      successMessage: "",
      isRequestSent: false,
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send Blood Request</h2>
      {requestData.isRequestSent ? (
        <div>
          <h3 className="text-xl font-semibold text-green-500">
            Request Sent Successfully
          </h3>
          <p>Your request has been sent to the blood bank.</p>
          <button
            onClick={resetForm}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Send Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Order Date:</label>
            <input
              type="date"
              name="orderDate"
              value={requestData.orderDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Hospital Name:</label>
            <input
              type="text"
              name="hospitalId"
              value={requestData.hospitalId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Blood Types Needed:</label>
            <div className="grid grid-cols-3 gap-4">
              {[
                "A+",
                "A-",
                "B+",
                "B-",
                "O+",
                "O-",
                "AB+",
                "AB-",
              ].map((bloodType) => (
                <label key={bloodType} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="bloodTypes"
                    value={bloodType}
                    checked={requestData.bloodTypes.includes(bloodType)}
                    onChange={handleChange}
                    className="form-checkbox text-red-600"
                  />
                  <span>{bloodType}</span>
                </label>
              ))}
            </div>
          </div>

          {requestData.bloodTypes.length > 0 && (
            <div>
              <label className="block text-gray-700 mb-2">Units Needed:</label>
              <div className="grid grid-cols-2 gap-4">
                {requestData.bloodTypes.map((bloodType) => (
                  <div key={bloodType} className="flex items-center">
                    <span className="mr-2">{bloodType}:</span>
                    <input
                      type="number"
                      min="1"
                      value={requestData.quantities[bloodType] || ""}
                      onChange={(e) =>
                        handleQuantityChange(bloodType, e.target.value)
                      }
                      className="w-20 p-1 border rounded"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Submit Request
          </button>
        </form>
      )}
      {requestData.errorMessage && (
        <div className="mt-4 text-red-500">
          <p>{requestData.errorMessage}</p>
        </div>
      )}
      {requestData.successMessage && (
        <div className="mt-4 text-green-500">
          <p>{requestData.successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default BloodRequestSection;
