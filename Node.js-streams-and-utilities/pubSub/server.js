const http = require('http');

const eventBus = require('./eventBus');

const server = http.createServer((req, res) => {

    /*logger.log(req.url);
    reporter.collect(`${req.method} - ${req.url}`) */
    
    eventBus.publish('request', {method: req.method, url: req.url})
    res.end()
});

server.listen(61080);

console.log('Server is listening on port 61080...');