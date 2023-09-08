const Message = require('../models/Message');

const messagesRouter = require('express').Router();

messagesRouter.post('/', async (req, res) => {
    try {
        const message = await Message.create(req.body);

        res.status(200).json(message);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

messagesRouter.get('/:conversationId', async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.conversationId });

        res.status(200).json(messages);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = messagesRouter;