const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');

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
app.use('/catalog', catalogController);
app.use('/create', createController);

app.listen(6161, () => console.log('server is listenning on port 6161...'))