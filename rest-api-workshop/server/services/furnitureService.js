const Furniture = require('../models/Furniture');

async function getAllFurnitures() {
    return Furniture.find({});
};

async function createFurniture(data) {
    return await Furniture.create(data);
};

async function getFurnitureById(id) {
    return Furniture.findById(id);
}

module.exports = {
    getAllFurnitures,
    createFurniture,
    getFurnitureById
}