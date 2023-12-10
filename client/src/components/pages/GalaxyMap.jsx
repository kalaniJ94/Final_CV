import React from "react";
import Navigation from "./Navigation";
import { Container, Image, Col, Card, Row, Button } from "react-bootstrap";

import background1 from "../../assets/images/background1.png";
import planet1 from "../../assets/images/planet1.png";
import planet2 from "../../assets/images/planet2.png";
import planet3 from "../../assets/images/planet3.png";
import planet4 from "../../assets/images/planet4.png";
import planet5 from "../../assets/images/planet5.png";
import planet6 from "../../assets/images/planet6.png";
import planet7 from "../../assets/images/planet7.png";
import planet8 from "../../assets/images/planet8.png";
import planet9 from "../../assets/images/planet9.png";
import planet10 from "../../assets/images/planet10.png";
import planet11 from "../../assets/images/planet11.png";
import planet12 from "../../assets/images/planet12.png";





function GalaxyMap() {
    return (
        <div>
            <Navigation />
            <Container>
                <h1>GalaxyMap</h1>
            </Container>
            <Container id="bigContainer">
                        <Image id="galaxyMap" src={background1} alt="Travel Destinations map" />
                    <div id="planetCards">
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img id='planetImg' variant='top' src={planet1} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img variant='top' id='planetImg'  src={planet2} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet3} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet4} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet5} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet6} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet7} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet8} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet9} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet10} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet11} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                        <Card id="planet" style={{ width: '20rem', height: '25rem' }}>
                            <Card.Img 
                            id='planetImg' variant='top' src={planet12} />
                            <Card.Body>
                                <Card.Text>
                                    This is a planet.
                                </Card.Text>
                                <Button variant="primary">Book this planet.</Button>
                            </Card.Body>
                        </Card>
                    </div>
            </Container>
        </div>
    )
}

export default GalaxyMap;