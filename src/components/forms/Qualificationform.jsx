import React, { useState } from "react";
import NavBar from "../common/NavBar";
import { useNavigate } from "react-router-dom";

const QualificationForm = () => {
  const [formData, setFormData] = useState({
    weight: "",
    pulse: "",
    hb: "",
    bp: "",
    temperature: "",
    lastDonationDate: "",
    hasDonatedBefore: false,
    hasTattooing: false,
    hasEarPiercing: false,
    hadDentalExtraction: false,
    hasHeartDisease: false,
    hasCancer: false,
    hasDiabetes: false,
    hasHepatitis: false,
    hasSTD: false,
    hadTyphoidLastYear: false,
    hasLungDisease: false,
    hasTuberculosis: false,
    hasAllergies: false,
    hasKidneyDisease: false,
    hasEpilepsy: false,
    hasAbnormalBleeding: false,
    hadJaundiceLastYear: false,
    hadMalariaSixMonths: false,
    hasFaintingSpells: false,
    takenAntibiotics: false,
    takenSteroids: false,
    takenAspirin: false,
    hadVaccinations: false,
    consumedAlcohol: false,
    hadDogBiteVaccine: false,
    hadSurgeryLastSixMonths: false,
    hadBloodTransfusionLastSixMonths: false,
    age: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "number" || type === "text") {
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

    // Validate weight and age
    if (formData.weight < 45) {
      setError("You must weigh at least 45 kg to donate blood.");
      return;
    }
    
    if (formData.age < 18) {
      setError("You must be at least 18 years old to donate blood.");
      return;
    }

    // Reset error if all validations pass
    setError("");

    // Process the form data (you can send it to an API or handle as required)
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    navigate("/schedule");
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md h-screen"
        style={{ backgroundImage: 'url("your-image.jpg")' }}
      ></div>

      <div className="relative z-10 min-h-screen">
        <div className="fixed w-full top-0 left-0 bg-white shadow-lg z-20">
          <NavBar />
        </div>

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

            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

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
                  min="45" 
                  required
                />
              </label>
            </div>

{/* Pulse */}
<div className="mb-4">
        <label className="block text-gray-700">
          What is your pulse rate (in bpm)?
          <input
            type="number"
            name="pulse"
            value={formData.pulse}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
      </div>

      {/* Hemoglobin (HB) */}
      <div className="mb-4">
        <label className="block text-gray-700">
          What is your hemoglobin (HB) level (in g/dL)?
          <input
            type="number"
            name="hb"
            value={formData.hb}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
      </div>

      {/* Blood Pressure */}
      <div className="mb-4">
        <label className="block text-gray-700">
          What is your blood pressure (in mmHg)?
          <input
            type="text"
            name="bp"
            value={formData.bp}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
      </div>

      {/* Temperature */}
      <div className="mb-4">
        <label className="block text-gray-700">
          What is your temperature (in °C)?
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleInputChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
      </div>

            {/* Donated Before */}
            <div className="mb-4">
              <label className="block text-gray-700">
                Have you donated blood before?
                <input
                  type="radio"
                  name="hasDonatedBefore"
                  value={true}
                  checked={formData.hasDonatedBefore === true}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Yes
                <input
                  type="radio"
                  name="hasDonatedBefore"
                  value={false}
                  checked={formData.hasDonatedBefore === false}
                  onChange={handleInputChange}
                  className="ml-4 mr-2"
                />
                No
              </label>
            </div>

            {/* Medical History and Procedures */}
            <div className="mb-4">
              <h3 className="text-gray-700 mb-2">
                In the last 6 months, have you had any of the following?
              </h3>
              {[
                "hasTattooing",
                "hasEarPiercing",
                "hadDentalExtraction",
              ].map((condition) => (
                <div key={condition} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name={condition}
                      checked={formData[condition]}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    {condition.replace(/([A-Z])/g, " $1")}
                  </label>
                </div>
              ))}
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
