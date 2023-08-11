const { getById, deleteById, checkId } = require('../services/productService');

const deleteController = require('express').Router();

deleteController.get('/:productId', (req, res) => {
    const productId = req.params.productId;

    const currentProduct = getById(productId);

    res.render('delete', {
        product: currentProduct
    });
});

deleteController.post('/:productId', (req, res) => {
    const productId = req.params.productId;

    if(checkId(productId)) {
        deleteById(productId);
        res.redirect('/catalog');
    } else {
        res.render('missingProduct', {
            id: productId
        })
    }
});

module.exports = deleteController;