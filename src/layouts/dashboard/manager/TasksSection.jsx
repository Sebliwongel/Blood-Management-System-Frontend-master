import React, { useState } from "react";

const TasksSection = () => {
  const [denialReason, setDenialReason] = useState("");
  const [denialRequestId, setDenialRequestId] = useState(null);
  const [denialHospitalId, setDenialHospitalId] = useState(null);
  const [hospitalRegistrations, setHospitalRegistrations] = useState([
    { id: 1, name: "City Hospital", location: "Downtown", status: "Approved" },
    { id: 2, name: "General Hospital", location: "Uptown", status: "Pending" },
  ]);

  const [bloodRequests, setBloodRequests] = useState([
    {
      id: 1,
      hospitalName: "City Hospital",
      bloodType: "A+",
      unitsRequested: 10,
      status: "Pending",
      reason: "",
    },
    {
      id: 2,
      hospitalName: "General Hospital",
      bloodType: "O-",
      unitsRequested: 5,
      status: "Pending",
      reason: "",
    },
  ]);

  const handleApproveRegistration = (id) => {
    setHospitalRegistrations((prev) =>
      prev.map((hospital) =>
        hospital.id === id ? { ...hospital, status: "Approved" } : hospital
      )
    );
  };

  const handleApproveBloodRequest = (id) => {
    setBloodRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleDenyBloodRequest = (id) => {
    setDenialRequestId(id);
  };

  const handleDenyHospitalRegistration = (id) => {
    setDenialHospitalId(id);
  };

  const handleDenialSubmit = (e) => {
    e.preventDefault();
    if (denialRequestId !== null) {
      setBloodRequests((prev) =>
        prev.map((request) =>
          request.id === denialRequestId
            ? { ...request, status: "Denied", reason: denialReason }
            : request
        )
      );
    }

    if (denialHospitalId !== null) {
      setHospitalRegistrations((prev) =>
        prev.map((hospital) =>
          hospital.id === denialHospitalId
            ? { ...hospital, status: "Denied" }
            : hospital
        )
      );
    }

    setDenialRequestId(null);
    setDenialHospitalId(null);
    setDenialReason("");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Tasks</h2>

      {/* Hospital Registration Approvals */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">
          Approve or Deny Hospital Registrations
        </h3>
        <ul className="mt-4">
          {hospitalRegistrations
            .filter((hospital) => hospital.status === "Pending")
            .map((hospital) => (
              <li
                key={hospital.id}
                className={`p-4 border rounded-lg mb-2 ${
                  hospital.status === "Approved"
                    ? "bg-green-100"
                    : hospital.status === "Denied"
                    ? "bg-red-100"
                    : "bg-red-50"
                }`}
              >
                <div>
                  <strong>Name:</strong> {hospital.name}
                </div>
                <div>
                  <strong>Location:</strong> {hospital.location}
                </div>
                <div>
                  <strong>Status:</strong> {hospital.status}
                </div>
                {hospital.status === "Pending" && (
                  <div className="mt-4 mb-1 flex gap-4">
                    <button
                      onClick={() => handleApproveRegistration(hospital.id)}
                      className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 mt-14 rounded-lg"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenyHospitalRegistration(hospital.id)}
                      className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 mt-14 ml-10 rounded-lg"
                    >
                      Deny
                    </button>

                    {denialHospitalId === hospital.id && (
                      <div>
                        <textarea
                          className="w-full mt-4 p-2 border rounded-lg"
                          placeholder="Enter reason for denial"
                          value={denialReason}
                          onChange={(e) => setDenialReason(e.target.value)}
                        />
                        <button
                          onClick={handleDenialSubmit}
                          className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 rounded-lg mt-2"
                        >
                          Submit Denial
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>

      {/* Blood Requests */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Approve or Deny Blood Requests</h3>
        <ul className="mt-4">
          {bloodRequests
            .filter((request) => request.status === "Pending")
            .map((request) => (
              <li
                key={request.id}
                className={`p-4 border rounded-lg mb-10 ${
                  request.status === "Approved"
                    ? "bg-green-100"
                    : request.status === "Denied"
                    ? "bg-red-100"
                    : "bg-red-50"
                }`}
              >
                <div>
                  <strong>Hospital:</strong> {request.hospitalName}
                </div>
                <div>
                  <strong>Blood Type:</strong> {request.bloodType}
                </div>
                <div>
                  <strong>Units Requested:</strong> {request.unitsRequested}
                </div>
                <div>
                  <strong>Status:</strong> {request.status}
                </div>
                {request.status === "Pending" && (
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => handleApproveBloodRequest(request.id)}
                      className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 mt-14 rounded-lg"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenyBloodRequest(request.id)}
                      className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 mt-14 ml-10 rounded-lg"
                    >
                      Deny
                    </button>

                    {denialRequestId === request.id && (
                      <div>
                        <textarea
                          className="w-full mt-4 p-2 border rounded-lg"
                          placeholder="Enter reason for denial"
                          value={denialReason}
                          onChange={(e) => setDenialReason(e.target.value)}
                        />
                        <button
                          onClick={handleDenialSubmit}
                          className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 rounded-lg mt-2"
                        >
                          Submit Denial
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksSection;
