const { getAll, getById } = require('../services/dataService');

const router = require('express').Router();

router.get('/', (req, res) => {
    const rooms = getAll();
    res.render('catalog', {
        title: 'Catalog',
        rooms
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = getById(id);
    if(item){
        res.render('details', {
            title: 'Details',
            item
        });
    } else {
        res.redirect('/404')
    }
});

module.exports = router;