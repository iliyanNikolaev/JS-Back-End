const { Schema, model, Types } = require('mongoose');

const laptopSchema = new Schema({
    brand: { type: [Types.ObjectId], default: [], ref: "Brand" },
    cpu: { type: [Types.ObjectId], default: [], ref: "Processor" },
    gpu: { type: [Types.ObjectId], default: [], ref: "VideoCard" },
    ssd: String,
    price: Number
});

const Laptop = model('Laptop', laptopSchema);

module.exports = Laptop;