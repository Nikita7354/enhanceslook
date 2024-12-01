// Simple JS for additional interactivity
document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('click', () => {
            const productName = product.querySelector('h3').textContent;
            alert(`You selected ${productName}`);
        });
    });
});
