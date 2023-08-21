const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const authController = require('../controllers/authController');
const createController = require('../controllers/createController');

const isLogged = require('../middlewares/isLogged');
const isNotLogged = require('../middlewares/isNotLogged');

function routesConfig(app) {
    app.use(homeController);
    app.use('/catalog', catalogController);
    app.use('/auth', isNotLogged, authController);
    app.use('/create', isLogged, createController);

    app.all('*', (req, res) => {
        res.status(404).render('noAccess');
    });
}

module.exports = routesConfig;