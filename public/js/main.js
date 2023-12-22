import http from './clients/http.js';

const productsList = document.querySelector('.products__list');

const addProductToList = product => {
    productsList.innerHTML += `<li class="product">${product.brand} - ${product.name}: $${product.cost}</li>`;
};

const getProducts = async () => {
    const products = await http.get('http://127.0.0.1:8080/api/products/');
    products.forEach(product => {
        console.log(product);
        addProductToList(product);
    });
};

const getProduct = async id => {
    const product = await http.get('http://127.0.0.1:8080/api/products/', id);
    console.log('product:', product);
    return 'hola'
};

document.querySelector('.btn-get-all').addEventListener('click', getProducts);
document.querySelector('.btn-get-1').addEventListener('click', () => { getProduct('6581e99407667f0108e4fee4'); });
document.querySelector('.btn-get-2').addEventListener('click', () => { getProduct('6581e99407667f0108e4fee5'); });
document.querySelector('.btn-get-3').addEventListener('click', () => { getProduct('6581e99407667f0108e4fee6'); });

document.querySelector('.btn-post').addEventListener('click', async () => {
    const newProduct = await http.post('http://127.0.0.1:8080/api/products/', {
        name: "Laptop Dell Inspire",
        brand: "Dell",
        cost: 1235,
        stock: 3,
        category: "computadoras",
        image: "/img/products/dell-inspire.jpg",
        description: "Potente laptop Dell con microprocesador Intel Core i7."
    });
    console.log('newProduct:', newProduct);
});

document.querySelector('.btn-put').addEventListener('click', async () => {
    const modifiedProduct = await http.put('http://127.0.0.1:8080/api/products/', '6581e99407667f0108e4fee5', { name: 'Galaxy S21 Ultra white', brand: 'Samsung', cost: 1945 });
    console.log('modifiedProduct:', modifiedProduct);
});

document.querySelector('.btn-delete').addEventListener('click', async () => {
    const deletedProduct = await http.delete('http://127.0.0.1:8080/api/products/', '65833bd1d2c3f765965a484d');
    console.log('deletedProduct:', deletedProduct);
});