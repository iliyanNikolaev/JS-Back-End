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

    const person = await Person.findById('646ba48e3ff65457bc254559');
    //const data = await Person.find({ firstName: 'Ilich'});

    //find returns array, findOne returns only first matched element

    person.age = 25;

    await person.save();
    
    console.log(person);

    await mongoose.disconnect(); 
}
