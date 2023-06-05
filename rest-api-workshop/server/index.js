const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.use(routes);

app.listen(3030, () => console.log('server is listening on port 3030...'))