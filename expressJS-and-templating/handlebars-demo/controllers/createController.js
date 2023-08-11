const { createItem } = require('../services/productService');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', (req, res) => {
    if(req.body.name != '' && req.body.price != '') {
        createItem(req.body);
        res.redirect('/catalog');
    }
});

module.exports = createController;