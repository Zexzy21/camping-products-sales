
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;

            const cartItem = `
                <div class="cart-item mb-4">
                    <div class="row">
                        <div class="col-3">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid">
                        </div>
                        <div class="col-6">
                            <h5>${item.name}</h5>
                            <p><strong>$${item.price.toFixed(2)}</strong></p>
                            <div class="input-group" style="max-width: 120px;">
                                <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${index}, -1)">-</button>
                                <input type="text" class="form-control text-center" value="${item.quantity}">
                                <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${index}, 1)">+</button>
                            </div>
                        </div>
                        <div class="col-3 text-end">
                            <button class="btn btn-danger" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i>
                            </button>
                           
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItem;
        });
    }

    // Calculate and display order summary
    const tax = subtotal * 0.08; // Assuming 8% tax
    const shipping = 10.00; // Fixed shipping cost
    const total = subtotal + tax + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
});

function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += change;

    // Ensure quantity doesn't go below 1
    if (cart[index].quantity < 1) cart[index].quantity = 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Refresh the page to update the cart
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1); // Remove the item from the cart
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Refresh the page to update the cart
}
