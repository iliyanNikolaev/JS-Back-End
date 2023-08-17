const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    laptopsAds: { type: [Types.ObjectId], default: [], ref: 'Laptop' },
    computersAds: { type: [Types.ObjectId], default: [], ref: 'Computer' },
    questions: []
});

const User = model('User', userSchema);

module.exports = User;