const { getUserByUsername, register } = require('../services/authService');

const authController = require('express').Router();

authController.get('/login', (req, res) => {
    res.render('login');
});

authController.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await getUserByUsername(username);

        if(!user){
            throw new Error('Username or password dont match!');
        }
    
        const isValid = await user.validatePassword(password);
    
        if(!isValid){
            throw new Error('Username or password dont match!');
        }
        
        console.log(user);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if(password != repeatPassword){
        return res.redirect('/404');
    }

    try {
        const existingUser = await getUserByUsername(username);

        if(existingUser){
            return res.redirect('/404');
        }

        const user = await register(username, password);

        res.redirect('/login');
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

module.exports = authController;