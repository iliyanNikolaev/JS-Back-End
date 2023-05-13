const fs = require('fs');
const path = require('path');
//console.log(__dirname) // C:\Users\Ilich\Desktop\SoftUni-JS-Back-End\Node.js-streams-and-utilities\FileSystem

const filePath = path.resolve(__dirname, './output.txt');

//creating file
fs.writeFile(filePath, 'Ilich', (err) => {
    if (err) {
        console.log('Has error!');
    }
    console.log('file created');
}); 

//deleting file
fs.unlink(filePath, (err) => {
    if (err) {
        console.log('Has error!');
    }

    console.log('file deleted!');
});