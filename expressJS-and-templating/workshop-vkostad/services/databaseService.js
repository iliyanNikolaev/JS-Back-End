const Data = require('../models/Data');

function getAll(){
    return Data.find({}).lean();
}

function getById(id){
    return Data.findById(id).lean();
}

async function create(reqData){
    const itemData = {
        name: reqData.name,
        description: reqData.description,
        city: reqData.city,
        beds: Number(reqData.beds),
        price: Number(reqData.price)
    }

    
    let missing = Object.entries(itemData).filter(([k, v]) => !v); // if any of the values is a empty string
    
    if(missing.length > 0){
        missing = missing.map((x) => `${x[0]} is required!`);
        throw new Error(missing.join('\n'));
    }
    
    const item = await Data.create(itemData);
    
    return item;
}

module.exports = {
    getAll,
    getById,
    create
}