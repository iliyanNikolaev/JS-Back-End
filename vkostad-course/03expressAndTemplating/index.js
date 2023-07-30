const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from express...</h1>');
});

app.listen(6161, () => console.log('Server is listening on port 6161...'));