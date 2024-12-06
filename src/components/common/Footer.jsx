import React from "react";
import logo from "../../assets/img/image copy.png";
import {
  FaTelegram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-600 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-20 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="h-16" />
          <p className="text-lg">
            Blood and tissue supply chain management system dedicated to saving
            lives through efficient blood management.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            Our advanced blood bank management system ensures a seamless
            process from donor registration to transfusion. We are committed to
            improving patient safety and efficiency in blood supply chains.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-4">
            <a
              href="https://www.facebook.com/www.facebook.bloodbankeethiopia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400"
            >
              <FaFacebook className="mr-3" />
              Follow us on Facebook
            </a>
            <a
              href="https://t.me/joinchat/www.nbbs.gov.et"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400"
            >
              <FaTelegram className="mr-3" />
              Join us on Telegram
            </a>
            <a
              href="mailto:your-email@example.com"
              className="flex items-center hover:text-blue-400"
            >
              <FaEnvelope className="mr-3" />
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center hover:text-blue-400"
            >
              <FaPhone className="mr-3" />
              Call Us: +251118271902
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400"
            >
              <FaMailBulk className="mr-3" />
              Send Us Mail
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-red-700 py-6 px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10" />
            <p className="text-lg font-semibold">
              Blood Bank Management System
            </p>
          </div>
          <p className="text-gray-300 text-sm">
            © 2025 A product of Hope Enterprise University College
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
