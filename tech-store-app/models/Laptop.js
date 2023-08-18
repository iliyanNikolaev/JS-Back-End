const { Schema, model, Types } = require('mongoose');

const laptopSchema = new Schema({
    brand: String,
    cpu: String,
    gpu: String,
    ssd: String,
    ram: String,
    price: Number,
    owner: { type: Types.ObjectId, ref: "User" }
});

const Laptop = model('Laptop', laptopSchema);

module.exports = Laptop;