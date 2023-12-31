let popup = document.getElementById('popup');

var elemtsForCart={};
function openPopup(){
  $('html').css('overflow-y','hidden');

  popup.classList.add('open-popup');
}

// document.querySelector(".submitButton").addEventListener("click",function(event){
//   event.preventDefault();
// })

  let firstParagraph1 =  document.querySelectorAll(".linkToBuy");
  firstParagraph1.forEach(element=>{
      element.addEventListener("click",(event)=>{
        var clickedElement = event.currentTarget;
        var selectImage = clickedElement.querySelector("img").src;
        var elmentName = clickedElement.querySelector('.firstParagraph').innerHTML;
        var elementPrice = clickedElement.querySelector('.qmimi').innerHTML;

        document.querySelector(".productImage").src=selectImage;
        document.querySelector(".productName").innerHTML = elmentName;
        document.querySelector(".prductPrice").innerHTML = elementPrice;

        // elemtsForCart={
        //   image:selectImage,
        //   name:elmentName,
        //   price:elementPrice
        // }

        
     });
  }); 
  function addToCart(){

    console.log(elemtsForCart.image);

    document.querySelector(".imgSrc").src = elemtsForCart.image;


  }

function initializeProductDetails(productDetailsArray) {

  
  let currentProductIndex = -1; 

document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.linkToBuy').forEach(function (button, index) {
    button.addEventListener('click', function () {
      currentProductIndex = index;
      console.log(index);
      openPopup();
    });
  });

  document.querySelector('.productDetails').addEventListener('click', function () {
    if (currentProductIndex !== -1) {
      const modalBody = document.querySelector('.modal-body');
      console.log(currentProductIndex);
      modalBody.innerHTML = '';
      const listElement = document.createElement('ul');

      productDetailsArray[currentProductIndex]
        .split('\n')
        .map(line => line.trim())
        .forEach(line => {
          if (line) {
            const listItem = document.createElement('li');
            listItem.innerHTML = line;
            listElement.appendChild(listItem);
          }
        });
        modalBody.style.marginTop = '150px';

      modalBody.appendChild(listElement);
    } else {
      console.error('Please select a product first.');
    }
  });
});

}



const myForm = document.getElementById('formDetails');

// Attach the event listener to the form
myForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
});

let cart=[];

function addToCart(productName, price) {
  const cartItem = { name: productName, price: price };
  cart.push(cartItem);
  console.log(cart);
  
  // Optionally, you can display an alert or update the UI to notify the user
  alert(`${productName} added to cart!`);
}

function viewCart() {
  // Save the cart to localStorage for use in the cart page
  localStorage.setItem('cart', JSON.stringify(cart));

  // Navigate to the cart page
  window.location.href = '/MainFiles/Cart/cart.html';
}

// function clickandCollect(){

document.addEventListener('click', function(event){
  if (event.target.classList.contains('submitButton')) {

const getParagrah = document.querySelector(".productName").innerHTML;
console.log(getParagrah);
const getPrice = document.querySelector(".prductPrice").innerHTML;
console.log(getPrice);

addToCart(getParagrah,getPrice)
  }
})
// }
function closePopup(){
  popup.classList.remove('open-popup');
  $('html').css('overflow-y','scroll');
}
