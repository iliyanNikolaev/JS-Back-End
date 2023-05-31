const Accessory = require('../models/Accessory');

const accessoryController = require('express').Router();

const { isAuthenticated } = require('../middlewares/authMiddleware')

accessoryController.get('/create' , isAuthenticated, (req, res) => {
    res.render('createAccessory');
});

accessoryController.post('/create' , isAuthenticated, async (req, res) => {
    const accessory = new Accessory(req.body);

    await accessory.save();

    res.redirect('/');
});


module.exports = accessoryController;