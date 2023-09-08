const Conversation = require('../models/Conversation');

const conversationsRouter = require('express').Router();

conversationsRouter.post('/', async (req, res) => {
    try {
        const conversation = await Conversation.create({
            members: [ req.body.sender, req.body.receiver ]
        });

        res.status(200).json(conversation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

conversationsRouter.get('/:username', async (req, res) => {
    try {
        const conversations = await Conversation.find({ members: { $in: [req.params.username] } });

        res.status(200).json(conversations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = conversationsRouter;