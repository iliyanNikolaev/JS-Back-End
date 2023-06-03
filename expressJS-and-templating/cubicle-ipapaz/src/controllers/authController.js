const { getUserByUsername, register } = require('../services/authService');
const AppError = require('../util/AppError');

const authController = require('express').Router();
const jwt = require('../lib/jsonwebtoken');


authController.get('/login', (req, res) => {
    res.render('login');
});

authController.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await getUserByUsername(username);

        if(!user){
            throw new AppError('Username or password dont match!');
        }
    
        const isValid = await user.validatePassword(password);
    
        if(!isValid){
            throw new AppError('Username or password dont match!');
        }

        const payload = { username: user.username, _id: user._id }; // това което подадем тук, ще ни бъде върнато при verify-ване на токена
        const secret = 'SomeSecretWord';
        const options = {expiresIn: '2h'};
        
        const token = await jwt.sign(payload, secret, options);

        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {
        console.log(err.message);
        
        res.locals.error = err.message;

        res.render('login');
    }
});

authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register', async (req, res, next) => {
    const { username, password, repeatPassword } = req.body;

    if(password != repeatPassword){
        return res.render('register', {error: 'Passwords don\'t match!'});
    }

    try {
        const existingUser = await getUserByUsername(username);

        if(existingUser){
            return res.render('register', {error: 'User already exist!'});
        }

        const user = await register(username, password);

        res.redirect('/login');
    } catch (err) {
        //console.log(err.errors) - // Грешките в mongoose идват под формата на обект, който има пропърти message, което е message-а който сме задали в mongooseSchema-та
        const messages = Object.keys(err.errors).map(key => err.errors[key].message); // Взимаме key-овете на обекта, и ги мапваме в масив, в който слагаме само message-ите
        res.render('register', { error: messages.join('\n') });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

module.exports = authController;