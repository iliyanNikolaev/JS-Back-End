const hbs = require('express-handlebars');

function setupViewEngine(app) {
    app.engine('hbs', hbs.engine({
        extname: 'hbs' // extention 
    }));

    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}

module.exports = setupViewEngine;