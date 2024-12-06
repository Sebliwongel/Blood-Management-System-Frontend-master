import React, { useState } from "react";
import PropTypes from "prop-types";

const OverviewSection = () => {
  const [hospitalDetails] = useState({
    name: "City General Hospital",
    contact: "+251-911-123456",
    address: "Addis Ababa, Ethiopia",
  });

  const [requests] = useState([]);

  // A quick summary of the hospital's blood requests
  const pendingRequests = requests.filter((req) => req.status === "pending").length;
  const completedRequests = requests.filter((req) => req.status === "completed").length;
  const totalRequests = requests.length;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Hospital Overview</h2>

      {/* Hospital Info */}
      <div className="mb-6 p-4 border bg-gray-100">
        <h4 className="font-semibold">Hospital Information:</h4>
        <p><strong>Name:</strong> {hospitalDetails.name}</p>
        <p><strong>Contact:</strong> {hospitalDetails.contact}</p>
        <p><strong>Address:</strong> {hospitalDetails.address}</p>
      </div>

      {/* Blood Request Stats */}
      <div className="p-4 border bg-gray-100">
        <h4 className="font-semibold">Blood Request Summary:</h4>
        <ul>
          <li><strong>Total Requests:</strong> {totalRequests}</li>
          <li><strong>Pending Requests:</strong> {pendingRequests}</li>
          <li><strong>Completed Requests:</strong> {completedRequests}</li>
        </ul>
      </div>
    </div>
  );
};

OverviewSection.propTypes = {
  hospitalDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }),
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf(["pending", "completed"]).isRequired
    })
  )
};

export default OverviewSection;
