import { useState, useEffect } from 'react';
import { getAllBloodInventories } from "./../../../services/apiservice";

// Function to get all blood inventories

// React component to display blood inventories
const BloodInventoryPage = () => {
  const [bloodInventories, setBloodInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blood inventories when the component mounts
    const fetchBloodInventories = async () => {
      try {
        const data = await getAllBloodInventories();
        setBloodInventories(data);
      } catch (err) {
        setError('Failed to fetch blood inventories');
      } finally {
        setLoading(false);
      }
    };

    fetchBloodInventories();
  }, []);

  return (
    <div>
      <h1>Blood Inventories</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Barcode</th>
              <th>Donation Date</th>
              <th>Blood Type</th>
              <th>Quantity (ml)</th>
            </tr>
          </thead>
          <tbody>
            {bloodInventories.map((inventory, index) => (
              <tr key={index}>
                <td>{inventory.barcode}</td>
                <td>{inventory.donationDate}</td>
                <td>{inventory.bloodType}</td>
                <td>{inventory.quantityml} units</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default BloodInventoryPage;
