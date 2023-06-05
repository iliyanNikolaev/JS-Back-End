const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/furniture');

app.listen(3030, () => console.log('server is listening on port 3030...'))