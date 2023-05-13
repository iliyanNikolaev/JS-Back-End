const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});

    switch (req.url) {
        case '/':
            res.write('<h2>Hello from server!</h2>');
            break;
        case '/cats':
            res.write('<h2>Some cats here</h2>');
            break;
        default:
            res.write('<h2>404 Not Found</h2>');
            break;
    }
    res.end();
});

server.listen(5000);
console.log('Server is listening on port 5000...');