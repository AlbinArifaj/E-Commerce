var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
console.log("cart"+loggedInUserEmail)

document.addEventListener('DOMContentLoaded', function () {
    const cartJson = localStorage.getItem(loggedInUserEmail + '_cart');

    if (cartJson) {
      const cart = JSON.parse(cartJson);
      displayCart(cart);
    } else {
      var buttonElemnt = document.getElementById("Buy");
      buttonElemnt.style.display="none";
      displayEmptyCart();
    }
  });
  
  
  function displayCart(cart) {
    var container = document.getElementById("table-container");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var headerRow = thead.insertRow();
    var headers = ["Product Image", "Product Name","Quantity" ,"Price","RemoveItem"];
    headers.forEach(function(header) {
      var th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
  });

  table.appendChild(thead);
      var tbody = document.createElement("tbody");
      console.log(cart);
      let totalPrice= cart.map(item => parseInt(item.price))
      .reduce(getTotal);
      console.log("Initial Total Price:", totalPrice); 
    
      cart.forEach((item,index) => {
        var row = tbody.insertRow();
        var img = document.createElement("img");
        var plus = document.createElement("input");
        var RemoveItem = document.createElement("button");
        RemoveItem.textContent="X";
        // var buttonElemnt = document.getElementById("Buy");
        // buttonElemnt.style.display="none";
    
        RemoveItem.addEventListener("click", function () {
          RemoveItemm(index, cart);
        });
        plus.id ="totalPriceCell"
        plus.type=Text;
        plus.value= "+";
        var quantity = document.createElement("input");
        quantity.id="totalPriceCell"
        item.quantity = parseInt(item.quantity) || 1;

        let numberPrice = parseFloat(item.quantity) || 1;

        quantity.value =  1;
        quantity.type="Number";
        quantity.setAttribute('min',1);
        quantity.setAttribute('step',1);

        quantity.addEventListener('input', function () {
          let initialValue = Number(quantity.value);
            let newValue = this.value || 1;
            if (newValue !== initialValue) {
                initialValue = newValue;
                updatePrice(row, item, initialValue);
                updateCartInLocalStorage(cart);
                updateTotalPrice(cart);
            }
        });

        img.src = item.img;
        row.insertCell(0).appendChild(img);
        row.insertCell(1).textContent = item.productName ;
        row.insertCell(2).appendChild(quantity);
        row.insertCell(3).textContent = parseInt(item.price) ;
        row.insertCell(4).appendChild(RemoveItem);
        console.log("itemprice:"+typeof parseInt(item.price))
        let price =parseInt(item.price);
        console.log("price:"+price);
         numberPrice =  Number(price);
         totalPrice += updateTotalPrice(item.quantity || 1, item.price);
      });
      let lastRow =tbody.insertRow();
      lastRow.insertCell(0);
      lastRow.insertCell(1);
      let formattedPrice = totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      console.log("Formated"+typeof formattedPrice)
      lastRow.insertCell(2);
      let lastcell =  lastRow.insertCell(3)
      lastcell.setAttribute('id', 'lastCell');
      lastcell.value=1;
    
      lastcell.textContent = "TOTAL:" + formattedPrice + "$";
      table.appendChild(tbody);
      container.appendChild(table);    
      updateTotalPrice(cart);
  }

  function displayEmptyCart() {
    const cartContainer = document.getElementById('cart');

  }

  function updateQuantity(item,newQuantiy){
      item.quantity = newQuantiy;
  }

  function getTotal(accumulator, itemPrice){
    return accumulator + itemPrice;
  }

  function calculateItemPrice(quantity, price) {
    return parseInt(quantity) * parseInt(price);
  }

  function updatePrice(row, item, newQuantity) {
    const priceCell = row.cells[3];
    item.quantity = newQuantity;
    const newPrice = calculateItemPrice(newQuantity, item.price);
    priceCell.textContent = newPrice +  "$";
  }

  function updateTotalPrice(cart) { 
    let totalPrice = Array.isArray(cart) ? calculateTotalPrice(cart) : 0;
    let formattedPrice = totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    console.log(formattedPrice);
    let lastCell = document.getElementById("lastCell") 
    if (lastCell) {
    lastCell.textContent = "TOTAL:" + formattedPrice + "$";
  } else {
    console.error("Element with ID 'lastCell' not found");
  }
  console.log("Updated Total Price:", totalPrice); 

  }
  function calculateTotalPrice(cart) {
    return cart.reduce((acc, item) => acc + calculateItemPrice(item.quantity || 1, item.price), 0);
  }
  function updateCartInLocalStorage(cart) {
    localStorage.setItem(loggedInUserEmail + '_cart', JSON.stringify(cart));
  }
  document.getElementById("goBack").addEventListener("click",function(){
    window.history.back();
  })
  window.addEventListener('beforeunload', function () {
    const quantityInput = document.getElementById("totalPriceCell");
    if (quantityInput) {
      quantityInput.value = 1;
    }
  });
  function calculateTotalPriceForQuantityOne(cart) {
    return cart.reduce((acc, item) => acc + calculateItemPrice(1, item.price), 0);
  }

  function displayPrice(totalprice){
    const quantityInput = document.getElementById("lastCell");
    quantityInput.textContent = "TOTAL:" + totalprice + "$";
  }

  function RemoveItemm(index,cart){
    if (index>-1 && index < cart.length) {
    console.log("RemoveItem called with index" + index)
    cart.splice(index,1);
    updateCartInLocalStorage(cart);
    const tableBody = document.querySelector("#table-container tbody");
    if (tableBody.children[index]) {
      tableBody.removeChild(tableBody.children[index]);
      
    }
  }
  const updatedCart = JSON.parse(localStorage.getItem(loggedInUserEmail + '_cart'));

  // console.log(typeof updatedCart.length);

  if(updatedCart.length >=1){
    const initialTotalPrice = calculateTotalPriceForQuantityOne(cart);
    displayPrice(initialTotalPrice);
  }else{
    var buttonElemnt = document.getElementById("Buy");
    buttonElemnt.style.display="none";
    var container = document.getElementById("table-container");
    container.innerHTML = "";
  }
  }


  document.getElementById("Buy").addEventListener("click",function(){
    console.log("Clicked")
    var container = document.getElementById("table-container");
    container.innerHTML = "";
    localStorage.setItem(loggedInUserEmail + '_cart',null)
  //   var buttonElemnt = document.getElementById("Buy");
  //   buttonElemnt.style.display="none";
  })
  

    window.addEventListener('load', function () {
    const cartJson = localStorage.getItem(loggedInUserEmail + '_cart');
    
    if(cartJson){
    const cart = JSON.parse(cartJson);
    if(cart.length>0){
    let initialTotalPrice = calculateTotalPriceForQuantityOne(cart);
    displayPrice(initialTotalPrice);
    }else{
          var buttonElemnt = document.getElementById("Buy");
          buttonElemnt.style.display="none";
    }
    }
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');

    if(loggedInUserEmail==="null" ){
      var buttonElemnt = document.getElementById("Buy");
      buttonElemnt.style.display="none";
    }
  });
