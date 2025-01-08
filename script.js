// script.js
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produkt wurde zum Warenkorb hinzugefügt!');
    });
});
