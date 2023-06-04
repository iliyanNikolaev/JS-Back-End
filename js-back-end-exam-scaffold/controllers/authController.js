const authController = require('express').Router();
const authService = require('../services/authService');

authController.get('/login', (req, res) => {
    res.render('login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    res.cookie('auth', token);

    res.redirect('/');
});


authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await authService.register(username, email, password, repeatPassword);
        res.redirect('/login')
    } catch (err) {
        console.log(err.message)
        //todo... error handling
    }
});

module.exports = authController;