const Category = require('../models/Category');

async function createNewCategory (categoryData) {
    Category.create(categoryData);
}

async function getAllCategories () {
    return Category.find({});
}

module.exports = {
    createNewCategory,
    getAllCategories
}