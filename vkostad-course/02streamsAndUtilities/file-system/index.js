const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method == 'GET') {
        res.write('OK');
        res.end();
    } else if(req.method == 'POST'){
        const result = [];

        req.on('data', (data) => {
            result.push(data);
        });

        req.on('end', () => {
            const resultJSON = result.join('');
            const resObj = JSON.parse(resultJSON);
            console.log(typeof resObj);
            console.log(resObj);
            res.end();
        });
    }
});

server.listen(6161);
console.log('Server is listening on port 6161...');