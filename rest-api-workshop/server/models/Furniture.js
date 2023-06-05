const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    material: {
        type: String
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;

