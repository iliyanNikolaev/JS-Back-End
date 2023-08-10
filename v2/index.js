const express = require('express');
const catalogController = require('./catalogController');
const createController = require('./createController');
const logger = require('./logger');

const app = express();

app.use(express.static('static'));
app.use(logger);
app.use('/catalog', catalogController);
app.use('/create', createController);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

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