let laptops = [
    {
        id: '132154',
        model: 'ASUS TUF',
        price: 1199
    },
    {
        id: '132432',
        model: 'ACER NITRO',
        price: 1299
    },
    {
        id: '463654',
        model: 'LENOVO LEGION',
        price: 1599
    }
];

function createLaptop(data) {
    const createdLaptop = {
        id: (Math.random() * 99999).toString().slice(-6),
        ...data
    }
    laptops.push(createdLaptop);
    return createdLaptop;
}

function deleteLaptop(id) {
    laptops = laptops.filter(x => x.id != id);
}

function getLaptops() {
    return laptops;
}

function getLaptopById(id) {
    const laptop = laptops.find(l => l.id == id);

    return laptop;
}

function editLaptopById(id, data) {
    laptops = laptops.map(l => l.id == id ? data : l);
}

module.exports = {
    getLaptops, 
    createLaptop,
    deleteLaptop,
    getLaptopById,
    editLaptopById
}