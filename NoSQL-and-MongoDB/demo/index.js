const mongoose = require('mongoose');
const Person = require('./models/Person');
const connectionString = 'mongodb://0.0.0.0:27017/testdb';
start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('database connected');

    const data = await Person.find({});
    console.log(data)

    /* const person = new Person({
        name: 'Ilich',
        age: '25'
    });
    
    await person.save(); */

    await mongoose.disconnect(); 
}
