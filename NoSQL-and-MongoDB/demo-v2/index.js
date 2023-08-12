const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');

const handlebars = hbs.create({
    extname: '.hbs'
});

start();

async function start() {

    const app = express();

    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');

    app.use(express.static('static'));
    app.use(express.urlencoded({
        extended: false
    }));

    app.use(homeController);
    app.use('/movies', movieController);

    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

    console.log('DB connected.');

    app.listen(6161, () => console.log('Server listening on port 6161.'));
}


