const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [5, 'Username is too short, must be minimum 5 symbols!'],
        maxLength: [20, 'Username is too long, must be maximum 20 symbols!'],
        unique: true,
        validate: [/^[a-zA-Z0-9]+$/, 'Username must contains only english letters and diggits from 0 to 9!']
    }, 
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password is too short, must be minimum 6 symbols!'],
        maxLength: [20, 'Password is too long, must be maximum 20 symbols!'],
        validate: [/^[a-zA-Z0-9]+$/, 'Password must contains only english letters and diggits from 0 to 9!']
    }
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next();
        });
});

userSchema.method('validatePassword', function(password){
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;