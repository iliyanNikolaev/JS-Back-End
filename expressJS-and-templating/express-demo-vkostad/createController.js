const { Router } = require('express');

const router = Router();

router.route('/')
    .get((req, res) => {
        res.send('<form method="POST"><input type="text"><button>Send</button></form>')
    })
    .post((req, res) => {
        res.status(201);
        res.redirect('/catalog')
    });

 module.exports = router;   