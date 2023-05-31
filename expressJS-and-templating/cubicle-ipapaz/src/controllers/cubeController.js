const cubeController = require('express').Router();

const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const { isAuthenticated } = require('../middlewares/authMiddleware');
const { getCubeById } = require('../services/cubeService');

cubeController.get('/create', isAuthenticated, (req, res) => {
    res.render('create');
});

cubeController.post('/create', isAuthenticated, async (req, res) => {
    const cube = new Cube(req.body);

    await cube.save();

    res.redirect('/');
});

cubeController.get('/details/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;

    if (!cubeId) {
        return res.redirect('/404');
    }

    try {
        const cube = await Cube.findById(cubeId).populate('accessories').lean();

        if (!cube) {
            return res.redirect('/404');
        }


        res.render('details', { cube });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }

});

cubeController.get('/atach/:cubeId', isAuthenticated, async (req, res) => {
    const cubeId = req.params.cubeId;

    try {
        const cube = await Cube.findById(cubeId).lean();
        const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();
        // ще върне всички аксесоари от базата на които ид-то им не се намира в масива с аксесоари на конкретния елемент
        res.render('atachAccessory', { cube, accessories });

    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

cubeController.post('/atach/:cubeId', isAuthenticated, async (req, res) => {
    try {
        const cube = await Cube.findById(req.params.cubeId);
        
        const accessoryId = req.body.accessory;

        cube.accessories.push(accessoryId);

        cube.save();

        res.redirect(`/details/${req.params.cubeId}`);
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }

});

cubeController.get('/edit/:cubeId', isAuthenticated, async (req, res) => {
    try {
        const cube = await getCubeById(req.params.cubeId).lean();

        res.render('edit', { cube });
    } catch (err) {
        console.log(err.message)
        res.redirect('/404');
    }
})

cubeController.post('edit/:cubeId', isAuthenticated, (req, res) => {

})

module.exports = cubeController;