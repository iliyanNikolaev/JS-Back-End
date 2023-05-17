const express = require('express');
const handlebars = require('express-handlebars');
const logger = require('./loggerMiddleware');

const app = express();
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.use(express.static(`public`));

app.use(logger);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cats', (req, res) => {
    const cats = [
        {name: 'Sivka', breed: 'cool', age: '12'},
        {name: 'Siso', breed: 'cool', age: '1'},
        {name: 'Angel', breed: 'cool', age: '2'},
    ]
    res.render('cats', { cats });
});

app.get('/cats/1', (req, res) => {
    res.sendFile('./cat.jpg', {root: __dirname});
});

app.get('/cats/:id', (req, res, next) => {
    let catId = Number(req.params.id);

    if(!catId){
        res.send('Invalid catId!!');
    } else {
        req.catId = catId;
        next();
    }
}, (req, res) => {
    res.render('cat', {catId: req.params.id, isEven: req.catId % 2 == 0});
});


app.get('/dogs', (req, res) => {
    res.send('<h1>Dogs page</h1>');
});

app.post('/cats', (req, res) => {
    res.send('cat is received');
});

app.put('/cats', (req, res) => {
    res.send('cat is updated');
});

app.delete('/cats', (req, res) => {
    res.send('cat is deleted');
});

app.get('/json', (req, res) => {
    res.json({content: 'some-content', another: 'another-content'})
});

app.get('/redirect', (req, res) => {
    res.redirect('/redirected');
})

app.get('/redirected', (req, res) => {
    res.send('<h1>This is redirected page</h1>')
})




app.listen(5000, () => console.log('Server is listening on port 5000...'));