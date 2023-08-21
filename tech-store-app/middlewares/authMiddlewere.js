const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants'); 

function validateToken(req, res, next) {
    const token = req.cookies.token;

    if(token) {
        try {
            const data = jwt.verify(token, JWT_SECRET);
            
            req.userData = data;
            
            res.locals.userData = data;

        } catch (err) {

            res.clearCookie('userData');

            return res.redirect('/auth/login');
        }
    }
    
    next();
}

module.exports = validateToken;