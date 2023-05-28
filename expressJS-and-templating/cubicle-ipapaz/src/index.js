const express = require('express');

const app = express();

const setupViewEngine = require('../config/viewEngine');

setupViewEngine(app);
app.use(express.static('src/public'));
app.use('/', (req, res) => {
    res.render('home');
});


app.listen(6161, () => console.log('Server is listening on port 6161...')); 


