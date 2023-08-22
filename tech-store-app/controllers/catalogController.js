const catalogController = require('express').Router();

catalogController.get('/', (req, res) => {
    console.log(req.userData);
    res.render('catalog');
});

module.exports = catalogController;