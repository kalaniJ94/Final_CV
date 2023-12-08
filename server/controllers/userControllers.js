//imports 
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = 'test_secret';

module.exports = {
    // create user
    async createUser(req, res) {
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'Please enter a username, email, and password!' });
            }
            // check if user already exists throw an error
            const userExists = await User.findOne({ email });
            if (userExists) {
                return res.status(400).json({ message: 'User already exists!' });
            }
            // hash password w/ 10 hashed rounds
            const cryptPassword = await bcrypt.hash(password, 10);
            // create user
            const user = await User.create({ username, email, password: cryptPassword });
            console.log("user created successfully");
            // return user
            res.status(200).json(user);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // get user by login credentials using jwt
    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            // check if user exists
            const user = await User.findOne({ email });
            const validPassword = await bcrypt.compare(password, user.password);
            if (!user || !validPassword) {
                return res.status(400).json({ message: 'Invalid username or password' });
            }
            // create token using jwt sign in method 
            const token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, secret, { expiresIn: '2h' });
            // send token to client
            console.log("token created successfully: ", token);
            res.status(200).json({ token });
            // res.status(200).json({ token, user: { _id: user._id, username: user.username, email: user.email } });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // delete user by id
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'This user does not exist' });
            }
            res.status(200).json({ message: 'User deleted successfully!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}