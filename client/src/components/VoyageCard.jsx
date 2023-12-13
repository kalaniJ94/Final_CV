import Card from 'react-bootstrap/Card';

import '../style/voyages.css'

function VoyageCard({title, price, destinations}) {
    return (
    <div className='card-container'>
        <Card className='card-element'>
        <Card.Img variant="top" src='https://images.unsplash.com/photo-1519677100203-a0e668c924d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dm95YWdlJTIwY2FyZCUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' style={{width: '100%', height: '50%'}} />
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