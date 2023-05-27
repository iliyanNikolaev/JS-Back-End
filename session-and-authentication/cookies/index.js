const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.get('/', (req, res) => {
    res.send(`
    <nav>
    <a href="/login">Login</a>
    <a href="/profile">Profile</a>
    </nav>
    <h1>Hello</h1>
    `);

});

app.get('/login', (req, res) => {
    res.send(`
    <form method="post">
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <button>Login</button>
    </form>`)
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const data = {
        username: 'ilich'
    }

    if (username == 'ilich' && password == '123') {

        res.cookie('auth', JSON.stringify(data));
        
        req.session.username = 'ilich';
        req.session.privateInfo = 'Some private info';
        
        console.log(req.session);
        res.redirect('/profile');
    } else {
        res.status(401).send('<h1>Wrong pass!</h1>');
    }
});

app.get('/profile', (req, res) => {
    const authData = req.cookies['auth'];

    if (authData) {

        const { username } = JSON.parse(authData);

        res.send(`<h1>Hello ${username}</h1>`)
    } else {
        res.send(`
        <h1>You are not logged</h1>
        <a href="/login">Login</a>
        `)
    }
});

app.listen(6161, () => console.log('Server is listening on port 6161...'));

