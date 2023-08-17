const express = require('express');
const hbs = require('express-handlebars');

const handlebars = hbs.create({
    extname: '.hbs'
});

function expressConfig(app) {
    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    
    app.use(express.static('static'));
    app.use(express.urlencoded({
        extended: false
    }));
}

module.exports = expressConfig;