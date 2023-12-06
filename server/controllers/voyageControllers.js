// imports
const Voyage = require('../models/voyage');
const User = require('../models/user');

module.exports = {
    // get a specified voyage and add it to the users list of voyages
    async getVoyage(req, res) {
        try {
            const voyage = await Voyage.findOne({ _id: req.params.voyageId });
            if (!voyage) {
                return res.status(404).json({ message: 'Something went wrong please try again' });
            }
            res.status(200).json(voyage);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // create a voyage for the user
    async createVoyage(req, res) {
        try {
            // find a user and update their voyages array
            const usersVoyage = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { voyages: req.body } },
                { runValidators: true, new: true }
            );
            if (!usersVoyage) {
                return res.status(404).json({ message: 'no user found please sign in or try again!' });
            }
            res.json({ message: 'your voyage has been created!', user: usersVoyage });

        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    // remove the voyage from the users list of voyages if they delete it
    async deleteVoyage(req, res) {
        try {
            const voyage = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { voyages: { _id: req.params.voyageId } } },
                { runValidators: true, new: true }
            );
            if (!voyage) {
                return res.status(404).json({ message: 'no user found please sign in or try again!' });
            }
            res.json(voyage);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
}