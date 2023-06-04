# Cheat Sheet

1. Initialize project // npm init -y
2. Install and setup express // npm i express, const express = require('express')...
    - add routes // routes.js, app.use(routes) 
    - add static routes // folder static, app.use(express.static('public'));
3. Add view engine
    - install express-handlebars // set app view engine, extname...
    - add views folder
    - add main layout and home template // main.hbs, home.hbs
4. Add home controller
    - add controller to routes
5. Setup Database
6. Authentication
    - fix html links in layout
    - add authController
    - add authController to routes
    - add login page
    - add register page
    - add post register action
7. Add user model // new mongoose.Schema...
8. Add auth service // functions for register and login
9. Install and config bcrypt and cookie-parser
10. Register user
    - validate repeat password
    - check if user exist
    - use bcrypt to hash password
11. Login user
    - check if user exist
    - check password is valid
12. Generate jwt token // npm i jsonwebtoken
    -- OPTIONAL: use util.promisify to use async syntax, look at the module-jsonwebtoken for better understanding
    -- generate token with payload
    -- add token to the cookie