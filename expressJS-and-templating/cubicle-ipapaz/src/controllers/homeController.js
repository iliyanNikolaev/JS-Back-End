const homeController = require('express').Router();
const db = require('../db.json');

homeController.get('/', (req, res) => {
    const {search, from, to} = req.query;
    
    let cubes = db.cubes;

    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        cubes = cubes.filter(cube => Number(cube.difficultyLevel) >= from);
    }

    if (to) {
        cubes = cubes.filter(cube => Number(cube.difficultyLevel) <= to);
    }


    res.render('index', { cubes, search, from, to });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

homeController.get('/404', (req, res) => {
    res.render('404');
});

module.exports = homeController;