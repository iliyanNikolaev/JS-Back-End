const bcrypt = require('bcrypt');

const users = {};

async function register(username, password) {
    if(!users[username]) {
        const hashedPassword = await bcrypt.hash(password, 10);

        users[username] = hashedPassword;
    }
}

async function login(username, password) {
    
    let comparing = false;

    if(users[username]) {
        comparing = await bcrypt.compare(password, users[username]);
    }

    return comparing;
}

module.exports = {
    register,
    login
}