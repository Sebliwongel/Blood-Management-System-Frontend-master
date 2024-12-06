import React, { useState } from "react";
import NavBar from "../common/NavBar";
import { useNavigate } from "react-router-dom";

const QualificationForm = () => {
  const [formData, setFormData] = useState({
    weight: "",
    donatedPreviously: "",
    recentProcedures: {
      tattooing: false,
      earPiercing: false,
      dentalExtraction: false,
    },
    medicalHistory: {
      heartDisease: false,
      cancer: false,
      hepatitis: false,
      std: false,
      typhoid: false,
      lungDisease: false,
      tuberculosis: false,
      kidneyDisease: false,
    },
    medications: {
      antibiotics: false,
      steroids: false,
      aspirin: false,
      vaccinations: false,
    },
    surgeryOrTransfusion: "",
    isPregnant: "",
    bloodType: "",
  });

  // Create navigate function using useNavigate hook
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "text" || type === "number") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (type === "checkbox") {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: checked },
      }));
    }

    if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.weight < 47 || formData.weight === "") {
      alert("Weight must be 45kg or more to qualify for blood donation.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");

    // Redirect to the schedule page after form submission
    navigate("/schedule");
  };

  return (
    <div className="relative">
      {/* Full-screen Background Layer with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md h-screen"
        style={{ backgroundImage: 'url("your-image.jpg")' }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen">
        {/* Fixed Navbar */}
        <div className="fixed w-full top-0 left-0 bg-white shadow-lg z-20">
          <NavBar />
        </div>

        {/* Content Section */}
        <div className="mt-24 min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className="mt-10 max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-center text-2xl font-bold text-gray-700 mb-4">
              Blood Donor Qualification Form
            </h2>
            <p className="text-center text-sm text-gray-500 mb-6">
              Confidential - Please answer the following questions correctly.
              This will help protect you and the patient who receives your
              blood.
            </p>

            {/* Weight */}
            <div className="mb-4">
              <label className="block text-gray-700">
                What is your weight (in kg)?
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                  min="47" // Ensure values below 47 are not accepted
                  required
                />
              </label>
              {formData.weight !== "" && formData.weight < 47 && (
                <p className="text-red-600 mt-2">
                  Weight must be 47kg or more to qualify for blood donation.
                </p>
              )}
            </div>

            {/* Have you donated blood previously? */}
            <div className="mb-4">
              <label className="block text-gray-700">
                Have you donated blood previously?
                <div className="mt-2 space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="donatedPreviously"
                      value="Yes"
                      checked={formData.donatedPreviously === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="donatedPreviously"
                      value="No"
                      checked={formData.donatedPreviously === "No"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </label>
            </div>

            {/* Recent procedures */}
            <div className="mb-4">
              <h3 className="text-gray-700 mb-2">
                In the last 6 months, have you had any of the following?
              </h3>
              {["tattooing", "earPiercing", "dentalExtraction"].map(
                (procedure) => (
                  <div key={procedure} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name={`recentProcedures.${procedure}`}
                        checked={formData.recentProcedures[procedure]}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      {procedure.replace(/([A-Z])/g, " $1")}
                    </label>
                  </div>
                )
              )}
            </div>

            {/* Medical History */}
            <div className="mb-4">
              <h3 className="text-gray-700 mb-2">
                Do you suffer from or have you suffered from any of the
                following diseases?
              </h3>
              {[
                "heartDisease",
                "cancer",
                "hepatitis",
                "std",
                "typhoid",
                "lungDisease",
                "tuberculosis",
                "kidneyDisease",
              ].map((condition) => (
                <div key={condition} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name={`medicalHistory.${condition}`}
                      checked={formData.medicalHistory[condition]}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    {condition.replace(/([A-Z])/g, " $1")}
                  </label>
                </div>
              ))}
            </div>

            {/* Medications */}
            <div className="mb-4">
              <h3 className="text-gray-700 mb-2">
                Are you taking or have you taken any of these in the past 72
                hours?
              </h3>
              {["antibiotics", "steroids", "aspirin", "vaccinations"].map(
                (med) => (
                  <div key={med} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name={`medications.${med}`}
                        checked={formData.medications[med]}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      {med.charAt(0).toUpperCase() + med.slice(1)}
                    </label>
                  </div>
                )
              )}
            </div>

            {/* Surgery or blood transfusion history */}
            <div className="mb-4">
              <h3 className="text-gray-700 mb-2">
                Is there any history of surgery or blood transfusion in the past
                six months?
              </h3>
              <div className="space-x-4">
                {["Major", "Minor", "Blood Transfusion"].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="surgeryOrTransfusion"
                      value={option}
                      checked={formData.surgeryOrTransfusion === option}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Pregnancy */}
            <div className="mb-4">
              <label className="block text-gray-700">
                Are you pregnant?
                <div className="mt-2 space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="isPregnant"
                      value="Yes"
                      checked={formData.isPregnant === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="isPregnant"
                      value="No"
                      checked={formData.isPregnant === "No"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </label>
            </div>

            {/* Blood Type */}
            <div className="mb-4">
              <label className="block text-gray-700">
                What is your blood type?
                <div className="mt-2 space-x-4">
                  {[
                    { label: "A-", value: "A-" },
                    { label: "A+", value: "A+" },
                    { label: "B-", value: "B-" },
                    { label: "B+", value: "B+" },
                    { label: "AB-", value: "AB-" },
                    { label: "AB+", value: "AB+" },
                    { label: "O-", value: "O-" },
                    { label: "O+", value: "O+" },
                    { label: "I don't know", value: "I don't know" },
                  ].map((option) => (
                    <label key={option.value} className="mr-4">
                      <input
                        type="radio"
                        name="bloodType"
                        value={option.value}
                        checked={formData.bloodType === option.value}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QualificationForm;
