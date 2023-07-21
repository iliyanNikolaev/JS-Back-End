const { layout } = require('../util');

const defaultPage = (req, res) => {
    res.write(layout(
        `<h1>404 - This page not exist!</h1>
        <a href="/">Back to home page</a>`
    ));
}

module.exports = defaultPage;