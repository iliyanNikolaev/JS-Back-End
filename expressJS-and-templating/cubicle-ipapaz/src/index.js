const express = require('express');

const app = express();

const setupViewEngine = require('../config/viewEngine');
const setupRoutes = require('../config/routes');


setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);


app.listen(6161, () => console.log('Server is listening on port 6161...')); 


