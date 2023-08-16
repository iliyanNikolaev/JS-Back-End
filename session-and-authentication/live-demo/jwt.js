const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();

const secret = 'secret example';

app.use(cookieParser());
app.use((req, res, next) => {
    const token = req.cookies.token;

    if(token) {
        try {
            const data = jwt.verify(token, secret);
            req.user = data;
        } catch (err) {
            res.status(498).send('<p>INVALID TOKEN!!!</p><a href="/">Home</a>');
        }
    }

    next();
});

app.get('/', (req, res) => {

    const user = req.user;

    res.send(`
    ${user?.username ? `Hello, ${user.username}!` : 'Hello, guest!'}
    `)
});

app.get('/jwt', (req, res) => {
    const payload = {
        username: 'ilich',
        sessionToken: 'exampletoken',
        email: 'ilichviva@gmail.com'
    }

    const token = jwt.sign(payload, secret);
    res.cookie('token', token);
    res.send('token saved');
});

app.listen(3000);