import React, { useState } from "react";
import { createOrder } from "./../../../services/apiservice";

const BloodRequestSection = () => {
  const [requestData, setRequestData] = useState({
    aPosAmount: 0,
    aNegAmount: 0,
    bPosAmount: 0,
    bNegAmount: 0,
    abPosAmount: 0,
    abNegAmount: 0,
    oPosAmount: 0,
    oNegAmount: 0,
    status: "PENDING", // Default status
    errorMessage: "",
    successMessage: "",
    isRequestSent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestData({ ...requestData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.setItem("token", token);
    // Decode token to get user details
    const decodedToken = jwtDecode(token);
    let hospitalId = decodedToken.id;
     

    const {
      aPosAmount,
      aNegAmount,
      bPosAmount,
      bNegAmount,
      abPosAmount,
      abNegAmount,
      oPosAmount,
      oNegAmount,
      status, // Include status in the request data
    } = requestData;

    const orderDate = new Date().toISOString().split("T")[0]; // Format as "YYYY-MM-DD"

    const orderData = {
      hospitalId: hospitalId,
      orderDate, // Current date in "YYYY-MM-DD" format
      aPosAmount: parseInt(aPosAmount, 10),
      aNegAmount: parseInt(aNegAmount, 10),
      bPosAmount: parseInt(bPosAmount, 10),
      bNegAmount: parseInt(bNegAmount, 10),
      abPosAmount: parseInt(abPosAmount, 10),
      abNegAmount: parseInt(abNegAmount, 10),
      oPosAmount: parseInt(oPosAmount, 10),
      oNegAmount: parseInt(oNegAmount, 10),
      status, // Add the status field to the API request
    };
    

    try {
      await createOrder(orderData);

      setRequestData({
        aPosAmount: 0,
        aNegAmount: 0,
        bPosAmount: 0,
        bNegAmount: 0,
        abPosAmount: 0,
        abNegAmount: 0,
        oPosAmount: 0,
        oNegAmount: 0,
        status: "PENDING", // Reset status to default
        isRequestSent: true,
        successMessage: "Request sent successfully!",
        errorMessage: "",
      });
    } catch (error) {
      setRequestData({
        ...requestData,
        successMessage: "",
        errorMessage: "Failed to send request. Please try again.",
      });
    }
  };

  const resetForm = () => {
    setRequestData({
      aPosAmount: 0,
      aNegAmount: 0,
      bPosAmount: 0,
      bNegAmount: 0,
      abPosAmount: 0,
      abNegAmount: 0,
      oPosAmount: 0,
      oNegAmount: 0,
      status: "PENDING",
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
            <label className="block text-gray-700 mb-2">Blood Quantities:</label>
            <div className="grid grid-cols-2 gap-4">
              {[{ name: "aPosAmount", label: "A+ Amount" },
                { name: "aNegAmount", label: "A- Amount" },
                { name: "bPosAmount", label: "B+ Amount" },
                { name: "bNegAmount", label: "B- Amount" },
                { name: "abPosAmount", label: "AB+ Amount" },
                { name: "abNegAmount", label: "AB- Amount" },
                { name: "oPosAmount", label: "O+ Amount" },
                { name: "oNegAmount", label: "O- Amount" }
              ].map((bloodType) => (
                <div key={bloodType.name}>
                  <label className="block text-gray-700 mb-1">
                    {bloodType.label}:
                  </label>
                  <input
                    type="number"
                    name={bloodType.name}
                    value={requestData[bloodType.name]}
                    onChange={handleChange}
                    min="0"
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </div>
          </div>

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
