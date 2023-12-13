import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';

import '../style/voyages.css'

import testImg from  '../assets/images/landingpage.png'

function VoyageCard({title, price, destinations}) {
    
    const routePath = title === 'Basic Celestial Odyssey' ? '/basicVoyage' : '/galaxyMap';

    return (
    <div className='card-container'>
        <Link to={routePath}>
        <Card className='card-element'>
        {/* <Card.Img variant="top" src={testImg} style={{width: '50%', height: '25%'}} /> */}
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
        </Card.Body>
        </Card>
        </Link>
        </div>
    );
}

export default VoyageCard;