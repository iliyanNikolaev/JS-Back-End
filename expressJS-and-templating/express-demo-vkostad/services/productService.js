const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./services/data.json'));

function getAll(){
    return data;
}

function getById(id){
    return data.find(x => x.id == id);
}

function create(name, price){
    const id = 'asdf' + ('0000' + (Math.random() * 9999 | 0)).slice(-4);
    data.push({name, price, id});

    fs.writeFile('./services/data.json', JSON.stringify(data, null, 2), () => {});
}

module.exports = {
    getAll,
    getById,
    create
};