const mongoose = require('mongoose');
const { MONGO_CONN_STR } = require('../constants');

async function connectToDB() {
    try {
        await mongoose.connect(MONGO_CONN_STR);
        console.log('DB connected..')
    } catch (err) {
        console.log('>>> DB not connected!!! <<<');
        process.exit(1); // app wil stop
    }
}

module.exports = connectToDB;