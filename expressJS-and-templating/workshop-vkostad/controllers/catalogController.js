const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('catalog');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('details', {
        title: 'Details',
        itemId: id
    });
});

module.exports = router;