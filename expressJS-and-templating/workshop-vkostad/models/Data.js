const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true},
    beds: { type: Number, required: true, min: 1},
    price: { type: Number, required: true, min: 1 }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;