const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.send('hello from home controller');
});

module.exports = homeController;