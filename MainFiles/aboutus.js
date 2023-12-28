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

document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // Create an image element
    var img = new Image();

    // Replace 'path/to/your/image.jpg' with the actual path to your image file
    img.src = 'path/to/your/image.jpg';

    // Wait for the image to load
    img.onload = function () {
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
});


