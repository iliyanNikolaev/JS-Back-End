const { createFurniture, getAllFurnitures, getFurnitureById } = require('../services/furnitureService');

const furnitureController = require('express').Router();

furnitureController.get('/', async (req, res) => {
    const allFurnitures = await getAllFurnitures();

    res.json(allFurnitures)
});

furnitureController.post('/', async (req, res) => {
    const createdFurniture = await createFurniture(req.body);

    res.json(createdFurniture);
});

furnitureController.get('/details/:furnitureId', async (req, res) => {
    const currentFurniture = await getFurnitureById(req.params.furnitureId);

    res.json(currentFurniture);
});

module.exports = furnitureController;