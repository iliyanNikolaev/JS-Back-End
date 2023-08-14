const homeController = require('../controllers/homeController');
const movieController = require('../controllers/movieController');
const categoryController = require('../controllers/categoryController');


function routesConfig(app) {
    app.use(homeController);
    app.use('/movies', movieController);
    app.use('/categories', categoryController);
    
    app.all('*', (req, res) => {
        res.render('404');
    });
}

module.exports = routesConfig;