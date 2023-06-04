const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    console.log(req.user);
    res.render('home');
});

module.exports = homeController;