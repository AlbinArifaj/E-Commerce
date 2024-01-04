
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


    // let cvvValue = Number(cvv);
    // if(Number.isNaN(cvvValue)){
    //     throw "Cvv is Not Valid";
    // }
    let cvvValue = Number(cvv);
    if (Number.isNaN(cvvValue) || cvvValue < 0) {
    throw "CVV is not valid. CVV should be a non-negative number.";
    }
    

    // Objekti per user
    var user = new User( fullName, gender, email, password, creditCard, expirationDate, cvv, newsletter, new Date());
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    loginUser(user.email,user.fullName);

    console.log(users.password); // array ne console behet print
} catch (error) {
    document.getElementById('passwordError').textContent = error;
    return false;
}
return true;
}


function loginUser(email,fullName) {
    localStorage.setItem("LogedUserName",fullName);

  localStorage.setItem('loggedInUserEmail', email);
  console.log(email)
  let userCart = JSON.parse(localStorage.getItem(email + '_cart')) || [];
  localStorage.setItem('cart', JSON.stringify(userCart));
}