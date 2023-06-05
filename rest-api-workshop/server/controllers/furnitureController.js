const { createFurniture, getAllFurnitures, getFurnitureById, editFurnitureById, deleteFurnitureById } = require('../services/furnitureService');

const furnitureController = require('express').Router();

furnitureController.get('/', async (req, res) => {
    const allFurnitures = await getAllFurnitures();

    res.json(allFurnitures)
});

furnitureController.post('/', async (req, res) => {
    const createdFurniture = await createFurniture({ ...req.body, _ownerId: req.user._id });

    res.json(createdFurniture);
});

furnitureController.get('/:furnitureId', async (req, res) => {
    const currentFurniture = await getFurnitureById(req.params.furnitureId);

    res.json(currentFurniture);
});

furnitureController.put('/:furnitureId', async (req, res) => {
    const updatedFurniture = await editFurnitureById(req.params.furnitureId, req.body);

    res.json(updatedFurniture);
});

furnitureController.delete('/:furnitureId', async (req, res) => {
    await deleteFurnitureById(req.params.furnitureId);

    res.json({ok: true});
});


module.exports = furnitureController;