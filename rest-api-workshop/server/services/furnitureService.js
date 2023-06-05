const Furniture = require('../models/Furniture');

function getAllFurnitures() {
    return Furniture.find({});
};

function createFurniture(data) {
    return Furniture.create(data);
};

function getFurnitureById(id) {
    return Furniture.findById(id);
};

function editFurnitureById(id, data) {
    return Furniture.findByIdAndUpdate(id, data);
};

function deleteFurnitureById(id) {
    return Furniture.findByIdAndDelete(id);
}

module.exports = {
    getAllFurnitures,
    createFurniture,
    getFurnitureById,
    editFurnitureById,
    deleteFurnitureById
}