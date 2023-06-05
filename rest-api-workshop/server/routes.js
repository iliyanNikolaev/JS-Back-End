const routes = require('express').Router();

const userController = require('./controllers/userController');
const furnitureController = require('./controllers/furnitureController');

routes.use('/users', userController);
routes.use('/furnitures', furnitureController);


module.exports = routes;