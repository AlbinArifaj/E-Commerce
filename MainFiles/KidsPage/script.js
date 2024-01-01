let popup = document.getElementById('popup');

var elemtsForCart={};
function openPopup(){
  $('html').css('overflow-y','hidden');

  popup.classList.add('open-popup');
}
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

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
});
var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
let userCart = JSON.parse(localStorage.getItem(loggedInUserEmail + '_cart')) || [];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// let cart = JSON.parse(localStorage.getItem('cart'));
// console.log("Card before init" + cart);
// if (cart.length === 0){
//   cart = [];
//   console.log("Card after init" + cart);

// }
function CartItem(productName,price,img){
  this.productName =productName;
  this.price =price;
  this.img= img;
}



function addToCart(productName, price, img) {

  // userCart
  const cartItem = new CartItem(productName,price,img);
  console.log("productName"+cartItem.productName)
  // const cartItem = { name: productName, price: price, img: img };
  // cart.push(cartItem);
  userCart.push(cartItem)
  // cart.push(cartItem);
  console.log(userCart)
  alert(`${productName} added to cart!`);
}

function viewCart() {
  // Save the cart to localStorage for use in the cart page
  // var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
  // let userCart = JSON.parse(localStorage.getItem(loggedInUserEmail + '_cart')) || [];
  // localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem(loggedInUserEmail + '_cart', JSON.stringify(userCart));

  // Navigate to the cart page
  window.location.href = '/MainFiles/Cart/cart.html';
}
document.addEventListener('click', function(event){
  if (event.target.classList.contains('submitButton')) {

    const getParagrah = document.querySelector(".productName").innerHTML;
    const getPrice = document.querySelector(".prductPrice").innerHTML;
    const getImage = document.querySelector(".productImage").src;
addToCart(getParagrah,getPrice, getImage)
  }
})




function closePopup(){
  popup.classList.remove('open-popup');
  $('html').css('overflow-y','scroll');
}
