const User = require('../models/User');

const usersRouter = require('express').Router();

// register / login
usersRouter.post('/', async (req, res) => {
    try {
        if(req.body.username == '') {
            throw new Error('Username cannot be an empty string!!!');
        }
        
        const isExist = await User.findOne({ username: req.body.username });
        if(isExist) {
            res.status(200).json(isExist);
        } else {
            const user = await User.create(req.body);

            res.status(200).json(user);
        }
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// get all users
usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.find({});

        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// get an user
usersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = usersRouter;