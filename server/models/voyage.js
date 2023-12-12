// schema for the voyage model
const { Schema, model, Types } = require('mongoose');

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
            type: String,
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