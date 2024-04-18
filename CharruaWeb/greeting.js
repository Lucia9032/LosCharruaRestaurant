function showSidebar(){
  const  sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}

function hideSidebar(){
  const  sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}

const myBox = document.getElementById("box");

myBox.addEventListener("mouseover", changeDesign);

function changeDesign(event){
  event.target.textContent = "See you soon!";
  event.target.setAttribute("style", "font-size: 50px; padding: 80px; ");

}

