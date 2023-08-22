function isNotLogged(req, res, next) {
    if(req.userData && req.url != '/logout') {
        res.status(404).render('noAccess');
    } else {
        next();
    }
}

module.exports = isNotLogged;

// това е route guard, който се ползва преди authController-a в раутовете за логин и регистрация
// ако има вече логнат потребител и той се опита по някакъв начин да стигне до /auth/login или /auth/register
// гарда ще го пренасочи към 404


// изключение е само раута за logout, който също е в authController-a, 
// тогава потребителя е необходимо да стигне до хендлъра на заявката
// и затова се налага да се прави тази проверка if(req.url != '/logout')
// в този случай гарда ще пусне конкретната заявка
