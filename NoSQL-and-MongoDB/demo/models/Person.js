const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

const Person = model('Person', personSchema);

module.exports = Person;