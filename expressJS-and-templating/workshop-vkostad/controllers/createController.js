const router = require('express').Router();
const { create } = require('../services/databaseService');

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Create'
    });
});

router.post('/', async (req, res) => {
    try {
        const room = await create(req.body);

        res.redirect(`/catalog/${room._id}`);
    } catch (err) {
        console.log(err)
        res.render('create', {
            title: 'Error',
            error: err.message.split('\n')
        })
    }
});

module.exports = router;