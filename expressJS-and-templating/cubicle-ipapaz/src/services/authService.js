const User = require('../models/User');

async function register(username, password) {
    return User.create({ username, password });
}

async function getUserByUsername(username) {
    return User.findOne({ username });
}

module.exports = {
    register,
    getUserByUsername
}