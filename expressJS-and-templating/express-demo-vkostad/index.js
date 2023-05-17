const express = require('express');
const catalogRouter = require('./catalogController');
const createRouter = require('./createController');
const app = express();


app.use('/catalog', catalogRouter);
app.use('/create', createRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/img', (req, res) => {
    res.sendFile(__dirname + '/Capture.PNG');
});


app.get('/data', (req, res) => {
    res.json([
        {
            name: 'Ilich',
            age: 25
        },
        {
            name: 'Boyana',
            age: 21
        }
    ])
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found 404</h1>')
});

app.listen(6161);

