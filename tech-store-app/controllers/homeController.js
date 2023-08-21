const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    const userData = req.userData;

    res.render('home', {
        userData
    });
});

module.exports = homeController;