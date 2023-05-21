const fs = require('fs');

const fileName = './models/data.json';

const data = JSON.parse(fs.readFileSync(fileName));

async function persist(){
    return new Promise((res, rej) => {
        fs.writeFile(fileName, JSON.stringify(data), (err) => {
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

function getAll(){
    return data;
}

function getById(id){
    return data.find(x => x.id == id);
}

module.exports = {
    getAll,
    getById,
    persist, 
    data
}