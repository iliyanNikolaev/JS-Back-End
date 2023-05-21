const mongoose = require('mongoose');
const connectionString = 'mongodb://0.0.0.0:27017/testdb';
start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('database connected')
}
