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
        const response = await fetch('http://localhost:3000/api/voyages', Auth.withAuth());
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
    <div style={{ flex: 1 }}> {/* Add flex styling */}
      <Navigation />
      <p>Please choose your voyage from the options below!</p>
      <div>
        {voyages.map((voyage) => (
          <div key={voyage._id}>
            <h2>{voyage.title}</h2>
            {/* Render other voyage details */}
            <h3>{voyage.price}</h3>
            <h3>{voyage.startDate}</h3>
            <h3>{voyage.endDate}</h3>
            <h3>{voyage.destinations}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Voyages;