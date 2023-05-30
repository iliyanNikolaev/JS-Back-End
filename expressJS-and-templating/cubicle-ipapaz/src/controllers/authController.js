const authController = require('express').Router();

authController.get('/login', (req, res) => {
    res.render('login');
});

authController.post('/login', (req, res) => {

});

authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register', (req, res) => {
    
});

module.exports = authController;