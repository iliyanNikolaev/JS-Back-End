const jwt = require('../lib/jsonwebtoken');

async function authentication(req, res, next) {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, 'SomeSecretWord');
            
            req.user = decodedToken; // това го слагаме за да може следващия мидълуеър "isAuthenticated" да провери 
            //дали има нещо в req.user и да си върши работата, ползваме го и в някои routes като например
            //пост заявката за създаване на куб, взимаме ид-то на съответния user от req.user за да можем да го сетнем, като owner 
            // на куба който ще създава
            
            res.locals.username = decodedToken.username;  // това res.locals... е default свойство на експрес, пропътитата които сетнем тук ще бъдат налични в целия апп
            res.locals.isAuthenticated = true;            // в нашия случай го използваме в main layout-а на хендълбарс за да изрендим правилните бутони в навигацията
                                                          // спрямо това дали има логнат потребител или не
        } catch (err) {
            console.log(err.message);
            res.clearCookie('auth');
        }
    } 

    next();
}

function isAuthenticated(req, res, next) {  // този мидълуеър го подаваме само за страниците които са налични за логнати потребители
    const user = req.user;                  // като например създаване на куб, редакция на куб и т.н.
    if(!user){                              // функцията проверява дали потребителя, който се опитва да достъпи дадената страница е логнат
        return res.redirect('/login');      // и ако не е го редиректва към логин
    }

    next();
}

module.exports = {
    authentication,
    isAuthenticated   
}