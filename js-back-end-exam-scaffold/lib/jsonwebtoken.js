const jwt = require('jsonwebtoken');
const util = require('util');

function sign() {
    return util.promisify(jwt.sign);
}

function verify() {
    return util.promisify(jwt.verify);
}

module.exports = {
    sign,
    verify
}

/* В конкретния случай се използва util.promisify() 
за преобразуване на функциите jwt.sign и jwt.verify от пакета 
jsonwebtoken във функции, които връщат промиси. */
/* Ползата от този модул е, че той ни позволява да използваме синтаксиса на промиси вместо 
callback функции при работа с JSON Web Token (JWT) 
операции. Това прави кода по-четим и управляем. */
/* Ползата е че можем да използваме async await синтаксиса за обработка на резултата и грешките от jwt.sign и jwt.verify */