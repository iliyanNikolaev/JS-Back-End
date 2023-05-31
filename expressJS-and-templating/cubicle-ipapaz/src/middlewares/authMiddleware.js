const jwt = require('../lib/jsonwebtoken');

async function authentication(req, res, next) {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, 'SomeSecretWord');
            
            req.user = decodedToken;
        } catch (err) {
            console.log(err.message);
            res.clearCookie('auth');
        }
    } 

    next();
}

function isAuthenticated(req, res, next) {
    const user = req.user;
    if(!user){
        return res.redirect('/login');
    }

    next();
}

module.exports = {
    authentication,
    isAuthenticated   
}