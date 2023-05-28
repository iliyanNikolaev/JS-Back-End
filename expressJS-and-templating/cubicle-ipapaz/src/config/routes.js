const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');

function setupRoutes(app) {
    app.use(homeController);
    app.use(cubeController);
}

module.exports = setupRoutes;

