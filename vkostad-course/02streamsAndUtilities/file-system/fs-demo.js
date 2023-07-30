const fs = require('fs').promises;

// callback demo
// fs.readFile('./demo.txt', (err, data) => {
//     if(err != null) {
//         return console.error(err.message);
//     } 

//     console.log(data.toString());
// });


// promises demo

async function readDemo() {
    try {
        const data = await fs.readFile('./demo.txt');

        console.log(data.toString());
    } catch (err) {
        console.log('Error in readDemo >>> ' + err.message);
    }
}

async function readDirectory() {
    try {
        const data = await fs.readdir('.');
        
        data.forEach(async (item) => {
            const itemStats = await fs.stat(`./${item}`);

            if(itemStats.isDirectory()) {
                console.log(`${item} is a directory`);
            } else {
                console.log(`${item} is a file`);
            }
        })
    } catch (err) {
        console.log('Error in readDirectory >>> ' + err.message);
    }
}

const data = ['This is demo', 'for write a file'];

async function writeFile() {
    try {
        await fs.writeFile('./writeFileDemo.txt', data.join(' '), 'utf-8');
    } catch (err) {
        console.log('Error in writeFile >>> ' + err.message )
    }
}

writeFile();
