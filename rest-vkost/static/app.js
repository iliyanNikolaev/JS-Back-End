document.querySelector('#root button').addEventListener('click', renderLaptops);
document.querySelector('#root form').addEventListener('submit', createLaptop);

const list = document.querySelector('#root ul');
list.addEventListener('click', editAndDeleteHandlers);

const secondView = document.querySelector('#second-view');

async function renderLaptops() {
    const res = await fetch('http://localhost:3001/laptops');
    const laptops = await res.json();
    const fragment = document.createDocumentFragment();
    laptops.forEach(l => {
        const li = document.createElement('li');
        li.textContent = `${l.model} >>> \$${l.price}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.id = `${l.id}`;
        li.appendChild(deleteBtn);
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.id = `${l.id}`;
        li.appendChild(editBtn);
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
    await renderLaptops();
}

async function editAndDeleteHandlers(e) {
    if(e.target.tagName == 'BUTTON' && e.target.textContent == 'Delete') {
        deleteHandler(e);
    } else if(e.target.tagName == 'BUTTON' && e.target.textContent == 'Edit') {
        editHandler(e);
    }
}

async function deleteHandler(e) {
    await fetch('http://localhost:3001/laptops/' + e.target.id, {
            method: 'delete'
        });

    await renderLaptops();
}

async function editHandler(e) {
    const response = await fetch('http://localhost:3001/laptops/' + e.target.id);
        const laptop = await response.json();
        
        generateEditForm(laptop);
}


function generateEditForm(data) {
    const form = document.createElement('form');
    
    const modelInput = document.createElement('input');
    modelInput.name = 'model';
    modelInput.value = data.model;

    const priceInput = document.createElement('input');
    priceInput.name = 'price';
    priceInput.value = data.price;

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';

    form.appendChild(modelInput);
    form.appendChild(priceInput);
    form.appendChild(submitBtn);

    secondView.appendChild(form);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        await fetch('http://localhost:3001/laptops/' + data.id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                model: modelInput.value,
                price: priceInput.value
            })
        });

        secondView.innerHTML = '';

        await renderLaptops();
    });
}