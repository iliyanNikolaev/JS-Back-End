const createController = require('express').Router();
const Cube = require('../models/Cube');
createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', (req, res) => {
    const cube = new Cube(req.body);

    Cube.save(cube);

    res.redirect('/');
});

module.exports = createController;