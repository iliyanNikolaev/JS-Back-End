const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController');

function setupRoutes(app) {
    app.use(homeController);
    app.use(cubeController);
    app.use('/accessory', accessoryController);
}

module.exports = setupRoutes;

