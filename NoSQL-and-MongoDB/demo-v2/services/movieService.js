const Movie = require('../models/Movie');
const Comment = require('../models/Comment');
const Category = require('../models/Category');

async function getAllMovies() {
    return Movie.find({}).populate({ path: 'comments', model: Comment }).populate({ path: 'categories', model: Category }).lean();
}

async function createNewMovie(movieData) {
    Movie.create(movieData);
}

async function getMovieById(movieId) {
    return Movie.findById(movieId).lean();
}

module.exports = {
    getAllMovies,
    createNewMovie,
    getMovieById
}