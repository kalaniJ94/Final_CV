// user routes
const router = require('express').Router();
const { model } = require('mongoose');

// import controller methods
const {
    createUser,
    loginUser,
    deleteUser
} = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth')
// routes
// https://localhost:3001/api/profile
router.route('/').post(createUser);
// https://localhost:3001/api/profile/login
router.route('/login').get(loginUser);
// https://localhost:3001/api/profile/:userId
router.route('/:userId').delete(deleteUser);



model.exports = router;