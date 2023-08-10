const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/img', (req, res) => {
    res.sendFile(__dirname + '/Capture.png');
});

app.route('/create')
 .get((req, res) => {
    res.send("<form method='post'><input type='text' /><button>Send</button></form>")
})
.post((req, res) => {
    res.send('handling post request!')
});

app.get('/catalog', (req, res) => {
    res.send('<h1>Catalog page</h1>')
});

app.get('/catalog/:itemId', (req, res) => {
    res.send(`Catalog item ${req.params.itemId}`);
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