const express = require('express');

const connectToDB = require('./config/connectToDB');
const expressConfig = require('./config/expressConfig');
const routesConfig = require('./config/routesConfig');

const app = express();

start();

async function start() {
    await connectToDB();
    expressConfig(app);
    routesConfig(app);
    
    app.listen(3001, () => console.log('Server listening on port 6161'));
}
