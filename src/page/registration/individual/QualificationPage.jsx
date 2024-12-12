import React, { useState } from "react";
import NavBar from "../../../components/common/NavBar";
import { useNavigate } from "react-router-dom";

const QualificationPage = () => {
  const [formData, setFormData] = useState({
    weight: "",
    age: "",
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
    bloodPressure: "",
    pulseRate: "",
    temperature: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    weightError: "",
    ageError: "",
  });

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

    if (formData.weight < 45 || formData.weight === "") {
      setErrorMessages((prev) => ({
        ...prev,
        weightError: "You are underweight. You must be at least 45kg to donate blood.",
      }));
      return;
    } else {
      setErrorMessages((prev) => ({ ...prev, weightError: "" }));
    }

    if (formData.age < 18 || formData.age === "") {
      setErrorMessages((prev) => ({
        ...prev,
        ageError: "You are underage. You must be at least 18 years old to donate blood.",
      }));
      return;
    } else {
      setErrorMessages((prev) => ({ ...prev, ageError: "" }));
    }

    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");

    navigate("/schedule");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <div className="fixed w-full top-0 left-0 bg-gray-100 shadow-lg z-20">
        <NavBar />
      </div>

      {/* Form Section */}
      <div className="mt-24 flex flex-col justify-center items-center py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-lg border border-gray-200"
        >
          {/* Form Header */}
          <h2 className="text-center text-3xl font-bold text-gray-700 mb-6">
            Blood Donor Qualification Form
          </h2>
          <p className="text-center text-sm text-gray-500 mb-8">
            Confidential - Please answer the following questions correctly.
          </p>

          {/* Weight */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">
              Weight (kg)
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                min="45"
                required
              />
            </label>
            {errorMessages.weightError && (
              <p className="text-red-600 mt-2 text-sm">{errorMessages.weightError}</p>
            )}
          </div>

          {/* Have you donated blood previously? */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">
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

          {/* Recent Procedures */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">
              In the last 6 months, have you had any of the following procedures?
            </h3>
            {Object.keys(formData.recentProcedures).map((procedure) => (
              <div key={procedure} className="mb-2">
                <label className="flex items-center text-gray-600">
                  <input
                    type="checkbox"
                    name={`recentProcedures.${procedure}`}
                    checked={formData.recentProcedures[procedure]}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  {procedure.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </label>
              </div>
            ))}
          </div>

          {/* Medical History */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">
              Do you have any of the following medical conditions?
            </h3>
            {Object.keys(formData.medicalHistory).map((condition) => (
              <div key={condition} className="mb-2">
                <label className="flex items-center text-gray-600">
                  <input
                    type="checkbox"
                    name={`medicalHistory.${condition}`}
                    checked={formData.medicalHistory[condition]}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  {condition.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </label>
              </div>
            ))}
          </div>

          {/* Age */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">
              Age
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                min="18"
                required
              />
            </label>
            {errorMessages.ageError && (
              <p className="text-red-600 mt-2 text-sm">{errorMessages.ageError}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QualificationPage;
