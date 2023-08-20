const catalogController = require('express').Router();

catalogController.get('/', (req, res) => {
    const user = req.userData;
    console.log(user);
    res.render('catalog');
});

module.exports = catalogController;