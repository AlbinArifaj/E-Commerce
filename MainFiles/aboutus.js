// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.arc(200, 90, 80, 0, 2 * Math.PI);
// ctx.stroke();

// var canvas = document.getElementById("myCanvas");
// var context = canvas.getContext('2d');

// var image = document.getElementById("people");
// context.drawImage(image, 0, 0, 300, 200);

// document.addEventListener('DOMContentLoaded', function () {
//     // Get the canvas element
//     var canvas = document.getElementById('myCanvas');
//     var ctx = canvas.getContext('2d');

//     // Create an image element
//     var img = new Image();
//     img.src ='Images/Img4.jpeg';

//     // Wait for the image to load
//     img.onload = function () {
//         // Draw the image on the canvas
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };
// });

(function(){
    c1 = document.getElementById("slide1");
    c2 = document.getElementById("slide2");
    $ = c1.getContext("2d");
    $$ = c2.getContext("2d");
    
    var i = 1; 
    var r = 0; 
    
  img = new Image();
    
  img.src =  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/131045/slideshow.jpg?" + new Date().getTime();
  
  img.onload = function() {
      $.drawImage(img,0,0,320,240,0,0,320,240);
      $$.drawImage(img,0,240,320,240,9999,0,320,240);
  };
    
  var t = setInterval(function() {
      var one = (i - 1) * 240;
      if (i == 1 || i == 2)
        var two = i * 240;
        else
        two = 0;
    
      $.drawImage(img,0,one,320,240,0,0,320,240);
      c2.width = c2.width;
      $$.beginPath();
      $$.arc(160, 120, r, 0, Math.PI * 2, false);
      $$.clip();
      $$.drawImage(img,0,two,320,240,0,0,320,240);
    
      r = r + 2;
      if (r > 200) {
        r = 0;
        i++;
      }
      if (i > 3) i = 1;
    }, 40);
  })();