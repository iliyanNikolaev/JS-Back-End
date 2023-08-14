const { createNewCategory } = require('../services/categoryService');

const categoryController = require('express').Router();

categoryController.get('/create', (req, res) => {
    res.render('createCategory');
});

categoryController.post('/create', async (req, res) => {
    const categoryData = req.body;

    if(categoryData.category != '') {
        try {
            await createNewCategory(categoryData);

            res.send('<h1>Category successfully created!</h1> <a href="/movies">Back to movies</a>');
        } catch (err) {
            res.status(404).redirect('/404')
        }
    } else {
        res.send('<h1>Please fill category name!!</h1> <a href="/categories/create">Back to Create Category</a>');
    }
});

module.exports = categoryController;