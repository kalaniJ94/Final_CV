import React, { useState } from 'react';
import Navigation from './Navigation';
import { Container, Image, Button } from 'react-bootstrap';

import planet8 from '../../assets/images/planet8.png';
import planet9 from '../../assets/images/planet9.png';
import planet10 from '../../assets/images/planet10.png';
import planet11 from '../../assets/images/planet11.png';
import planet12 from '../../assets/images/planet12.png';

function GalaxyMap() {
    const [hoveredPlanet, setHoveredPlanet] = useState(null);

    const planets = {
        'Planet 8': {
            name: 'Coralline Nebulae',
            description: `Welcome to Coralline Nebulae, a world where the line between ocean and sky is blurred, a planet that appears as a living, breathing organism in the vastness of space. With its surreal landscapes that seem to pulse with life, Coralline Nebulae offers a journey for those who seek wonder in the most unexpected of forms.
            Ascend to the Observation Spires, towering structures that offer an unobstructed view of the planet's surface, a tapestry of organic shapes and vibrant colors. From this vantage point, witness the Coral Mists, atmospheric phenomena that cast a soft, ethereal glow over the unique topography.`
        },
        'Planet 9': {
            name: 'Dulcia Orbita',
            description: `This is Dulcia Orbita, a planet where confectionery dreams come true, and the landscapes are as delicious as they are delightful. From the Cotton Candy Clouds to the Chocolate Chasm, every corner of Dulcia Orbita promises an adventure in flavor and fun. Begin your visit at the Sugardust Plains, where the ground sparkles with a fine coating of candy dust. Here, the air is filled with the scent of fresh caramel, and the horizon glimmers with a spectrum of saccharine hues. Dulcia Orbita is not just a planet; it's a celebration of the imagination, a place where joy is measured in bites and licks, and every trail leads to delicious discovery.`
        },
        'Planet 10': {
            name: 'Aridius Prime',
            description: `Journey to the far reaches of the galaxy to Aridius Prime, a desert planet where the sands of time stretch endlessly across horizons. This stark and beautiful world is a tapestry of golden dunes, rocky plateaus, and ancient mysteries buried beneath the sun-baked surface.
            Start your adventure at the Dunes of Sighs, an ever-changing landscape sculpted by the winds into waves of sand that resemble a frozen ocean. The dunes sing a haunting melody as the sands shift, a natural phenomenon that has captivated travelers for eons.`
        },
        'Planet 11': {
            name: 'Spectra Maximus',
            description: `Welcome to Spectra Maximus, a planet where the very fabric of reality seems infused with psychedelic brilliance. This is a world where nature has abandoned all restraint, painting itself with an impossible palette of vibrant hues that challenge the imagination and delight the senses.
            As you orbit this extraordinary world, you’ll first notice the Chromatic Oceans, vast bodies of water shimmering in a thousand shades, with waves that ripple with liquid rainbows. Here, the beaches glint with multi-colored sands, ranging from deep purples to electric greens, leading to forests with jewel-toned foliage. Spectra Maximus is an experience that will expand your perception of color and beauty, leaving you with memories vibrant enough to last a lifetime.`
        },
        'Planet 12': {
            name: 'Verdantia Secreto',
            description: `From afar, Verdantia Secreto may seem like any other celestial body—a modest sphere adrift in the cosmos. But those who dare to venture closer will discover a planet pulsing with life, its unremarkable exterior a humble veil over the treasure trove of biodiversity it holds within.
            As you descend through the unassuming cloud cover, a vibrant tapestry of emerald and jade unfolds beneath you. The sprawling rainforests of Verdantia Secreto are a biologist's dream, a sanctuary where nature has crafted an intricate web of life in every layer from the forest floor to the canopy.`
        }
    };

    const handlePlanetClick = (planetName) => {
        if (hoveredPlanet && hoveredPlanet.name === planets[planetName].name) {
          // If the clicked planet is already being displayed, hide it
          setHoveredPlanet(null);
        } else {
          // Otherwise, show the clicked planet's information
          setHoveredPlanet(planets[planetName]);
        }
      };
    return (
        <div>
            <Navigation />
            <Container className="introMap">
                <h1>Premium Voyage</h1>
            </Container>
            <Container id="bigContainer">
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

export default GalaxyMap;