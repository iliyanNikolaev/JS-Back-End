const { Schema, model, Types } = require('mongoose');

const proccessorSchema = new Schema({
    title: String,
    laptops: { type: [Types.ObjectId], default: [], ref: 'Laptop' },
    computers: { type: [Types.ObjectId], default: [], ref: 'Computer' }
});

const Processor = model('Proccessor', proccessorSchema);

module.exports = Processor;