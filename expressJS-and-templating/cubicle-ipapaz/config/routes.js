const homeController = require('../src/controllers/homeController');
const cubeController = require('../src/controllers/cubeController');

function setupRoutes(app) {
    app.use(homeController);
    app.use(cubeController);
}

module.exports = setupRoutes;

