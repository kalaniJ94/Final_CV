
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.use((req, res) => res.send('Wrong Route! Invalid something!'));

module.exports = router;