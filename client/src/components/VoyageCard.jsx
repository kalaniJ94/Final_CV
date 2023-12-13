import Card from 'react-bootstrap/Card';

import '../style/voyages.css'

function VoyageCard({title, price, destinations}) {
    return (
    <div className='card-container'>
        <Card className='card-element'>
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
        </div>
    );
}

export default VoyageCard;