const homeController = require('../controllers/homeController');

function routesConfig(app) {
    app.use(homeController);
}

module.exports = routesConfig;