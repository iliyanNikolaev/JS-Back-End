const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('cookieParser', 1);
    res.send('hello from express');
});

app.listen(3000);