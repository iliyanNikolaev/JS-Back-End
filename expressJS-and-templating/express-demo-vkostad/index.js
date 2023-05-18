const express = require('express');
const hbr = require('express-handlebars');
const app = express();
const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');

const handlebars = hbr.create({
    extname: '.hbs'
});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.use(express.urlencoded( {extended: false }));
app.use(express.static('static'));
app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);

app.listen(6161);

