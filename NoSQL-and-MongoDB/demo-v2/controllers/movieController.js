const movieController = require('express').Router();
const { getAllMovies } = require('../services/movieService')

movieController.get('/', async (req, res) => {
    const movies = await getAllMovies();

    res.render('movies', {
        movies
    });
});

module.exports = movieController;