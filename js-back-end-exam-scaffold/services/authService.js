const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');

const SECRET = '6edd409cee4cc98472539c79058bbebaefab9b6b';

async function register(username, email, password, repeatPassword) {
    if(password != repeatPassword){
        throw new Error('Password don\'t match!');
    }

    //check if user exists...
    const isExist = await findUserByUsername(username);
    if(isExist){
        throw new Error('User already exists!');
    }

    //todo... validate password length, english symbols...

    const hashedPassword = await bcrypt.hash(password, 10);

    return User.create({
        username,
        email,
        password: hashedPassword
    });
}

async function login(email, password) {
    //User exists?
    const user = await findUserByEmail(email);

    if(!user){
        throw new Error('Invalid email or password!');
    }
    //Password is valid?
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error('Invalid email or password!');
    }
    //Generate token.

    const payload = {
        _id: user._id, 
        username: user.username, 
        email: user.email
    };

    const token = await jwt.sign(payload, SECRET);

    return token;
}

function findUserByUsername(username){
    return User.findOne({username});
}

function findUserByEmail(email){
    return User.findOne({email});
}

module.exports = {
    register,
    findUserByUsername,
    findUserByEmail,
    login
}