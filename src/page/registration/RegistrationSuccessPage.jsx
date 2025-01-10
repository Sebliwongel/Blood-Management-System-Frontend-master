import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/common/NavBar";

function RegistrationSuccessPage({ userType }) {
  let title, message, loginLink;

  switch (userType) {
    case "hospital":
      title = "Hospital Registration Successful!";
      message =
        "Your hospital has been successfully registered. You can now log in to access your dashboard.";
      loginLink = "/Hospital/login";
      break;
    case "staff":
      title = "Staff Registration Successful!";
      message =
        "Your account has been successfully created. You can now log in to access your dashboard.";
      loginLink = "/admin/login";
      break;
    default:
      title = "Individual Donor Registration Successful!";
      message =
        "Thank you for registering as an individual blood donor. Your contribution can help save lives.";
      loginLink = "/login";
      break;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">{message}</p>
          <div className="space-x-4">
            <Link
              to={loginLink}
              className="inline-block px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Login
            </Link>
            <Link
              to="/"
              className="inline-block px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccessPage;
