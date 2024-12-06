import React, { useState } from "react";
import PropTypes from "prop-types";

const ReportSection = () => {
  const [requests, setRequests] = useState([]);
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">All Requests Report</h2>
      {requests.length === 0 ? (
        <p className="text-gray-500">No requests have been made yet.</p>
      ) : (
        <div className="bg-white p-6 rounded shadow-md">
          <h4 className="font-semibold">Requests Summary:</h4>
          {requests.map((request, index) => (
            <div key={index} className="mt-4 p-4 border bg-gray-100">
              <ul>
                <li>
                  <strong>Hospital Name:</strong> {request.patientName}
                </li>
                <li>
                  <strong>Blood Types Requested:</strong>{" "}
                  {request.bloodTypes.join(", ")}
                </li>
                <li>
                  <strong>Units Needed:</strong>
                  {Object.keys(request.unitsNeeded).map((bloodType) => (
                    <div key={bloodType}>
                      {bloodType}: {request.unitsNeeded[bloodType]}
                    </div>
                  ))}
                </li>
                <li>
                  <strong>Additional Notes:</strong> {request.question}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ReportSection.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      patientName: PropTypes.string,
      bloodTypes: PropTypes.arrayOf(PropTypes.string),
      unitsNeeded: PropTypes.object,
      question: PropTypes.string,
    })
  ).isRequired,
};

export default ReportSection;
