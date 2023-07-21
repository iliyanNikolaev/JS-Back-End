const { layout, data } = require('../util');

const catalogPage = (req, res) => {
    res.write(layout(
    `<h1>Catalog page</h1>
        <ul>
            ${data.map(x => `<li>${x.name}</li>`).join('\n')}
        </ul>`
        ));
    }

module.exports = catalogPage;