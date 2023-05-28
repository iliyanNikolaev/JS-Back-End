const jwt = require('jsonwebtoken');

module.exports = (jwtSecret) => (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        try {
            const data = jwt.verify(token, jwtSecret);
            req.user = data;

        } catch (error) {
            
            res.clearCookie('token');
            return res.redirect('/login');
        }
    } 

    next();
}