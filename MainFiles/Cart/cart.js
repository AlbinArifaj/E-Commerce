
// const cartItemsDiv = document.getElementById('cartItems');

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the cart data from localStorage (you can also use other storage mechanisms)
    const cartJson = localStorage.getItem('cart');
  
    if (cartJson) {
      const cart = JSON.parse(cartJson);
      console.log("calling to diplay objects");
      displayCart(cart);
    } else {
      // If the cart is empty, display a message
      displayEmptyCart();
    }
  });
  
  function displayCart(cart) {
    // const cartContainer = document.getElementById('cart');
  
    var container = document.getElementById("table-container");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var headerRow = thead.insertRow();
    var headers = ["Image", "Product Name", "Price"];

    // if (cart.length === 0) {
    //   displayEmptyCart();
    // } else {
    //   let total = 0;
    // }

    headers.forEach(function(header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
  });

  table.appendChild(thead);


      var tbody = document.createElement("tbody");


  
      console.log(cart);
      cart.forEach(item => {
        // total += item.price;
        // console.log(total)
        // cartContainer.innerHTML += `<td>${item.name} - $${item.price}</td>`;
      
        var row = tbody.insertRow();

        var img = document.createElement("img");
        img.src = item.img;

        // Append the image to the cell
        row.insertCell(0)
        .appendChild(img);

        row.insertCell(1).textContent = item.name;
        row.insertCell(2).textContent = item.price;

      });
  
      table.appendChild(tbody);

      container.appendChild(table);

      // cartContainer.innerHTML += `<p>Total: $${total}</p>`;
    
  }
  
  function displayEmptyCart() {
    const cartContainer = document.getElementById('cart');
  }