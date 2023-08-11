const express = require('express');
const hbs = require('express-handlebars');

const handlebars = hbs.create({
    extname: '.hbs'
});

const app = express();
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    // res.locals.message = 'Hello from express, with handlebars for templating';
    res.render('home', {
        title: 'Handlebars demo',
        username: 'ilich',
        message: 'Hello from express, with handlebars for templating',
        products:[
            {
                title: 'product 1',
                price: 22,
                color: 'black'
            },
            {
                title: 'product 2',
                price: 24,
                color: 'white'
            },
            {
                title: 'product 3',
                price: 20,
                color: 'grey'
            }
        ]
        // products: []
    });
})


app.listen(6161, () => console.log('server is listenning on port 6161...'))