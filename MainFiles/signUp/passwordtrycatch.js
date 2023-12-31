
var users = JSON.parse(localStorage.getItem('users')) || []; // inicializimi i array
function User(fullName, gender, email, password, confirmPassword, creditCard, expirationDate, cvv, newsletter) {
this.fullName = fullName;
this.gender = gender;
this.email = email;
this.password = password;
this.confirmPassword = confirmPassword;
this.creditCard = creditCard;
this.expirationDate = expirationDate;
this.cvv = cvv;
this.newsletter = newsletter;
}

function validateForm() {
var fullName = document.getElementById('fullName').value;
var gender = document.querySelector('input[name="gender"]:checked');
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
var creditCard = document.getElementById('creditCard').value;
var expirationDate = document.getElementById('expirationDate').value;
var cvv = document.getElementById('cvv').value;
var newsletter = document.getElementById('newsletter').checked;
try {
    if (password !== confirmPassword) {
        throw "Passwords do not match";
    }

    // Objekti per user
    var user = {
        fullName: fullName,
        gender: gender,
        email: email,
        password: password,
        creditCard: creditCard,
        expirationDate: expirationDate,
        cvv: cvv,
        newsletter: newsletter
    };

    // Add user ne array
    users.push(user);
    console.log(users); // array ne console behet print

} catch (error) {
    document.getElementById('passwordError').textContent = error;
    return false;
}

return true;
}