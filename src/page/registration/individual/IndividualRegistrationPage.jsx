import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import {
  AccountInfoStep,
  ContactInfoStep,
  LocationStep,
  PersonalInfoStep,
} from "../../../components/forms/registration/RegistrationSteps";
import { createDonor } from "../../../services/apiservice"; 
function IndividualRegistrationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    occupation: "",
    PhoneNumber: "",
    email: "",
    city: "",
    subCity: "",
    woreda: "",
    kebele: "",
    password: "",
    confirmPassword: "",
    username: ""
  });

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (
          !formData.title ||
          !formData.firstName ||
          !formData.middleName ||
          !formData.lastName ||
          !formData.gender ||
          !formData.birthDate ||
          !formData.occupation
        ) {
          setError("Please fill in all required fields");
          return false;
        }
        break;
      case 2:
        if (
          !formData.city ||
          !formData.subCity ||
          !formData.woreda ||
          !formData.kebele
        ) {
          setError("Please fill in all required fields");
          return false;
        }
        break;
      case 3:
        if (!formData.PhoneNumber || !formData.email) {
          setError("Please fill in all required fields");
          return false;
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setError("Please enter a valid email address");
          return false;
        }
        break;
      case 4:
        if (!formData.username || formData.username.trim() === "") {
          setError("Username is required");
          return false;
        }
        //  Check if the username is at least 3 characters long (adjust as necessary)
        if (formData.username.length < 3) {
          setError("Username must be at least 3 characters long");
          return false;
        }
        if (!formData.password || !formData.confirmPassword) {
          setError("Please fill in all required fields");
          return false;
        }
        // Basic password validation (at least 6 characters)
        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters long");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = async () => {
    if (validateStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        setError("");
      } else {
        try {
          setLoading(true); // Set loading state to true when submitting the form
          const donorData = {
            title: formData.title,
            firstName: formData.firstName,
            middleName: formData.middleName,
            lastName: formData.lastName,
            gender: formData.gender,
            birthDate: formData.birthDate,
            occupation: formData.occupation,
            PhoneNumber: formData.PhoneNumber,
            email: formData.email,
            city: formData.city,
            subCity: formData.subCity,
            woreda: formData.woreda,
            kebele: formData.kebele,
            password: formData.password,
            username: formData.username,
          };

          const response = await createDonor(donorData); // Call the createDonor API
          console.log("Donor created:", response);
          navigate("/registration/individual/success");
        } catch (err) {
          setError("An error occurred while submitting the form.");
          console.error("Error creating donor:", err);
        } finally {
          setLoading(false); // Set loading state to false after submission
        }
      }
    }
  };


  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError("");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 2:
        return (
          <LocationStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 3:
        return (
          <ContactInfoStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 4:
        return (
          <AccountInfoStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />

      {/* Header Section */}
      <div className="container mx-auto px-4 pt-28 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to Blood and Tissue Supply Chain Management System
        </h1>
        <p className="text-gray-600 mb-8">
          Please complete all the required information to register as a donor
        </p>
      </div>

      {/* Registration Form */}
      <div className="flex-1 container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === currentStep
                      ? "bg-red-500 text-white"
                      : step < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {step < currentStep ? "✓" : step}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Personal</span>
              <span>Location</span>
              <span>Contact</span>
              <span>Account</span>
            </div>
          </div>

          {/* Form Steps */}
          <div className="mb-8">{renderStep()}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className={`px-6 py-2 rounded ${
                currentStep === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              disabled={loading} // Disable the button while loading
            >
                       {loading ? "Submitting..." : currentStep === 4 ? "Submit" : "Next"}

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualRegistrationPage;
