const homeController = require('../src/controllers/homeController');
const createController = require('../src/controllers/createController');

function setupRoutes(app) {
    app.use('/', homeController);
    app.use('/create', createController);
}

module.exports = setupRoutes;

