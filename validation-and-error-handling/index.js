const { validateEmail } = require('./validators');
const express = require('express');
const validator = require('express-validator');


const app = express();
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send(`
    <nav>
    <a href="/login">Login</a>
    </nav>
    <h1>Home page</h1>
    <p>Welcome to our site</p>
    `);

});

/*  
    <a href="/register">Register</a>
    <a href="/profile">Profile</a>
    <a href="/logout">Logout</a> 
*/


app.get('/login', (req, res) => {
    res.send(`
    <h1>Login</h1>
    <form method="post">
        <label>Email: <input type="text" name="email"></label>
        <label>Password: <input type="password" name="password"></label>
        <button>Login</button>
    </form>`)
});

app.get('/404', (req, res) => {
    res.send('<h1>Error 404</h1>');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
   

    res.redirect('/');
});


app.listen(6161, () => console.log('Server is listenning on port 6161...'));

