const Data = require('../models/Data');

function getAll(){
    return Data.find({}).lean();
}

function getById(id){
    return Data.findById(id).lean();
}

async function create(itemData){
    const item = await Data.create(itemData);
    return item;
}

module.exports = {
    getAll,
    getById,
    create
}