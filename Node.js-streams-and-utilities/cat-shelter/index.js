const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if(req.url == '/') {
        const homePage = await readFromFile('./views/home.html');        
        res.write(homePage);

    } else if(req.url == '/content/styles/site.css'){
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        const siteCSS = await readFromFile('./content/styles/site.css');
        res.write(siteCSS);

    } else if(req.url == '/edit'){
        const editPage = await readFromFile('./views/editCat.html');
        res.write(editPage);
    } else if(req.url == '/create'){
        const createPage = await readFromFile('./views/addCat.html');
        res.write(createPage);
    } else {

        res.write('<h1>404</h1>')
    }

    res.end();
});


async function readFromFile(path) {
    return fs.readFile(path, { encoding: 'utf-8' });
}

server.listen(5000);
console.log('Server is listening on port 5000...');