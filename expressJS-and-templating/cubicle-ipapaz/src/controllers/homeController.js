const homeController = require('express').Router();
const db = require('../db.json');

homeController.get('/', (req, res) => {
    
    res.render('index', {cubes: db.cubes});
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

module.exports = homeController;