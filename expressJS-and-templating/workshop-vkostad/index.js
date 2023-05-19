const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('its work!');
});

app.listen(6161);

console.log('Server is listenning on port 6161...')