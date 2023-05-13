const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');
const writeStream = fs.createWriteStream('./data-pipe.txt');

readStream.pipe(writeStream);