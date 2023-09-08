const express = require('express');
const mongoose = require('mongoose');

const { SECRET_KEY } = require('./constants');

const conversationsRouter = require('./routes/conversations');
const messagesRouter = require('./routes/messages');
const usersRouter = require('./routes/users');

start();

async function start() {
    //--CONNECT DB--//
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/messenger');
        console.log('db connected');
    } catch (err) {
        console.log('!!!DB NOT CONNECTED!!!');
        process.exit(1);
    }

    //--INIT APP--//
    const app = express();

    //--EXPRESS SETUP--//
    app.use(express.json());

    //cors middleware
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Secret-Key');

        next();
    });

    //security middleware
    app.use((req, res, next) => {
        if(!req.headers['secret-key'] || req.headers['secret-key'] != SECRET_KEY){
            res.status(400).json({ error: 'Acess Denied!!!'});
        }

        next();
    })

    //--ROUTES--//
    app.use('/api/conversations', conversationsRouter);
    app.use('/api/messages', messagesRouter);
    app.use('/api/users', usersRouter)


    //--TURN ON SERVER--//
    app.listen(3030, () => console.log('server is running on port 3030'));
}
