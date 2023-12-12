// file for voyage seeding
const connection = require("../config/connection");
const Voyage = require("../models/voyage");

// Sample data
// seeding planets into voyages
const seedVoyages = [
    {
      title: "Basic Celestial Odyssey",
      price: 1000000,
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-11-15"),
      destinations: ["Vulcanis Inferna", "Zephyria", "Coloris Orbis"]
    },
    {
      title: "Premium Galactic Getaway",
      price: 5000000,
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-02-15"),
      destinations: ["Coralline Nebulae", "Dulcia Orbita", "Aridius Prime", "Spectra Maximus", "Verdantia Secreto"]
    },
  ];

  connection.once("open", async () => {
    console.log("Connected to MongoDB");
    try {
        for (const seedVoyage of seedVoyages) {
            const planets = await Planet.find({});
            seedVoyage.destinations = planets.map((planet) => planet._id);
            const newVoyage = new Voyage(seedVoyage);
            await newVoyage.save();
            console.log(`Voyage successfully seeded: ${seedVoyage.title}`);
        }
        } catch (err) {
        console.error('Error during seeding:', err);
        connection.close();
        }
  });
  