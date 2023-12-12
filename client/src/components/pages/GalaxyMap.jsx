import {React, useState} from "react";
import Navigation from "./Navigation";
import { Container, Image, Col, Card, Row, Button } from "react-bootstrap";


import planet3 from "../../assets/images/planet3.png";
import planet5 from "../../assets/images/planet5.png";
import planet7 from "../../assets/images/planet7.png";
import planet8 from "../../assets/images/planet8.png";
import planet9 from "../../assets/images/planet9.png";
import planet10 from "../../assets/images/planet10.png";
import planet11 from "../../assets/images/planet11.png";
import planet12 from "../../assets/images/planet12.png";

function GalaxyMap() {
const [hoveredPlanet, setHoveredPlanet] = useState(null);

const handlePlanetHover = (planet) => {
    setHoveredPlanet(planet);
};
const handlePlanetLeave = () => {
    setHoveredPlanet(null);
} ;

return (
    <div>
        <Navigation />
        <Container className="introMap">
            <h1>Galaxy Destinations</h1>
            <h2>Select a planet to add to your voyage</h2>
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
            <Button className="planetButton planet8" onClick={() => handlePlanetClick('Planet 8')}>
                <Image className="planetPhoto" src={planet8} />
            </Button>
            <Button className="planetButton planet9" onClick={() => handlePlanetClick('Planet 9')}>
                <Image className="planetPhoto" src={planet9} />
            </Button>
            <Button className="planetButton planet10" onClick={() => handlePlanetClick('Planet 10')}>
                <Image className="planetPhoto" src={planet10} />
            </Button>
            <Button className="planetButton planet11" onClick={() => handlePlanetClick('Planet 11')}>
                <Image className="planetPhoto" src={planet11} />
            </Button>
            <Button className="planetButton planet12" onClick={() => handlePlanetClick('Planet 12')}>
                <Image className="planetPhoto" src={planet12} />
            </Button>


        </Container>
    </div>
    )
}

export default GalaxyMap;