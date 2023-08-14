const express = require('express');

const dbConfig = require('./config/dbConfig');
const expressConfig = require('./config/expressConfig');
const routesConfig = require('./config/routesConfig');

const app = express();

start();

async function start() {
    await dbConfig();

    expressConfig(app);
    routesConfig(app);
    
    app.listen(6161, () => console.log('Server listening on port 6161.'));
}
