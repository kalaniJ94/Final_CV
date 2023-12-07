const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const connection = require("../config/connection");
const Planet = require("../models/planet");

connection.on("error", (err) => console.error('MongoDB connection error:', err));
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
  insertPlanets(); // Call the function to insert planets once the connection is open
});

function readImageFile(filePath) {
  const absolutePath = path.join(__dirname, filePath); // Ensure the path is absolute
  const imageBuffer = fs.readFileSync(absolutePath);
  const imageContentType = "image/png"; // Ensure this matches the actual image type (e.g., image/jpeg for .jpg)
  return { data: imageBuffer, contentType: imageContentType };
}

// Sample data
const seedPlanets = [
  {
    planetName: "Terra Nova",
    description: `Discover the wonders of Terra Nova, a planet that mirrors the beauty of Earth yet offers its own unique charms and mysteries. This jewel of the galaxy is a haven for explorers and dreamers alike, boasting diverse landscapes, rich cultures, and an abundance of natural wonders.`,
    image: readImageFile("../../client/src/assets/images/planet1.png"),
  },
  {
    planetName: "Aquaterra",
    description: `Welcome to Aquaterra, a mesmerizing water world where the ocean stretches to every horizon, sparkling under a radiant sky. Aquaterra is a paradise for those who seek tranquility and adventure alike, offering an endless expanse of deep blue mystery. Don't miss the chance to visit the Floating Markets, a collection of interconnected rafts and platforms where you can shop for exotic seafood, handcrafted trinkets, and artifacts from shipwrecks. In the evenings, relax on the deck of a luxury yacht and gaze at the stars, reflecting off the serene waters, as the gentle waves rock you into a peaceful slumber.`,
    image: readImageFile("../../client/src/assets/images/planet2.png"),
  },
  {
    planetName: "Vulcanis Inferna",
    description: `Step into the realm of Vulcanis Inferna, a planet that pulsates with the power of nature's most formidable force – volcanoes. This is a world where the ground thrums with the heartbeat of the planet, and the skies are painted with the fiery hues of molten rivers. Experience the thrill of Vulcanis Inferna's most unique attraction – the Ashen Forest. This surreal landscape, blanketed in volcanic ash, is home to an array of exotic, resilient wildlife that has adapted to thrive in this harsh environment. Their existence is a fascinating study in survival and adaptation.`,
    image: readImageFile("../../client/src/assets/images/planet3.png"),
  },
  {
    planetName: "Glacius Prime",
    description: `Come on a journey through our renowned Ice Canyons, where the walls glisten in shades of blue and white, creating a surreal, otherworldly environment. Don't miss the famous Frozen Lakes, crystal-clear and smooth as glass, offering an ice-skating experience unlike any other. Glacius Prime is not just a destination; it's an experience. From our friendly Snowfolk villagers to the rare, majestic Frostwing birds, the planet's native wildlife adds to the charm and wonder of this icy paradise.`,
    image: readImageFile("../../client/src/assets/images/planet4.png"),
  },
  {
    planetName: "Zephyria",
    description: `Embark on a journey to Zephyria, a striking planet distinguished by its unique brown and white landscapes. This mesmerizing world offers a visual spectacle unlike any other, with its contrasting colors creating a stunning, natural mosaic visible even from space.`,
    image: readImageFile("../../client/src/assets/images/planet5.png"),
  },
  {
    planetName: "Azureus Stratus",
    description: `Welcome to Azureus Stratus. Experience zero-gravity excursions within the upper cloud layers of the planet, where you can float among the ethereal cloudscapes and feel the gentle undulations of this giant world's atmosphere. For those interested in atmospheric sciences, Azureus Stratus offers an unparalleled opportunity to study complex weather systems up close. Though you cannot set foot on its surface, the experiences to be had around Azureus Stratus are as boundless as its skies. The planet's many moons offer additional adventures, from ice-covered landscapes to hidden subsurface oceans, each with its own secrets to unveil.`,
    image: readImageFile("../../client/src/assets/images/planet6.png"),
  },
  {
    planetName: "Coloris Orbis",
    description: `Coloris Orbis beckons the intrepid and the artistic alike to its kaleidoscopic realm, a planet where nature's palette comes to life. The planet's surface, a masterpiece of swirling colors and mesmerizing patterns, rivals the greatest works found in the galaxy's finest art galleries. Begin your journey above the Stratochromatic Clouds, where hot air balloon tours provide a serene vantage point to appreciate the full spectrum of the planet's vibrant hues. The clouds here are not mere vapor; they are a visual symphony, with each swirl telling tales of the atmospheric alchemy at play.`,
    image: readImageFile("../../client/src/assets/images/planet7.png"),
  },
  {
    planetName: "Coralline Nebulae",
    description: `Welcome to Coralline Nebulae, a world where the line between ocean and sky is blurred, a planet that appears as a living, breathing organism in the vastness of space. With its surreal landscapes that seem to pulse with life, Coralline Nebulae offers a journey for those who seek wonder in the most unexpected of forms.
    Ascend to the Observation Spires, towering structures that offer an unobstructed view of the planet's surface, a tapestry of organic shapes and vibrant colors. From this vantage point, witness the Coral Mists, atmospheric phenomena that cast a soft, ethereal glow over the unique topography.`,
    image: readImageFile("../../client/src/assets/images/planet8.png"),
  },
  {
    planetName: "Dulcia Orbita",
    description: `This is Dulcia Orbita, a planet where confectionery dreams come true, and the landscapes are as delicious as they are delightful. From the Cotton Candy Clouds to the Chocolate Chasm, every corner of Dulcia Orbita promises an adventure in flavor and fun. Begin your visit at the Sugardust Plains, where the ground sparkles with a fine coating of candy dust. Here, the air is filled with the scent of fresh caramel, and the horizon glimmers with a spectrum of saccharine hues. Dulcia Orbita is not just a planet; it's a celebration of the imagination, a place where joy is measured in bites and licks, and every trail leads to delicious discovery.`,
    image: readImageFile("../../client/src/assets/images/planet9.png"),
  },
  {
    planetName: "Aridius Prime",
    description: `Journey to the far reaches of the galaxy to Aridius Prime, a desert planet where the sands of time stretch endlessly across horizons. This stark and beautiful world is a tapestry of golden dunes, rocky plateaus, and ancient mysteries buried beneath the sun-baked surface.
    Start your adventure at the Dunes of Sighs, an ever-changing landscape sculpted by the winds into waves of sand that resemble a frozen ocean. The dunes sing a haunting melody as the sands shift, a natural phenomenon that has captivated travelers for eons.`,
    image: readImageFile("../../client/src/assets/images/planet10.png"),
  },
  {
    planetName: "Spectra Maximus",
    description: `Welcome to Spectra Maximus, a planet where the very fabric of reality seems infused with psychedelic brilliance. This is a world where nature has abandoned all restraint, painting itself with an impossible palette of vibrant hues that challenge the imagination and delight the senses.
    As you orbit this extraordinary world, you’ll first notice the Chromatic Oceans, vast bodies of water shimmering in a thousand shades, with waves that ripple with liquid rainbows. Here, the beaches glint with multi-colored sands, ranging from deep purples to electric greens, leading to forests with jewel-toned foliage. Spectra Maximus is an experience that will expand your perception of color and beauty, leaving you with memories vibrant enough to last a lifetime.`,
    image: readImageFile("../../client/src/assets/images/planet11.png"),
  },
  {
    planetName: "Verdantia Secreto",
    description: `From afar, Verdantia Secreto may seem like any other celestial body—a modest sphere adrift in the cosmos. But those who dare to venture closer will discover a planet pulsing with life, its unremarkable exterior a humble veil over the treasure trove of biodiversity it holds within.
    As you descend through the unassuming cloud cover, a vibrant tapestry of emerald and jade unfolds beneath you. The sprawling rainforests of Verdantia Secreto are a biologist's dream, a sanctuary where nature has crafted an intricate web of life in every layer from the forest floor to the canopy.`,
    image: readImageFile("../../client/src/assets/images/planet12.png"),
  },
];

function insertPlanets() {
  // Insert data into the database
  Planet.insertMany(seedPlanets)
    .then((res) => {
      console.log("Planets added:", res);
      connection.close(); // Close the connection once the operation is complete
    })
    .catch((e) => {
      console.error("Error adding planets:", e);
      connection.close();
    });
}
