const { IncomingForm } = require('formidable');
const { html, data } = require("../util");

function catalogPage(req, res) {
    res.write(html(`<h1>Catalog page</h1>
    <ul>
    ${data.map(el => `<li data-id="${el.id}">${el.name} - ${el.color}</li>`).join('\n')}
    </ul>`, 'Catalog'));

    res.end();
}

function createPage(req, res) {
    res.write(html(`<h1>Create item</h1>
    <form method="POST" action="/create">
    <label>Name: <input type="text" name="name"></label>
    <label>Color: 
        <select name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
    </label>
    <input type="submit" value="Create">
    </form>`, 'Create New Item'));

    res.end();
}

function createItem(req, res){
    const form = new IncomingForm();

    form.parse(req, (err, fields) => {
        
        const item = {
            id: ('asdf' + ('00' + (Math.random() * 9999 | 0)).slice(-3)),
            name: fields.name,
            color: fields.color
        }

        data.push(item);

        res.writeHead(301, [
            'Location', 
            '/catalog'
        ]);

        res.end();
    })
}

module.exports = {
    catalogPage,
    createPage,
    createItem
}