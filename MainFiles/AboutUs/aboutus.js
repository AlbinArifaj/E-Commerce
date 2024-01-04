  //animate
  let colorIndex = 0;
    const colors = ['#ff0000', '#ddefef', '#0000ff', '#8b0000']; // Add more colors if needed

    document.getElementById('colorChangeTrigger').addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        animateH5();
    });

    function animateH5() {
        const h5Element = document.getElementById('colorChangeTrigger');
        h5Element.style.color = colors[colorIndex];
    }


    //remove() metoda/funct
    $("#removeContent").remove(); 
    $("#removeItem").text("Balenciaga - Pushing boundaries with fashion and design."); 


    //Add perkatesisht append() metoda/funct
    var additionalContent = " Our newest partner!";
    $("#appendContent").append(additionalContent);



    //GET SET
    //get prej item 1
      var item1Content = $("#item1").text();
      console.log("Item 1 content:", item1Content);

    // set ne item 2
      $("#item2").text("Exclusive collection from the big ones!");

    // get nga sub-list item
      var brand1Content = $("#brand1").text();
      console.log("Brand 1 content:", brand1Content);

    // setting ne sub-list item
      $("#brand2").text("Prada");



    //slide in + callback
      $(document).ready(function(){
    //slide in
      function slideInParagraph() {
        $("#slideParagraph").slideDown(500, function(){ // 0.5 seconds
    // Callback- hide p
          $(this).delay(10000).slideUp(500); // Slide up 
        });
      }

    //click event 
      $("#slideButton").click(function(){
    //slide in
        slideInParagraph();
      });
    });