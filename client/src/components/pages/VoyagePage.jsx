import Navigation from "./Navigation";
import React from "react";
import VoyageCard from '../VoyageCard';

function Voyages() {
  // Hardcoded data for voyages
  const voyages = [
    {
      _id: '1',
      title: 'Basic Celestial Odyssey',
      price: '$1,000,000',
      destinations: 'Vulcanis Inferna, Zephyria, Coloris Orbis',
      imageIndex: 0,
    },
    {
      _id: '2',
      title: 'Premium Galactic Getaway',
      price: '$5,000,000',
      destinations: 'Coralline Nebulae, Dulcia Orbita, Aridius Prime, Spectra Maximus, Verdantia Secreto',
      imageIndex: 1,
    },
  ];

  return (
    <div style={{ flex: 1 }}>
      <Navigation />
      <p className="pickVoyage">Please choose your voyage from the options below!</p>
      
      <div className="form-element">
        {voyages.map((voyage, index) => (
          <VoyageCard
            key={voyage._id}
            title={voyage.title}
            price={voyage.price}
            destinations={voyage.destinations.split(', ')} 
            imageIndex={index % 2} // Alternate between 0 and 1 for each card
          />
        ))}
      </div>
    </div>
  );
}

export default Voyages;