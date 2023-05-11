function html(body, title = 'Demo Site'){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>${title}</title>
    </head>
    <body>
        <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/create">Create</a></li>
        <li><a href="/test">404</a></li>
        </ul>
        </nav>
        ${body}
    </body>
    </html>`
}

const data = [
    {
        id: 'asdf001',
        name: 'Item 1',
        color: 'red'
    },
    {
        id: 'asdf002',
        name: 'Item 2',
        color: 'green'
    },
    {
        id: 'asdf003',
        name: 'Item 3',
        color: 'blue'
    }
]

module.exports = {
    html,
    data
}