function showSidebar(){
  const  sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const  sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}



function validate (){

  if(document.getElementById("username").value== ""){
    
    alert("Enter your name");
    return false;

  }if (document.getElementById("email").value.indexOf("@")== -1){

    alert ("your email is invalid");
    return false;

  }if (document.getElementById("guests").value == ""){

    alert ("Please enter a number");
    return false;

  }if (document.getElementById("location").value==""){

    alert ("Please enter restaurant's location.");
    return false;

  }if (document.getElementById("date").value==""){

    alert ("Please enter date");
    return false;

  } 
  return true; 
}



function js_style(){
   
  document.getElementById("button").style.backgroundColor = "black";
  document.getElementById("button").style.color = "white";
  
}