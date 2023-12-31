
const cartItemsDiv = document.getElementById('cartItems');

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the cart data from localStorage (you can also use other storage mechanisms)
    const cartJson = localStorage.getItem('cart');
  
    console.log(cartJson);
    if (cartJson) {
      const cart = JSON.parse(cartJson);
      console.log(cart);
      displayCart(cart);
    } else {
      // If the cart is empty, display a message
      displayEmptyCart();
    }
  });
  
  function displayCart(cart) {
    const cartContainer = document.getElementById('cart');
  
    if (cart.length === 0) {
      displayEmptyCart();
    } else {
      let total = 0;
  
      cart.forEach(item => {
        total += item.price;
        console.log(total)
        cartContainer.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        cartItemsDiv.appendChild(itemDiv);

      });
  
      cartContainer.innerHTML += `<p>Total: $${total}</p>`;
    }
  }
  
  function displayEmptyCart() {
    const cartContainer = document.getElementById('cart');
    // cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  }