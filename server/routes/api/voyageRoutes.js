// voyage routes
const router = require('express').Router();

// import controller methods
const {
    getAllVoyages,
    getSingleVoyage,
    createVoyage,
    deleteVoyage
} = require('../../controllers/voyageControllers.js');

// routes
// https://localhost:3001/api/voyages
router.route('/').get(getAllVoyages);

// // https://localhost:3001/api/voyages/:voyageId

router.route('/:voyageId').get(getSingleVoyage);
// // https://localhost:3001/api/voyage/:userId
router.route('/:userId').post(createVoyage);
// // https://localhost:3001/api/voyage/:userId/:voyageId
router.route('/:userId/:voyageId').delete(deleteVoyage);

module.exports = router;