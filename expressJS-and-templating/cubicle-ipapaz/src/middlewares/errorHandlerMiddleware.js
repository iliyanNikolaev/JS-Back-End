function errorHandler(err, req, res, next) {
    console.log(err);

    res.status(404).render('404', {error: err.message});
};

module.exports = errorHandler;