const fs = require('fs');

const fileName = './models/data.json';

const data = JSON.parse(fs.readFileSync(fileName) );

async function persist(){
    return new Promise((res, rej) => {
        fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
            if(err == null){
                res();
            } else {
                rej(err);
            }
        });
    });
}

//persist() - Създаваме нов промис който приема дефолтните параметри resolve and reject, в промиса записваме във файл[writeFile] - "fileName", 
//масива "data" като го превръщаме в JSON. Метода writeFile дефолтно приема само един параметър - error, който ще бъде различен от null
//ако данните не са записани успешно във файла. Затова е проверката ако error == null, тогава resolve-ваме промиса, а в противен случай го reject-ваме
//като подаваме грешката 

function getAll(search){
    return data.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
}

function getById(id){
    return data.find(x => x.id == id);
}

async function create(reqData){
    const id = Math.ceil(Math.random() * 9999);
    
    const itemData = {
        id,
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

    data.push(itemData);
    await persist();

    return itemData;
}

module.exports = {
    getAll,
    getById,
    persist,
    create, 
    data
}