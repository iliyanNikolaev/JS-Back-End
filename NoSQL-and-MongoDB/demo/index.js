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

    const person = new Person({
        firstName: 'Ilich',
        lastName: 'Ilicha',
        age: 21
    });
    
    await person.save(); 

    const data = await Person.find({});

    console.log(data[0].sayHi());
    console.log(data[0].name);

    await mongoose.disconnect(); 
}
