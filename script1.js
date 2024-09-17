let cart = JSON.parse(localStorage.getItem('cart')) || [];
const currencySymbol = 'Rs.'; 

function addToCart(item, price, quantity) {
    quantity = parseInt(quantity); // Ensure quantity is a number
    cart.push({ item, price, quantity }); // Include quantity in cart item
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-count').innerText = cart.length;

    // Visual feedback (example - you can customize this)
    const addedItem = document.querySelector(`article:has(h2:contains("${item}"))`);
    addedItem.classList.add('added-to-cart'); 
    setTimeout(() => addedItem.classList.remove('added-to-cart'), 1000); // Remove highlight after 1 second

    alert(`${quantity} ${item}(s) added to cart!`);

}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsList.innerHTML = '';

    let total = 0;
    cart.forEach(({ item, price }, index) => {
        const li = document.createElement('li');
        li.innerText = `${item} - ${currencySymbol}${price.toFixed(2)} `;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);

        cartItemsList.appendChild(li);
        total += price;
    });

    totalPriceElement.innerText = total.toFixed(2);
    cartModal.style.display = 'flex';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-count').innerText = cart.length;
    showCart();
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

function checkout() {
    alert('Booking confirmed! Your items will be delivered soon.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-count').innerText = 0;
    closeCart();
}