document.querySelector('#root button').addEventListener('click', getLaptops);
document.querySelector('#root form').addEventListener('submit', createLaptop);

const list = document.querySelector('#root ul');

async function getLaptops() {
    const res = await fetch('http://localhost:3001/laptops');
    const laptops = await res.json();
    const fragment = document.createDocumentFragment();
    laptops.forEach(l => {
        const li = document.createElement('li');
        li.textContent = `${l.model} >>> \$${l.price}`;

        fragment.appendChild(li);
    });

    list.replaceChildren(fragment);
}

async function createLaptop(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const createdLaptop = Object.fromEntries(formData);

    await fetch('http://localhost:3001/laptops', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdLaptop)
    });

    e.target.reset();
    await getLaptops();
}

