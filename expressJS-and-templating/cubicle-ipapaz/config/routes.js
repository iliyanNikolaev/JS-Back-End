const createController = require('../src/controllers/createController');

function setupRoutes(app) {
    app.use('/create', createController);

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/about', (req, res) => {
        res.render('about');
    });
}

module.exports = setupRoutes;

