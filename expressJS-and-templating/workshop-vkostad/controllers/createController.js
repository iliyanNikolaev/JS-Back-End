const router = require('express').Router();
const {data, persist} = require('../services/dataService');

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Create'
    });
});

router.post('/', async (req, res) => {
    try {
        const itemData = req.body;
        const id = Math.ceil(Math.random() * 9999);
        itemData.id = id;
        data.push(itemData);
        await persist();
        res.redirect('/catalog');
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router;