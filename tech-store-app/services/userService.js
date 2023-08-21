const User = require('../models/User');

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants');

const bcrypt = require('bcrypt');

async function login(email, password) {
    
    const user = await User.findOne({ email: email });

    if(user) {
        const compare = await bcrypt.compare(password, user.password);

        if(compare) {
            const payload = {
                email,
                userId: user.ObjectId,
                laptopsAds: user.laptopsAds,
                computersAds: user.computersAds,
                questions: user.questions
            }

            return jwt.sign(payload, JWT_SECRET);
        } else {
            throw new Error('Incorrect username or password!');
        }
    } else {
        throw new Error('Incorrect username or password!');
    }
}

async function register(email, password) {

    const isExist = await User.findOne({ email });
    
    if(isExist != {}) {
        const hashedPass = await bcrypt.hash(password, 10);

        await User.create({
            email,
            password: hashedPass
        });
    } else {
        throw new Error('This email already exist!!');
    }
}

module.exports = {
    login,
    register
}