const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');

const { SECRET } = require('../constants');

async function register(email, password) {

    //check if user exists...
    const isExist = await findUserByEmail(email);

    if (isExist) {
        throw new Error('User already exists!');
    }

    //todo... validate password length, english symbols...

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        email,
        password: hashedPassword
    });

    return login(email, password); // след успешна регистрация, връщаме долната функция за логин, понеже текущото задание по което се прави скелета
    // има изискване за автоматично логване след регистрация
}

async function login(email, password) {
    //User exists?
    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password!');
    }
    //Password is valid?
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid email or password!');
    }
    //Generate token.

    const payload = {
        _id: user._id,
        email: user.email
    };

    const token = await jwt.sign(payload, SECRET);

    return {
        _id: user._id,
        email: user.email,
        accessToken: token
    };
}

function findUserByEmail(email) {
    return User.findOne({ email });
}

module.exports = {
    register,
    findUserByEmail,
    login
}