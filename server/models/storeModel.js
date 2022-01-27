import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        locationImage: {
            type: String,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            default: 0
        },
        review: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

const Store = mongoose.model('Store', storeSchema);

export default Store;
