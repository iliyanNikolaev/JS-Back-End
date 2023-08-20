const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const authController = require('../controllers/authController');

function routesConfig(app) {
    app.use(homeController);
    app.use('/catalog', catalogController);
    app.use('/auth', authController);
}

module.exports = routesConfig;