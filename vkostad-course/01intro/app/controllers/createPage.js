const { layout } = require('../util');
const {formidable} = require('formidable');

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
    
    const form = formidable({});
    let fields;
    let files;

    [fields, files] = await form.parse(req);
    
    console.log(fields);
} 

module.exports = {
    createPage,
    createItem
};