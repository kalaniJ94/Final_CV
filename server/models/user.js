// mongoose imports
const { Schema, model, Types} = require('mongoose');

// Schema to create the user model
const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // validation regex
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid e-mail address']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        voyages: [{
                type: Schema.Types.ObjectId,
                ref: 'Voyage'
            }]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const User = model('User', userSchema);
module.exports = User;