
let popup = document.getElementById('popup')

function openPopup(){
  $('html').css('overflow-y','hidden')

  popup.classList.add('open-popup')
  let firstParagraph1 =  document.querySelectorAll(".linkToBuy")
  firstParagraph1.forEach(element=>{
      element.addEventListener("click",(event)=>{
        event.preventDefault();
        var clickedElement = event.currentTarget;
        var selectImage = clickedElement.querySelector("img").src;
        var elmentName = clickedElement.querySelector('.firstParagraph').innerHTML;
        var elementPrice = clickedElement.querySelector('.qmimi').innerHTML;

        document.querySelector(".productImage").src=selectImage
        document.querySelector(".productName").innerHTML = elmentName;
        document.querySelector(".prductPrice").innerHTML = elementPrice;

     });
  }); 
}

 
function closePopup(){
  popup.classList.remove('open-popup')
  $('html').css('overflow-y','scroll')
}
