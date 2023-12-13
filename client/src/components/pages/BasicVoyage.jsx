import {React, useState} from "react";
import Navigation from "./Navigation";
import { Container, Image, Col, Card, Row, Button } from "react-bootstrap";


import planet3 from "../../assets/images/planet3.png";
import planet5 from "../../assets/images/planet5.png";
import planet7 from "../../assets/images/planet7.png";


function BasicVoyage() {
    
    const handlePlanetClick = (planetName) => {
        if (hoveredPlanet && hoveredPlanet.name === planets[planetName].name) {
          // If the clicked planet is already being displayed, hide it
          setHoveredPlanet(null);
        } else {
          // Otherwise, show the clicked planet's information
          setHoveredPlanet(planets[planetName]);
        }
      };
    const planets = {
        'Planet 3': {
          name: 'Vulcanis Inferna',
          description: `Step into the realm of Vulcanis Inferna, a planet that pulsates with the power of nature's most formidable force – volcanoes. This is a world where the ground thrums with the heartbeat of the planet, and the skies are painted with the fiery hues of molten rivers. Experience the thrill of Vulcanis Inferna's most unique attraction – the Ashen Forest. This surreal landscape, blanketed in volcanic ash, is home to an array of exotic, resilient wildlife that has adapted to thrive in this harsh environment. Their existence is a fascinating study in survival and adaptation.`
        },
        'Planet 5': {
          name: 'Zephyria',
          description: `Embark on a journey to Zephyria, a striking planet distinguished by its unique brown and white landscapes. This mesmerizing world offers a visual spectacle unlike any other, with its contrasting colors creating a stunning, natural mosaic visible even from space.`
        },
        'Planet 7': {
          name: 'Coloris Orbis',
          description: `Coloris Orbis beckons the intrepid and the artistic alike to its kaleidoscopic realm, a planet where nature's palette comes to life. The planet's surface, a masterpiece of swirling colors and mesmerizing patterns, rivals the greatest works found in the galaxy's finest art galleries. Begin your journey above the Stratochromatic Clouds, where hot air balloon tours provide a serene vantage point to appreciate the full spectrum of the planet's vibrant hues. The clouds here are not mere vapor; they are a visual symphony, with each swirl telling tales of the atmospheric alchemy at play.`
        }
      };
const [hoveredPlanet, setHoveredPlanet] = useState(null);

return (
    <div>
      <Navigation />
      <Container className="introMap">
        <h1>Basic Voyage</h1>
      </Container>
      <Container id="bigContainer">
        {/* Planet Buttons */}
        <Button className="planetButton planet3" onClick={() => handlePlanetClick('Planet 3')}>
          <Image className="planetPhoto" src={planet3} />
        </Button>
        
        <Button className="planetButton planet5" onClick={() => handlePlanetClick('Planet 5')}>
          <Image className="planetPhoto" src={planet5} />
        </Button>
        
        <Button className="planetButton planet7" onClick={() => handlePlanetClick('Planet 7')}>
          <Image className="planetPhoto" src={planet7} />
        </Button>

        {/* Planet Information Display */}
        {hoveredPlanet && (
          <div className="planetInfo">
            <h2>{hoveredPlanet.name}</h2>
            <p>{hoveredPlanet.description}</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default BasicVoyage;