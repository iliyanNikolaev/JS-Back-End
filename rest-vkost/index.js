const express = require('express');
const { getLaptops, createLaptop, deleteLaptop, getLaptopById, editLaptopById } = require('./db');

const app = express();

app.use(express.static('static'));
app.use(express.json()); // това замества express.urlencoded -> парсва боди от формуляр, 
//express.json() -> парсва боди изпратено с рекуест от клиента

app.get('/laptops', (req, res) => {
    res.status(200).json(getLaptops());
});

app.get('/laptops/:id', (req, res) => {
    const laptop = getLaptopById(req.params.id);

    if(laptop != undefined) {
        res.status(200).json(laptop);
    } else {
        res.status(204).end();
    }
});

app.post('/laptops', (req, res) => {
    const createdLaptop = createLaptop(req.body);
    res.status(200).json(createdLaptop);
});

app.delete('/laptops/:id', (req, res) => {
    deleteLaptop(req.params.id);
    res.status(202).end();
});

app.put('/laptops/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    editLaptopById(id, data);

    res.status(204).end();
});

app.listen(3001, () => console.log('Server running on port 3001'));