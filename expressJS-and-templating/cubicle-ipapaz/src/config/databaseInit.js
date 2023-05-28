const mongoose = require('mongoose');

const dbUri = 'mongodb://127.0.0.1:27017/cubicle';

async function initDataBase(){
    mongoose.set('strictQuery', false);

    await mongoose.connect(dbUri);

    console.log('Database connected!');
}

module.exports = initDataBase;
 

