var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
console.log("cart"+loggedInUserEmail)
document.addEventListener('DOMContentLoaded', function () {
    const cartJson = localStorage.getItem(loggedInUserEmail + '_cart');

    if (cartJson) {
      const cart = JSON.parse(cartJson);
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
    var headers = ["Product Image", "Product Name","Quantity" ,"Price"];
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
        var plus = document.createElement("input");
        plus.type=Text;
        plus.value= "+";
        var quantity = document.createElement("input");
        quantity.value =1;
        quantity.type=Number;
        quantity.setAttribute('min',1);
        quantity.setAttribute('step',1);
        img.src = item.img;
        row.insertCell(0).appendChild(img);
        
        row.insertCell(1).textContent = item.productName ;

        row.insertCell(2).appendChild(quantity);
        row.insertCell(3).textContent = item.price;
        // let price = item.price.slice(0,-1);
        let price =parseInt(item.price);
        console.log("price:"+price);
        let numberPrice =  Number(price);

      });
      
      let totalPrice= cart.map(item => parseInt(item.price))
      .reduce(getTotal);
      console.log("totalpricee:" + totalPrice);

      let lastRow =tbody.insertRow();
      lastRow.insertCell(0);
      lastRow.insertCell(1);
      let formattedPrice = totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      console.log("Formated"+typeof formattedPrice)
      lastRow.insertCell(2);

      lastRow.insertCell(3).textContent ="TOTAL:"+ formattedPrice+"$";

      table.appendChild(tbody);
      container.appendChild(table);    
  }
  
  function displayEmptyCart() {
    const cartContainer = document.getElementById('cart');
  }

  function getTotal(accumulator, itemPrice){
    return accumulator + itemPrice;
  }

  document.getElementById("goBack").addEventListener("click",function(){
    window.history.back();
  })