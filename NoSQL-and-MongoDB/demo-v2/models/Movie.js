const { Schema, model, Types } = require('mongoose');

const movieSchema = new Schema({
    author: String,
    title: String,
    description: String,
    comments: { type: [Types.ObjectId], default: [], ref: 'Comment'}
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;