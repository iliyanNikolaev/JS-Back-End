const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

async function authentication(req, res, next) { // глобален мидълуеър, който проверява дали има сетнат токен в рекуестите, които праща клиентския апп

    const token = req.header('X-Authorization');
    //пояснение - взимаме токена който се сетва от клиентския апп

    if (token) {

        const decodedToken = await jwt.verify(token, SECRET); // верифицираме токена

        req.user = decodedToken; // тук добавяме декодирания токен във request, за да бъде достъпен за всички action-и по веригата,
        // и те да знаят дали има потребител и кой е той
    }

    next();
}


module.exports = {
    authentication
}