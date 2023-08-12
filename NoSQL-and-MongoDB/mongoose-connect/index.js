const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Comment = require('./models/Comment');

connect();

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

    console.log('database connected');

    await Comment.create({
        author: 'Ilich',
        content: 'test'
    });



    await mongoose.disconnect();
    console.log('database disconnected');
}