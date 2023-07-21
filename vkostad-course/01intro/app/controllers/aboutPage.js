const { layout } = require('../util');

const aboutPage = (req, res) => {
    res.write(layout(
    `<h1>About page</h1>
    <p>Contact: +1-555-0227</p>`
    ));
}

module.exports = aboutPage;