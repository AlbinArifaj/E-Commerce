document.addEventListener('DOMContentLoaded', function () {
    const confirmButton = document.getElementById('confirmButton');
    const confirmationMessage = document.getElementById('confirmationMessage');

    confirmButton.addEventListener('click', function () {
        // Simulate a confirmation process
        const isOrderConfirmed = confirm("Are you sure you want to confirm the order?");
        
        if (isOrderConfirmed) {
            displayConfirmationMessage();
        }
    });

    function displayConfirmationMessage() {
        confirmationMessage.innerHTML = "Order confirmed! Thank you for your purchase.";
    }
});