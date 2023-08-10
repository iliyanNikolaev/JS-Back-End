const { Router } = require('express');

const createController = Router();

createController .get('/', (req, res) => {
    res.send("<form method='post'><input type='text' /><button>Send</button></form>")
})

createController.post('/', (req, res) => {
    res.send('handling post request!')
});

module.exports = createController;