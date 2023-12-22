function changeText() {
    var textElement = document.getElementById('text-to-change');
    textElement.innerHTML = 'Get our Christmas discount!';
    textElement.style.color = 'white'; 
}

function resetText(element) {
    element.innerHTML = "Order Dior's Advent Calendar";
    element.style.color = 'rgb(183, 183, 182)'; 
}