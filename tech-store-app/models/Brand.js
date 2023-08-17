const { Schema, model, Types } = require('mongoose');

const brandSchema = new Schema({
    title: String,
    laptops: { type: [Types.ObjectId], default: [], ref: 'Laptop' },
    computers: { type: [Types.ObjectId], default: [], ref: 'Computer' }
});

const Brand = model('Brand', brandSchema);

module.exports = Brand;