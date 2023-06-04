const authController = require('express').Router();
const authService = require('../services/authService');
const generateErrorMessage = require('../utils/errorsUtil');

authController.get('/login', (req, res) => {
    res.render('login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password); // получава токен от authService след успешно логване

        res.cookie('auth', token); // слагаме токена в cookie, за да можем да проверим по-нататък в приложението има ли потребител
    
        res.redirect('/');   
    } catch (err) {
        res.render('login', {error: generateErrorMessage(err)});
    }
});


authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        const token = await authService.register(username, email, password, repeatPassword); // това получава токен от authService

        res.cookie('auth', token); // слагаме токена в cookie, за да можем да проверим по-нататък в приложението има ли потребител

        res.redirect('/');
    } catch (err) {
        res.status(404).render('register', { error: generateErrorMessage(err) });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = authController;