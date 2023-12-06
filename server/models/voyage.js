// schema for the voyage model
const { Schema, model } = require('mongoose');

const voyageSchema = new Schema(
    {
        voyageId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        title: {
            type: String,
            required: true,        },
        price: {
            type: Number,
            required: true,
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        destinations: [{
            type: Schema.Types.ObjectId,
            ref: 'Planet'
        }],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Voyage = model('Voyage', voyageSchema);
module.exports = Voyage;