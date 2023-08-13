const homeController = require('../controllers/homeController');
const movieController = require('../controllers/movieController');


function routesConfig(app) {
    app.use(homeController);
    app.use('/movies', movieController);
    
    app.all('*', (req, res) => {
        res.render('404');
    });
}

module.exports = routesConfig;