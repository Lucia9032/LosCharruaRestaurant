function showSidebar(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



var mainDiv = document.querySelector('.main');
var mainDisplay = 0;

function hideShow(){
    if(mainDisplay == 1){
        mainDiv.style.display = 'block';
        mainDisplay = 0;
    } else{
        mainDiv.style.display = 'none';
        mainDisplay = 1;
    }
}


  const button = document.getElementById('Btn');
    let isTextChanged = false;

    button.addEventListener('click', () => {
        if (isTextChanged) {
            button.textContent = "Less info";
        } else {
            button.textContent = "More info";
        }
        isTextChanged = !isTextChanged;
    });


  
    var secDiv = document.querySelector('.sectext');
    var secDisplay = 0;

    function SecText(){
        if(secDisplay == 1){
            secDiv.style.display = 'block';
            secDisplay = 0;
        } else{
            secDiv.style.display = 'none';
            secDisplay = 1;
        }
    }

  const button2 = document.getElementById('Btn2');
    let TextChanged = false;

    button2.addEventListener('click', () => {
        if (TextChanged) {
            button2.textContent = "Less info";
        } else {
            button2.textContent = "More info";
        }
        TextChanged = !TextChanged;
    });

 
    function changeImage1() {
    var image = document.getElementById('chefimg');
    if (image.src.match("/images/chefs.png")) {
        image.src = "/images/image 29 (1).png";
    } else {
        image.src = "/images/chefs.png";
    }
    }

    function changeImage2() {
    var image = document.getElementById('meat');
    if (image.src.match("/images/about1.png")) {
        image.src = "images/image 30.png";
    } else {
        image.src = "/images/about1.png";
    }
    }

    function changeImage3() {
    var image = document.getElementById('veggies');
    if (image.src.match("/images/about2.png")) {
        image.src = "images/image 31.png";
    } else {
        image.src = "/images/about2.png";
    }
    }

    function changeImage4() {
    var image = document.getElementById('pastries');
    if (image.src.match("/images/about3.png")) {
        image.src = "images/image 32.png";
    } else {
        image.src = "/images/about3.png";
    }
    }