const movieController = require('express').Router();
const { getAllMovies, createNewMovie, getMovieById } = require('../services/movieService')

movieController.get('/', async (req, res) => {
    const movies = await getAllMovies();

    res.render('movies', {
        movies
    });
});

movieController.get('/create', (req, res) => {
    res.render('createMovie');
});

movieController.post('/create', async (req, res) => {
    const movieData = req.body;
    if(movieData.author != '' && movieData.title != '' && movieData.description != '' && movieData.imgURL != ''){
        try {
            await createNewMovie(movieData);
            res.redirect('/movies');
        } catch (err) {
            res.status(404).redirect('/404');
        }
    } else {
        res.send('<h1>Please fill all fields!</h1><a href="/movies/create">Go Back</a>');
    }
});

movieController.get('/details/:id', async (req, res) => {
    const movieId = req.params.id;

    const currentMovie = await getMovieById(movieId);

    if(currentMovie != undefined) {

        res.render('details', {
            movie: currentMovie
        });
    } else {
        res.status(404).render('404');
    }

});

module.exports = movieController;