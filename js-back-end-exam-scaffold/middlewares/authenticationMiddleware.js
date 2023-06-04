const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

async function authentication(req, res, next) { // глобален мидълуеър, който проверява дали има сетнат токен в cookies 
    // 

    const token = req.cookies['auth']; 
    //пояснение - токена който се опитваме да го вземем тук, се сетва при логин 

    if(token) { 
        try {
            const decodedToken = await jwt.verify(token, SECRET); // верифицираме токена

            req.user = decodedToken; // тук добавяме декодирания токен във request, за да бъде достъпен за всички action-и по веригата,
            // и те да знаят дали има потребител и кой е той

            res.locals.isAuthenticated = true; // слагаме го в рес.локалс, което ще ни е полезно в layout-a на handlebars за да направим динамична навигация
            res.locals.user = decodedToken;
        } catch (err) {
            res.clearCookie('auth');
            return res.status(403).render('404');
            // ако влезем в този catch това означава, че има токен, но поради някаква причина верификацията му не е минала успешно
            // например ако са променени части от токена или пък хакери ни пращат заявки с хакерски токени
        }
    }

    next();
}

function authorization(req, res, next) { // това е мидълуеър, който ще се използва само на определени раутове, такива за които трябва да си логнат потребител
    if(!req.user){
        return res.redirect('/login');
    }

    next();
}

module.exports = {
    authentication,
    authorization
}