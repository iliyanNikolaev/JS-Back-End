const { Schema, model, Types } = require('mongoose');

const movieSchema = new Schema({
    author: String,
    title: { type: String, required: true },
    description: { type: String, required: true },
    comments: { type: [Types.ObjectId], default: [], ref: 'Comment'}
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;