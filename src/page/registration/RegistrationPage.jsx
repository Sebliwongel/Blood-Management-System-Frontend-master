import React from "react";
import { Link } from "react-router-dom";
import hello from "../../assets/img/hello.png";
import NavBar from "../../components/common/NavBar";

function RegistrationPage() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Welcome Section */}
      <div className="flex flex-col items-center pt-20 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to the Blood and Tissue Supply
          <br />
          Chain Management System
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Join our platform to help save lives and manage blood and tissue
          resources seamlessly.
        </p>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center">
        <img
          src={hello}
          alt="Welcome Illustration"
          className="w-10/12 md:w-1/2 object-contain"
        />
      </div>

      {/* Registration Options */}
      <div className="flex flex-col items-center mt-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600">
          Register As
        </h2>

        {/* Donor Button */}
        <Link to="/registration/individual">
          <button className="bg-red-500 hover:bg-red-600 text-white text-xl md:text-2xl font-semibold px-12 py-3 rounded-lg shadow-lg transition-all duration-200">
            As Donor
          </button>
        </Link>

        {/* Hospital Button */}
        <Link to="/registration/hospital">
          <button className="bg-gray-100 hover:bg-red-100 text-red-500 border border-red-500 text-xl md:text-2xl font-semibold px-12 py-3 rounded-lg shadow-lg transition-all duration-200">
            As Hospital
          </button>
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-16 bg-red-500 py-4">
        <p className="text-center text-white text-sm md:text-base">
          &copy; 2025 Blood and Tissue Supply Chain Management System. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;
