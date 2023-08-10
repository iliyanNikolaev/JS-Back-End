const { Router } = require('express');

const catalogController = Router();

catalogController.get('/', (req, res) => {
    res.send('<h1>Catalog page</h1>')
});

catalogController.get('/:itemId', (req, res) => {
    res.send(`Catalog item ${req.params.itemId}`);
});

module.exports = catalogController;