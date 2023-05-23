const mongoose = require('mongoose');

//creating Schema and model
const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    breed: String
});

//Method
catSchema.methods.sayHi = function(){
    console.log(`${this.name} says meooow...`);
}

//Virtual property
catSchema.virtual('info').get(function(){
    return `Cat info: -name: ${this.name} -breed: ${this.breed}`; 
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;