const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const databaseConfig = require('./config/database');

async function start(){
    const app = express();
    
    await databaseConfig(app);

    expressConfig(app);
    routesConfig(app);

    app.listen(6161, () => console.log('Server is listenning on port 6161...'));
}

start();

