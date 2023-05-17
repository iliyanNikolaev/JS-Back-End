const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Catalog page');
});

router.get('/:category/:id', (req, res) => {
    res.send(`Product category: ${req.params.category} Product id: ${req.params.id}`);
});

module.exports = router;