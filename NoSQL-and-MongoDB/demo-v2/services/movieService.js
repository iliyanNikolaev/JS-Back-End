const Movie = require('../models/Movie');
const Comment = require('../models/Comment');

async function getAllMovies() {
    return Movie.find({}).populate({ path: 'comments', model: Comment }).lean();
}

async function createNewMovie(movieData) {
    return Movie.create(movieData);
}

async function getMovieById(movieId) {
    return Movie.findById(movieId).lean();
}

module.exports = {
    getAllMovies,
    createNewMovie,
    getMovieById
}