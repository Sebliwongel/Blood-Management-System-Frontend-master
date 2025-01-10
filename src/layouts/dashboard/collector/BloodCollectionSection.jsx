// components/BloodCollectionPage.js
import React, { useState } from 'react';
import { createBloodCollection } from "../../../services/apiservice";

const BloodCollectionPage = () => {
  const [formData, setFormData] = useState({
    donorId: '',
    bloodVolume: '',
    vitals: '',
    donationTime: '',
    barcode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createBloodCollection(formData);
      alert('Blood collection data saved successfully!');
      setFormData({
        donorId: '',
        bloodVolume: '',
        vitals: '',
        donationTime: '',
        barcode: '',
      });
    } catch (error) {
      alert('Error saving blood collection data');
    }
  };

  return (
    <div>
      <h2>Blood Collection</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Donor ID:</label>
          <input
            type="text"
            name="donorId"
            value={formData.donorId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Blood Volume (ml):</label>
          <input
            type="number"
            name="bloodVolume"
            value={formData.bloodVolume}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Vitals:</label>
          <textarea
            name="vitals"
            value={formData.vitals}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Donation Time:</label>
          <input
            type="time"
            name="donationTime"
            value={formData.donationTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Barcode:</label>
          <input
            type="text"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BloodCollectionPage;
