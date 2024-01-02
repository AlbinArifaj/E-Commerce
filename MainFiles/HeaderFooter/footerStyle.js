document.querySelector(".sidebar").addEventListener("click",function(event){
    event.preventDefault()
  })
  
          function showSidebar(){
  
              const sidebar=document.querySelector('.sidebar')
              sidebar.style.display='flex'
          }
          function hideSidebar(){
              const sidebar = document.querySelector('.sidebar')
              sidebar.style.display='none'
          }