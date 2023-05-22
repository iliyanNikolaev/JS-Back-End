const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true }
});

personSchema.virtual('name').get(function(){
    return `${this.firstName} ${this.lastName}`
})
personSchema.methods.sayHi = function(){
    return `${this.firstName} says hi!`;
}

const Person = model('Person', personSchema);

module.exports = Person;