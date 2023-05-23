const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

async function start(){
    const app = express();

    expressConfig(app);
    routesConfig(app);

    app.listen(6161, () => console.log('Server is listenning on port 6161...'));
}

start();

