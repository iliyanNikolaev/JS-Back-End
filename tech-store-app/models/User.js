const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
    laptopsAds: { type: [Types.ObjectId], default: [], ref: 'Laptop' },
    computersAds: { type: [Types.ObjectId], default: [], ref: 'Computer' },
    questions: {type: Array, default: []}
});

const User = model('User', userSchema);

module.exports = User;