const { connect, connection } = require('mongoose');
require("dotenv").config();

const connectionString =
 'mongodb://127.0.0.1:27017/CelestialVoyagesDB';

connect(connectionString);

module.exports = connection;
