const express = require('express');
const { laptops, createLaptop } = require('./db');

const app = express();

app.use(express.static('static'));
app.use(express.json()); // това замества express.urlencoded -> парсва боди от формуляр, 
//express.json() -> парсва боди изпратено с рекуест от клиента

app.get('/laptops', (req, res) => {
    res.json(laptops);
});

app.post('/laptops', (req, res) => {
    createLaptop(req.body);
    res.status(200).end();
});

app.listen(3001, () => console.log('Server running on port 3001'));