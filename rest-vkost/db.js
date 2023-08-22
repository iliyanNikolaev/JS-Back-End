const laptops = [
    {
        model: 'ASUS TUF',
        price: 1199
    },
    {
        model: 'ACER NITRO',
        price: 1299
    },
    {
        model: 'LENOVO LEGION',
        price: 1599
    }
];

function createLaptop(data) {
    laptops.push(data);
}

module.exports = {
    laptops, 
    createLaptop
}