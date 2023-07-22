const { layout, data } = require('../util');

const createPage = (req, res) => {
    res.write(layout(`
        <h1>Create Item</h1>
        <form method="POST" action="/create">
        <label>Name: <input type="text" name="name"/></label>
        <label>Color: 
        <select name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        </select>
        </label>

        <input type="submit" value="submit"/>
        </form>
    `));
}

const createItem = async (req, res) => {
    const chunks = [];
    let queryStr;

    req.on('data', (chunk) => {
        chunks.push(chunk);
    });

    req.on('end', () => {
        queryStr = chunks.join('');
        const itemArr = queryStr.split('&');
        const nameArr = itemArr[0].split('=');
        const colorArr = itemArr[1].split('=');

        const item = {
            id: Date.now(),
            name: nameArr[1],
            color: colorArr[1]
        }

        data.push(item);
    });

    res.writeHead(301, {
        'Location': '/catalog'
    });
}

module.exports = {
    createPage,
    createItem
};