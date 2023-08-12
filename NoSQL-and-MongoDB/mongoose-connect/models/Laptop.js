const { Schema, model } = require('mongoose');

const laptopSchema = new Schema({
    name: String,
    price: { type: Number, required: true, min: [0, 'Price cannot be negative!'] }
});

laptopSchema.methods.fps = function() {
    return `${this.name}: CS-GO/high, full HD => ${this.price.toString().slice(0, 3)} FPS`;
}

const Laptop = model('Laptop', laptopSchema);

module.exports = Laptop;