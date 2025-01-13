/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { saveBloodInventory, getDonorByPhoneNumber } from "../../../services/apiservice";

function BloodInformationForm() {
  const [searchPhone, setSearchPhone] = useState("");
  const [donorInfo, setDonorInfo] = useState(null);
  const [formData, setFormData] = useState({
    donationDate: "",
    barcode: "",
    bloodVolume: "",
  });
  const [error, setError] = useState("");

  // Handle donor search by phone number
  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Use the getDonorByPhoneNumber API service function
      const donor = await getDonorByPhoneNumber(searchPhone);
      setDonorInfo(donor);
    } catch (err) {
      setError("Donor not found or an error occurred.");
      setDonorInfo(null);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      donorId: donorInfo.id,
      donationDate: formData.donationDate,
      //expirationDate: formData.donationDate,
      //storageStatus: "AVAILABLE",
      barcode: formData.barcode,
      bloodVolume: formData.bloodVolume,
      //bloodType: "O_POS",
      quantityml: 500,
      //stockLevel: 1,
      //hospitalId: 1,
      collectorId: 1
    };
    //TODO: decode collector from from token
    try {
      // Save blood inventory using the imported function
      const newRecord = await saveBloodInventory(payload);

      alert("Blood information saved successfully!");
      setFormData({ donationDate: "", barcode: "", bloodVolume: "" });
      setDonorInfo(null);
      setSearchPhone("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blood Information</h2>

      {/* Search Donor by Phone */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Search Donor by Phone:
        </label>
        <input
          type="text"
          value={searchPhone}
          onChange={(e) => setSearchPhone(e.target.value)}
          placeholder="Enter phone number"
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* Error or Donor Details */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {donorInfo && (
        <div style={{ marginBottom: "20px" }}>
          <h4>Donor Found:</h4>
          <p>
            <strong>Name:</strong> {donorInfo.firstName} {donorInfo.lastName}
          </p>
          <p>
            <strong>Phone:</strong> {donorInfo.PhoneNumber}
          </p>
          <p>
            <strong>Blood Type:</strong> {donorInfo.bloodType}
          </p>
        </div>
      )}

      {/* Donation Form */}
      {donorInfo && (
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Donation Date:
          </label>
          <input
            type="date"
            name="donationDate"
            value={formData.donationDate}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <label style={{ display: "block", marginBottom: "10px" }}>
            Barcode:
          </label>
          <input
            type="text"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
            required
            placeholder="Enter barcode"
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <label style={{ display: "block", marginBottom: "10px" }}>
            Blood Volume (ml):
          </label>
          <input
            type="number"
            name="bloodVolume"
            value={formData.bloodVolume}
            onChange={handleChange}
            required
            placeholder="Enter blood volume"
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default BloodInformationForm;
