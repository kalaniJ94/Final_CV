// schema fro planet model
const { Schema, model } = require('mongoose');

const planetSchema = new Schema(
    {
        planetId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        planetName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            data: Buffer,
            contentType: String,
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Planet = model('Planet', planetSchema);
module.exports = Planet;