const mongoose = require('mongoose');

const connString = 'mongodb://127.0.0.1:27017/workshop'
module.exports = async (app) => {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(connString);
        console.log('database connected!');
    } catch (error) {
        console.log('error initializing database!');
        process.exit(1);
    }
}