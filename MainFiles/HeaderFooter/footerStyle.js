          function showSidebar(){
  
              const sidebar=document.querySelector('.sidebar')
              sidebar.style.display='flex'
          }
          function hideSidebar(){
              const sidebar = document.querySelector('.sidebar')
              sidebar.style.display='none'
          }            var loggendInName = localStorage.getItem('LogedUserName');

document.addEventListener('DOMContentLoaded', function() {

setTimeout(function() {
    let loggedInUserElement = document.querySelector(".loggedInUser");
    console.log(loggedInUserElement);

    if (loggedInUserElement) {
        loggedInUserElement.innerHTML = loggendInName;

        var selectElement= document.createElement('select')
        var option1 = document.createElement('option')
        option1.text = loggendInName;
        selectElement.add(option1);

        var option2 = document.createElement('option')
        option2.text = "Log Out";
        selectElement.add(option2);
        loggedInUserElement.replaceWith(selectElement);

        var PargraphToLogin = document.createElement('p');
        PargraphToLogin.text = "Login Or SignUp ->"
        // loggedInUserElement.replaceWith(PargraphToLogin);

        selectElement.addEventListener('change',function(){
            var selected = selectElement.options[selectElement.selectedIndex].text; 
            if(selected==="Log Out"){
                var loogedOut =localStorage.setItem('LogedUserName',null);
                localStorage.setItem('loggedInUserEmail',null);
                option1.text = loogedOut    ;

                console.log("Out")
                selectElement.replaceWith(PargraphToLogin);

            }   
        })



        console.log("Username");
    } else {
        console.error("loggedInUses not found.");
    }
}, 100);
});
