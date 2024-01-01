var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
document.addEventListener('DOMContentLoaded', function () {
    const cartJson = localStorage.getItem(loggedInUserEmail + '_cart');

    if (cartJson) {
      const cart = JSON.parse(cartJson);
      console.log("calling to diplay objects");
      displayCart(cart);
    } else {
      displayEmptyCart();
    }
  });
  
  function displayCart(cart) {
    var container = document.getElementById("table-container");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var headerRow = thead.insertRow();
    var headers = ["Image", "Product Name", "Price"];
    headers.forEach(function(header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
  });

  table.appendChild(thead);
      var tbody = document.createElement("tbody");
      console.log(cart);
      cart.forEach(item => {
        var row = tbody.insertRow();
        var img = document.createElement("img");
        img.src = item.img;
        row.insertCell(0)
        .appendChild(img);
        row.insertCell(1).textContent = item.name;
        row.insertCell(2).textContent = item.price;
      });
      table.appendChild(tbody);
      container.appendChild(table);    
  }
  
  function displayEmptyCart() {
    const cartContainer = document.getElementById('cart');
  }