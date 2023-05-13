const homePage = require('./JSviews/index');
const editPage = require('./JSviews/edit');
const siteCSS = require('./JScss/siteCSS');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    switch(req.url){
        case '/':
            res.write(homePage);
            break;
        case '/content/styles/site.css':
            res.writeHead(200, {
                'Content-Type': 'text/css'
            })
            res.write(siteCSS); 
            break;
        case '/edit': 
            res.write(editPage);
            break;
        default:
            res.write(`
                <h1>404</h1>
            `)
    }

    res.end();
});

server.listen(5000);
console.log('Server is listening on port 5000...');