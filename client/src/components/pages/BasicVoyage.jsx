import {React, useState} from "react";
import Navigation from "./Navigation";
import { Container, Image, Col, Card, Row, Button } from "react-bootstrap";


import planet3 from "../../assets/images/planet3.png";
import planet5 from "../../assets/images/planet5.png";
import planet7 from "../../assets/images/planet7.png";


function BasicVoyage() {
const [hoveredPlanet, setHoveredPlanet] = useState(null);

return (
    <div>
        <Navigation />
        <Container className="introMap">
            <h1>Basic Voyage</h1>
        </Container>
        <Container id="bigContainer">
            <Button className="planetButton planet3" onClick={() => handlePlanetClick('Planet 3')}>
                <Image className="planetPhoto" src={planet3} />
            </Button>
            
            <Button className="planetButton planet5" onClick={() => handlePlanetClick('Planet 5')}>
                <Image className="planetPhoto" src={planet5} />
            </Button>
            
            <Button className="planetButton planet7" onClick={() => handlePlanetClick('Planet 7')}>
                <Image className="planetPhoto" src={planet7} />
            </Button>

        </Container>
    </div>
    )
}

export default BasicVoyage;