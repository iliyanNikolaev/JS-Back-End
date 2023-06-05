const furnitureController = require('express').Router();

furnitureController.get('/', (req, res) => {
    res.json({ok: true});
});

module.exports = furnitureController;