const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const authController = require('../controllers/authController');
const createController = require('../controllers/createController');

function routesConfig(app) {
    app.use(homeController);
    app.use('/catalog', catalogController);
    app.use('/auth', authController);
    app.use('/create', createController);
}

module.exports = routesConfig;