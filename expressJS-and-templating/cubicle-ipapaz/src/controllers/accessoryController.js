const accessoryController = require('express').Router();

accessoryController.get('/create' , (req, res) => {
    res.render('createAccessory');
});

module.exports = accessoryController;