const { getAll, getById } = require('../services/databaseService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const user = req.user;
    console.log(user)
    const rooms = await getAll();
    res.render('catalog', {
        title: 'Catalog',
        rooms
    });
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const item = await getById(id);
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