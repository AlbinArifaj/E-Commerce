          function showSidebar(){
  
              const sidebar=document.querySelector('.sidebar')
              sidebar.style.display='flex'
          }
          function hideSidebar(){
              const sidebar = document.querySelector('.sidebar')
              sidebar.style.display='none'
          }            
       
document.addEventListener('DOMContentLoaded', function() {
    var loggendInName = localStorage.getItem('LogedUserName');
    console.log(loggendInName);

setTimeout(function() {
    let loggedInUserElement = document.querySelector(".loggedInUser");


    if (loggedInUserElement && loggendInName !== "null" ) {
        loggedInUserElement.innerHTML = loggendInName;
        
        console.log(loggedInUserElement.innerHTML);

        var selectElement= document.createElement('select')
        var option1 = document.createElement('option')
        selectElement.style.border = "none";
        selectElement.style.fontSize = "20px";
        selectElement.style.boxShadow ="0 0 1em 0 rgba(0, 0, 0, 0.2)"
        selectElement.style.padding = "5px";  
        option1.text = loggendInName;
        selectElement.add(option1);

        var option2 = document.createElement('option')
        option2.text = "Log Out";
        selectElement.add(option2);
        loggedInUserElement.replaceWith(selectElement);

        var PargraphToLogin = document.createElement('p');
        PargraphToLogin.innerHTML = ""
        
        selectElement.addEventListener('change',function(){
            var selected = selectElement.options[selectElement.selectedIndex].text; 
            if(selected==="Log Out"){
                var loogedOut =localStorage.setItem('LogedUserName',null);
                localStorage.setItem('loggedInUserEmail',null);
                option1.text = loogedOut;
                alert("Logged Out")
                selectElement.replaceWith(PargraphToLogin);

            }   
        })
    


        console.log("Username");
    } else {
        console.log(" not found.");
    }
}, 1000);
    
});
