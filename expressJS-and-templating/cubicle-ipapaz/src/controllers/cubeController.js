const cubeController = require('express').Router();

const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

cubeController.get('/create', (req, res) => {
    res.render('create');
});

cubeController.post('/create', async (req, res) => {
    const cube = new Cube(req.body);

    await cube.save();

    res.redirect('/');
});

cubeController.get('/details/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;

    if(!cubeId){
        return res.redirect('/404');
    }

    const cube = await Cube.findById(cubeId).lean();
    
    if(!cube){
        return res.redirect('/404');
    }

    
    res.render('details', { cube });
});

cubeController.get('/atach/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;

    try {
        const cube = await Cube.findById(cubeId).lean();
        const accessories = await Accessory.find({}).lean();
        
        res.render('atachAccessory', { cube, accessories });

    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});


module.exports = cubeController;