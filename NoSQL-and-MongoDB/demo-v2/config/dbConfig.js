const mongoose = require('mongoose');
const { MONGO_CONECTIONSTR } = require('../constants');

async function dbConfig() {
    try {
        await mongoose.connect(MONGO_CONECTIONSTR);
        console.log('DB connected.')
    } catch (error) {
        console.log('>>> DB NOT CONNECTED!! <<<');
    }
}

module.exports = dbConfig;