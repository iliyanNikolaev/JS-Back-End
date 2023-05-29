const Accessory = require('../models/Accessory');

const accessoryController = require('express').Router();

accessoryController.get('/create' , (req, res) => {
    res.render('createAccessory');
});

accessoryController.post('/create' , async (req, res) => {
    const accessory = new Accessory(req.body);

    await accessory.save();

    res.redirect('/');
});


module.exports = accessoryController;