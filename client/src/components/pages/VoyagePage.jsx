import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import Auth from '../../utils/auth.js';


function Voyages() {
  const [voyages, setVoyages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVoyages = async () => {
      try {
        const authHeaders = await Auth.withAuth();
        console.log('authHeaders', authHeaders);

        const response = await fetch('http://localhost:3000/api/voyages');
        console.log('response', response);
        if (!response.ok) {
          throw new Error('Failed to fetch voyages');
        }
        const data = await response.json();
        setVoyages(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message || 'An error occurred');
        setLoading(false);
      }
    };

    getVoyages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ flex: 1 }}>
    <Navigation />
    <p>Please choose your voyage from the options below!</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> {/* Card container styles */}
      {voyages.map((voyage) => (
        <div key={voyage._id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', width: '300px' }}> {/* Card styles */}
          <h2>{voyage.title}</h2>
          <h3>{voyage.price}</h3>
          <h3>{voyage.startDate}</h3>
          <h3>{voyage.endDate}</h3>
          <h3>Destinations:</h3>
          <ul>
            {voyage.destinations.map((destination, index) => (
              <li key={index}>{destination}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
}

export default Voyages;