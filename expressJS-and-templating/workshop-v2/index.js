const express = require('express');
const hbs = require('express-handlebars');

const homeController = require('./controllers/homeController');
const notFound = require('./controllers/404Controller');

const handlebars = hbs.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.static('static'));
app.use(express.urlencoded({
    extended: false
}));

app.use(homeController);

app.all('*', notFound); // 404

app.listen(6161, () => console.log('Server is listening on port 6161...'));