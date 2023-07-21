const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello from Node.js http server!');
    res.end();
});


server.listen(3001);