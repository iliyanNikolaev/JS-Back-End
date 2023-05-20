const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const homeController = require('./controllers/homeController');
const defaultController = require('./controllers/defaultController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const defaultTitle = require('./middlewares/defaultTitle');

const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true })); // forms
app.use('/static', express.static('static'));
app.use(defaultTitle('SoftUni Default Title'));
app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);


app.all('*', defaultController);



app.listen(6161, () => console.log('Server is listenning on port 6161...'));
