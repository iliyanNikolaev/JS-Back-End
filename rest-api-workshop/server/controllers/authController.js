const authController = require('express').Router();
const authService = require('../services/authService');

authController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.register(email, password);

    res.json(user);
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.login(email, password);

    res.json(user);
});

authController.get('/logout', (req, res) => {
    res.json({ok: true});
});

module.exports = authController;