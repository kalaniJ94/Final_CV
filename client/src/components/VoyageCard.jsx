import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';

import '../style/voyages.css'

import image1 from  '../../src/assets/images/vacay1.png'
import image2 from  '../../src/assets/images/vacay2.png'

const images = [image1, image2]


function VoyageCard({ title, price, destinations, imageIndex }) {


  const routePath = title === 'Basic Celestial Odyssey' ? '/basicVoyage' : '/premiumVoyage';
    return (
      <div className='card-container'>
      <Link to={routePath}>
        <Card className='card-element'>
          <Card.Img variant="top" src={images[imageIndex]} />
      
          <Card.Body className='card-body'>
              <Card.Title className='title'><strong>{title}</strong></Card.Title>
              <Card.Text className='price'>
                ${price}
              </Card.Text>
              <Card.Text className='destinations'>
                <strong>Destinations</strong>
                {destinations.map((destination, index) => (
                  <li key={index} style={{listStyle: 'none'}}>{destination}</li>
                ))}
              </Card.Text>
              <Card.Text className='booking-text'>
                CLICK to book your voyage.
              </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default VoyageCard;