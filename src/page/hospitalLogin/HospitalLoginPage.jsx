import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import { HospitalLogin } from "../../services/apiservice";

function HospitalLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Attempting login with:", email, password);
      // Pass email and password separately as arguments
      const result = await HospitalLogin(email, password);

      // Save token and donor details to localStorage or context
      localStorage.setItem("token", result.Hospital.accessToken);
      localStorage.setItem("hospital", JSON.stringify(result.Hospital));

      console.log(localStorage.getItem('token'));
      

      // Redirect to dashboard or home
      navigate("/dashboard/hospital");
    } catch (err) {
      // Check if the error object contains a response
      if (err.response) {
        // The error is from the API response
        setError(err.response.data?.message || "Login failed");
      } else if (err.request) {
        // The request was made but no response received
        setError("No response from the server. Please try again later.");
      } else {
        // Other errors (e.g., network errors, wrong input, etc.)
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />

      {/* Login Section */}
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-lg border border-red-200 rounded-lg p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-red-600">
            Log In to Your Account
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-lg hover:bg-red-700 transition duration-300"
          >
            Log In
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <Link to="/forgotpassword" className="text-red-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HospitalLoginPage;
