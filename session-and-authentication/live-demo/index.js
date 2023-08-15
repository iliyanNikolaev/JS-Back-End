const express = require('express');
const session = require('express-session');
const { register, login } = require('./userService');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'victoriaSecret',
    cookie: { secure: false },
    saveUninitialized: true,
    resave: false
}))

app.get('/', (req, res) => {
    if (req.session.username) {
        res.send('<p>Hello, </p>' + req.session.username);
    } else {
        res.send('<p>Hello, guest</p><p><a href="/login">Login here</a></p>');
    }
});

app.get('/login', (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method="post">
        <input type="text" name="username" placeholder="username here...">
        <input type="password" name="password" placeholder="password here...">
        <button>Login</button>
        </form>`);
});


app.post('/login', async (req, res) => {
    const match = await login(req.body.username, req.body.password);

    if (match) {
        req.session.username = req.body.username;

        res.redirect('/');
    } else {
        res.send('Username or password don\'t match!')
    }
});

app.get('/register', (req, res) => {
    res.send(`
    <h1>Register</h1>
    <form method="post">
    <input type="text" name="username" placeholder="username here...">
    <input type="password" name="password" placeholder="password here...">
    <button>Register</button>
    </form>`);
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (username != '' && password != '') {
        await register(username, password);
        res.redirect('/login');
    } else {
        res.send('Please fill all fields');
    }
});


app.listen(3000);