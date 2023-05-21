const { getAll, getById } = require('../services/dataService');

const router = require('express').Router();

router.get('/', (req, res) => {
    const search = req.query.search || '';
    const rooms = getAll(search);

    res.render('catalog', {
        title: 'Catalog',
        rooms,
        search
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