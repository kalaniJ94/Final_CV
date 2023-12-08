
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const voyageRoutes = require('./voyageRoutes');

router.use('/user', userRoutes);
router.use('/voyages', voyageRoutes);

module.exports = router;