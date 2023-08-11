const { getAll, getById } = require('../services/productService');

const catalogController = require('express').Router();

catalogController.get('/', (req, res) => {
    const products = getAll();

    res.render('catalog', {
        products
    });
});

catalogController.get('/:productId', (req, res) => {
    const productId = req.params.productId;
    const currentProduct = getById(productId);

    if (currentProduct != undefined) {
        res.render('details', {
            product: currentProduct
        });
    } else {
        res.render('missingProduct', {
            id: productId
        });
    }
});

module.exports = catalogController;