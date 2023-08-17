const { Schema, model, Types } = require('mongoose');

const computerSchema = new Schema({
    brand: { type: [Types.ObjectId], default: [], ref: "Brand" },
    cpu: { type: [Types.ObjectId], default: [], ref: "Processor" },
    gpu: { type: [Types.ObjectId], default: [], ref: "VideoCard" },
    ssd: String,
    price: Number
});

const Computer = model('Computer', computerSchema);

module.exports = Computer;