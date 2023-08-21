function isNotLogged(req, res, next) {
    if(req.userData) {
        res.status(404).render('noAccess');
    } else {
        next();
    }
}

module.exports = isNotLogged;