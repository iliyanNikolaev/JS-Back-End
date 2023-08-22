const authController = require('express').Router();

const { login, register } = require('../services/userService');

authController.get('/login', (req, res) => {
    res.render('login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if(email != '' && password != '') {
        try {
            const token = await login(email, password)
            res.cookie('token', token);
            res.redirect('/');
        } catch (err) {
            res.send(err.message);
        }

    } else {
        res.send('Please fill all fields');
    }
});

authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if(email !== '' && password != '') {

        try {
            await register(email, password);
            const token = await login(email, password);
            res.cookie('token', token);
            res.redirect('/');
        } catch (err) {
            res.send(err.message);
        }
    } else {
        res.send('Please fill all fields')
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('token');

    res.redirect('/');
});


module.exports = authController;