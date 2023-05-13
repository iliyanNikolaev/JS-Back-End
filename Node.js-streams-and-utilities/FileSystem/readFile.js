const fs = require('fs');
const fsp = require('fs/promises');

// ---- Synchronous reading from file
const text = fs.readFileSync('./data.txt', { encoding: 'utf-8' });
console.log(text);
console.log('Read from file');

// ---- Asynchronous reading from file
fs.readFile('./data.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        return err
    }

    console.log(data);
});

console.log('Read from file');

// ---- Asynchronous reading with promises
fsp.readFile('./data.txt', { encoding: 'utf-8' })
    .then(result => {
        console.log(result);
    })

async function readFromFile(path) {
    const result = await fsp.readFile(path, { encoding: 'utf-8' });
    console.log(result);
}

readFromFile('./data.txt');
