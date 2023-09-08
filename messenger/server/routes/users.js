const User = require('../models/User');

const usersRouter = require('express').Router();

usersRouter.post('/', async (req, res) => {
    try {
        if(req.body.username == '') {
            throw new Error('Username cannot be an empty string!!!');
        }
        
        const isExist = await User.findOne({ username: req.body.username });

        if(isExist) {
            return res.status(200).json(isExist);
        } 

        const user = await User.create(req.body);

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

module.exports = usersRouter;