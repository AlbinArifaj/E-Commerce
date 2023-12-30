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
      openPopup();
    });
  });

  document.querySelector('.productDetails').addEventListener('click', function () {
    if (currentProductIndex !== -1) {
      const modalBody = document.querySelector('.modal-body');

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





function closePopup(){
  popup.classList.remove('open-popup');
  $('html').css('overflow-y','scroll');
}
