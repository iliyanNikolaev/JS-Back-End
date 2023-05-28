const cubeController = require('express').Router();

const Cube = require('../models/Cube');

cubeController.get('/create', (req, res) => {
    res.render('create');
});

cubeController.post('/create', async (req, res) => {
    const cube = new Cube(req.body);

    await cube.save();

    res.redirect('/');
});

cubeController.get('/details/:cubeId', (req, res) => {
    const cubeId = Number(req.params.cubeId);

    if(!cubeId){
        return res.redirect('/404');
    }

    const cube = db.cubes.find(x => x.id == cubeId);
    
    if(!cube){
        return res.redirect('/404');
    }

    res.render('details', { cube });
});


module.exports = cubeController;