const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true })); // forms
app.use('/static', express.static('static'));
app.get('/', (req, res) => {
    res.send('its work!');
});

app.listen(6161, () => console.log('Server is listenning on port 6161...'));
