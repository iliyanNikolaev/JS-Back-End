const { Schema, model, Types } = require('mongoose');

const categorySchema = new Schema({
    category: { type: String, required: true },
    movies: { type: [Types.ObjectId], default: [], ref: 'Movie'}
});

const Category = model('Category', categorySchema);

module.exports = Category;