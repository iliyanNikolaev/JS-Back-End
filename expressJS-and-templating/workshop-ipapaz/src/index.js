const express = require('express');
const handlebars = require('express-handlebars');
const config = require('./config')

const app = express();

app.get('/', (req, res) => res.send('Home page'));

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));