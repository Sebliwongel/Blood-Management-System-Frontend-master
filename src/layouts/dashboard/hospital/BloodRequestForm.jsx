import React, { useState } from "react";

const BloodRequestSection = () => {
  const [requestData, setRequestData] = useState({
    patientName: "",
    bloodTypes: [],
    unitsNeeded: {},
    question: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to submit the request
    setRequestData({ ...requestData, isRequestSent: true });
  };

  const resetForm = () => {
    setRequestData({
      patientName: "",
      bloodTypes: [],
      unitsNeeded: {},
      question: "",
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
            <label className="block text-gray-700 mb-2">Hospital Name:</label>
            <input
              type="text"
              name="patientName"
              value={requestData.patientName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Blood Types Needed:
            </label>
            <div className="grid grid-cols-3 gap-4">
              {["A+", "B+", "O+", "AB+", "O-", "A-"].map((bloodType) => (
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
                      value={requestData.unitsNeeded[bloodType] || ""}
                      onChange={(e) =>
                        setRequestData({
                          ...requestData,
                          unitsNeeded: {
                            ...requestData.unitsNeeded,
                            [bloodType]: e.target.value,
                          },
                        })
                      }
                      className="w-20 p-1 border rounded"
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-2">
              Additional Notes:
            </label>
            <textarea
              name="question"
              value={requestData.question}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default BloodRequestSection;
