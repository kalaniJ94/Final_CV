import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import Auth from '../../utils/auth.js';
import VoyageCard from '../VoyageCard';
import vacay1 from '../../assets/images/vacay1.png';

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
        setError(error.message || 'An error occurred while fetching voyages');
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
      
    <div className="form-element">
      {voyages.map((voyage, index) => (
        <VoyageCard
          key={voyage._id}
          title={voyage.title}
          price={voyage.price}
          destinations={voyage.destinations}
          imageIndex={index % 2} // Alternate between 0 and 1 for each card
        />
      ))}
    </div>
  </div>
);
}

export default Voyages;