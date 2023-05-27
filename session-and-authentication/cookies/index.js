const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dataService = require('./dataService');

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
    <a href="/register">Register</a>
    <a href="/profile">Profile</a>
    <a href="/logout">Logout</a>
    </nav>
    <h1>Home page</h1>
    <p>Welcome to our site</p>
    `);

});

app.get('/login', (req, res) => {
    res.send(`
    <h1>Login</h1>
    <form method="post">
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <button>Login</button>
    </form>`)
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await dataService.loginUser(username, password);
        
        res.cookie('auth', JSON.stringify({
            username: user.username,
            someInfo: 'Some info for user'
        }));

        res.redirect('/profile')
        
    } catch (err) {

        res.status(401).send(`<h1>${err}</h1>`);
    }



});

app.get('/register', (req, res) => {
    res.send(`
    <h1>Register</h1>
    <form method="post">
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <button>Register</button>
    </form>`)
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    await dataService.registerUser(username, password);

    res.redirect('/login');
});

app.get('/profile', (req, res) => {
    const authData = req.cookies['auth'];

    if (authData) {

        const { username } = JSON.parse(authData);

        res.send(`<h1>Hello ${username}</h1>`);

    } else {
        res.send(`
        <h1>You are not logged</h1>
        <a href="/login">Login</a>
        `)
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

app.listen(6161, () => console.log('Server is listening on port 6161...'));

