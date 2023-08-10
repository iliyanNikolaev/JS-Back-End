const express = require('express');
const catalogController = require('./catalogController');
const createController = require('./createController');

const app = express();

app.use('/catalog', catalogController);
app.use('/create', createController);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/img', (req, res) => {
    res.sendFile(__dirname + '/Capture.png');
});

app.get('/data', (req, res) => {
    res.json([
        {
            name: 'ilich',
            age: 26
        },
        {
            name: 'boyana',
            age: 22
        }
    ])
});

app.all('*', (req, res) => {
    res.send('not found')
});

app.listen(3000, () => console.log('server is listening on port 3000...'))