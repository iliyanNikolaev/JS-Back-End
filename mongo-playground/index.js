const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./models/User');

const { MONGO_URL } = require('./constants');

go();

async function go() {
    await mongoose.connect(MONGO_URL);
    console.log('db connected');
    // await User.create({
    //     username: 'megi',
    //     password: await hashPassword('123456')
    // });

    const user = await User.findOne({ username: 'megi'}).lean();

    console.log(user);

    mongoose.disconnect();
    console.log('db disconnected');
}

async function hashPassword(password) {
    const hashedPass = await bcrypt.hash(password, 10);
    return hashedPass;
}