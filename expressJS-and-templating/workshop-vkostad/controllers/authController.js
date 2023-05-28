const jwt = require('jsonwebtoken');
const authController = require('express').Router();

const jwtSecret = 'mysecredword0227';

authController.get('/login', (req, res) => {

    const payload = {
        username: 'ilich',
        roles: ['user']
    }

    const token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'});

    res.cookie('token', token);

    res.send('Look cookies!');
});


module.exports = {
    authController
}