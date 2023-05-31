const express = require('express');
const setupViewEngine = require('./config/viewEngine');
const setupRoutes = require('./config/routes');
const initDataBase = require('./config/databaseInit');
const cookieParser = require('cookie-parser');
const { authentication } = require('../src/middlewares/authMiddleware');

const app = express();

setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authentication);
setupRoutes(app);
initDataBase()
    .then(() => app.listen(6161, () => console.log('Server is listening on port 6161...')))
    .catch((err) => console.log(err.message));


