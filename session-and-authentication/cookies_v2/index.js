
const server = require('http').createServer((req, res) => {
    let visited = 0;
    if (req.url == '/') {
        const cookies = parseCookie(req.headers.cookie);

        if (cookies.visited != undefined) {
            visited = Number(cookies.visited);
        }

        visited++;

        res.writeHead(200, {
            'Set-Cookie': `visited=${visited}`
        })

        res.write(`<p>You visited this site ${visited} times</p>`);

        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
}).listen(3000);

function parseCookie(cookies) {
    if(cookies != undefined) {
        const parsedCookies = Object.fromEntries(cookies
            .split('; ')
            .map(c => c.split('=')));
    
        return parsedCookies;
    } else {
        return {};
    }
}


