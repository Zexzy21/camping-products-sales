document.getElementById("myDropdown").addEventListener("change", function () {
    const selectedUrl = this.value; // Get the selected option's value
    if (selectedUrl) {
      window.location.href = selectedUrl; // Redirect to the selected URL
    }
  });


  function addToCart(event, button) {
      event.preventDefault(); // Prevent the default link behavior

      // Get product details from the card
      const card = button.closest('.card');
      const product = {
          name: card.querySelector('.card-title').innerText,
          price: parseFloat(card.querySelector('.card-text strong').innerText.replace('$', '')),
          image: card.querySelector('.card-img-top').src,
          quantity: 1 // Default quantity
      };

      // Get existing cart items from localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the product is already in the cart
      const existingProduct = cart.find(item => item.name === product.name);
      if (existingProduct) {
          existingProduct.quantity += 1; // Increase quantity if already in cart
      } else {
          cart.push(product); // Add new product to cart
      }

      // Save updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Redirect to the cart page
      window.location.href = 'cart.html';
  }
