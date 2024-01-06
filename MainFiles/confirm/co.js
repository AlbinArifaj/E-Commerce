document.addEventListener('DOMContentLoaded', function () {
    const confirmButton = document.getElementById('confirmButton');
    const bankNumberInput = document.getElementById('bankNumber');
    const confirmationMessage = document.getElementById('confirmationMessage');

    confirmButton.addEventListener('click', function () {
        const bankNumber = bankNumberInput.value;

        // You can add more validation for the bank number if needed
        if (bankNumber.trim() !== "") {
            displayConfirmationMessage();
        } else {
            displayErrorMessage("Please enter a valid bank number.");
        }
    });

    function displayConfirmationMessage() {
        confirmationMessage.innerHTML = "Bank number confirmed! Thank you for your order.";
    }

    function displayErrorMessage(message) {
        confirmationMessage.innerHTML = `<span style="color: red;">${message}</span>`;
    }
});