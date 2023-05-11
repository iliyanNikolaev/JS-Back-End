const { write } = require('fs');
const http = require('http');
const homePage = `
    <h1>Home page</h1>
    <p>Welcome to our site</p>`;

const aboutPage = `
    <h1>About page</h1>
    <p>Contant us: +1-227-0227</p>`;

const defaultPage = `
<h1>404 Not Found</h1>
<p>The resource you requested cannot be found</p>`;

const catalogPage = `
<h1>Catalog page</h1>
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>`;

const routes = {
    '/': homePage,
    '/about': aboutPage,
    '/catalog': catalogPage
}

const server = http.createServer((request, response) => {
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);

    const url = new URL(request.url, `http://${request.headers.host}`);
    console.log(url);

    const page = routes[url.pathname];

    if(page != undefined){
        response.write(html(page));
    } else {
        response.write(html(defaultPage));
    }

    response.end();
});

server.listen(3000);


function html(body){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/test">404</a></li>
        </ul>
        </nav>
        ${body}
    </body>
    </html>`
}

