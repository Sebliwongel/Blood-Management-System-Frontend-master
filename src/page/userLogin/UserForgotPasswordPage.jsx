import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import your API service for forgot password functionality
// import { forgotPassword } from "../../../services/apiservice"; 
import NavBar from "../../components/common/NavBar";

function UserForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Replace with your actual API service function
      await forgotPassword(email);
      setSuccessMessage("A password reset link has been sent to your email.");
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />

      {/* Forgot Password Section */}
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-lg border border-red-200 rounded-lg p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-red-600">
            Forgot Password
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-lg hover:bg-red-700 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForgotPasswordPage;
