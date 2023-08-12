const Movie = require('../models/Movie');
const Comment = require('../models/Comment');

async function getAllMovies() {
    return Movie.find({}).populate({ path: 'comments', model: Comment }).lean();
}

module.exports = {
    getAllMovies
}