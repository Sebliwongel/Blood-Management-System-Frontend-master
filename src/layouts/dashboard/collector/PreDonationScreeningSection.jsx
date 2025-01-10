import React, { useState, useEffect } from "react";
import { getScheduledAppointments } from "../../../services/apiservice"; // Import the API service

function PreDonationScreeningSection() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null); // To store error messages

  useEffect(() => {
    // Fetch scheduled appointments using the imported API service
    const fetchAppointments = async () => {
      try {
        const data = await getScheduledAppointments(); // Call the API service
        setAppointments(data); // Set appointments data
      } catch (error) {
        setError("Error fetching appointments: " + error.message); // Handle error
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      <h2>Pre-Donation Screening</h2>

      {/* Display error message if there is an error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Table to display appointments */}
      <table>
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Appointment Date</th>
            <th>Screening Results</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.donorName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.screeningResults}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No appointments scheduled</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PreDonationScreeningSection;
