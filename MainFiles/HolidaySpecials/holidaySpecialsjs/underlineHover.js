const heading = document.getElementById('van_cleef');
const underline = document.getElementById('underline');

heading.addEventListener('mousemove', function(event) {
    const boundingRect = this.getBoundingClientRect();
    const mouseX = event.clientX - boundingRect.left;
    
    underline.style.width = mouseX + 'px';
});

heading.addEventListener('mouseout', function() {
    underline.style.width = '0';
});