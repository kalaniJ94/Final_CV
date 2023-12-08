// user routes
const router = require('express').Router();
const { model } = require('mongoose');

// import controller methods
const {
    createUser,
    loginUser,
    deleteUser,
} = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth')
// routes
// https://localhost:3001/api/user/login
router.route('/login').post(loginUser);
// https://localhost:3001/api/user
router.route('/').post(createUser);
// https://localhost:3001/api/user/:userId
router.route('/:userId').delete(deleteUser);

module.exports = router;