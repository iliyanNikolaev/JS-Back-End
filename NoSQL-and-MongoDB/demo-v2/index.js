const express = require('express');

const expressConfig = require('./config/expressConfig');
const routesConfig = require('./config/routesConfig');
const dbConfig = require('./config/dbConfig');

const app = express();

start();

async function start() {
    expressConfig(app);
    routesConfig(app);
    await dbConfig();
    app.listen(6161, () => console.log('Server listening on port 6161.'));
}
