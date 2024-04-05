// script.js
//
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    fetch('/products/')
        .then(response => response.json())
        .then(products => {
            console.log('hello')
            const productList = document.querySelector('#product-list');
            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = `${product.name} - $${product.price}`;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
});
