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
      // let total = 0;
      cart.forEach(item => {
        var row = tbody.insertRow();
        var img = document.createElement("img");
        img.src = item.img;
        row.insertCell(0)
        .appendChild(img);
        row.insertCell(1).textContent = item.name;
        row.insertCell(2).textContent = item.price;
        // let price = item.price.slice(0,-1);
        let price =parseInt(item.price);
        console.log("price:"+price);
        let numberPrice =  Number(price);
        // total +=numberPrice;
        // console.log(total);
      });
      
      let totalPrice= cart.map(item => parseInt(item.price))
      .reduce(getTotal);
      console.log("totalpricee:" + totalPrice);

      let lastRow =tbody.insertRow();
      lastRow.insertCell(0);
      lastRow.insertCell(1);
      let formattedPrice = totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      console.log("Formated"+typeof formattedPrice)
      lastRow.insertCell(2).textContent ="TOTAL:"+ formattedPrice+"$";

      table.appendChild(tbody);
      container.appendChild(table);    
  }
  
  function displayEmptyCart() {
    const cartContainer = document.getElementById('cart');
  }

  function getTotal(accumulator, itemPrice){
    return accumulator + itemPrice;
  }