module.exports = (req, res, next) => {
    console.log(`=> Requested url: ${req.url}    => method: ${req.method}`);

    next();
}