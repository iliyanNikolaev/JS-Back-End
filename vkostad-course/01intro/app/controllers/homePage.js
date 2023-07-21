const { layout } = require('../util');

const homePage = (req, res) => {
    res.write(layout(
    `<h1>Home page</h1>
    <p>Welcome to our site</p>`
    ));
}

module.exports = homePage;