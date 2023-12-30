const canvas = document.getElementById('galleryCanvas');
const ctx = canvas.getContext('2d');
const images = ['/Images/Img1.jpg', '/Images/Img2.jpg', 'image3.jpg']; // Add your image file names here

let currentIndex = 0;

function loadImage(index) {
  const img = new Image();
  img.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  loadImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  loadImage(currentIndex);
}

// Initial load
loadImage(currentIndex);

// Add event listeners for navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    prevImage();
  }
});