function layout(body) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>http Node.js server</title>
    </head>
    <body>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/catalog">Catalog</a>
            <a href="/create">Create</a>
        </nav>
        
        ${body}
    </body>
    </html>
    `
}

const data = [
    {
        id: '55d42628-259a-11ee-be56-0242ac120002',
        name: 'Item 1',
        color: 'Red',
    },
    {
        id: '78275876-259a-11ee-be56-0242ac120002',
        name: 'Item 2',
        color: 'Blue',
    }
]

module.exports = {
    layout,
    data
};