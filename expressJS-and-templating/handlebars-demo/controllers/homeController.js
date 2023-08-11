const catalogController = require('express').Router();

catalogController.get('/', (req, res) => {
    res.render('home');
});

catalogController.get('/about', (req, res) => {
    res.render('about');
})

module.exports = catalogController;