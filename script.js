const body = document.querySelector("body")
const colors = ["black", "yellow", "red"];




// TARGET SQUARES COLOR
function clicked(e) {
    const bgColor = e.target.style.backgroundColor
    alert(bgColor)
}


// RANDOM COLOR
function randomColor() {
    const rgb = Math.floor(Math.random() * 256)
    const rgb2 = Math.floor(Math.random() * 256)
    const rgb3 = Math.floor(Math.random() * 256)
    return "rgb(" + rgb + "," + rgb2 + "," + rgb3 + ")" ;
}



// LIST
function list() {
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    li.innerHTML = "color"

    document.body.appendChild(ul)
    document.ul.appendChild(li)

}


// CREATE SQUARES
function square() {

for (let i = 0; i < 3; i++) {

    const div = document.createElement("div")
    div.className = "displayedsquare-wrapper"
    div.style.backgroundColor =  randomColor()

    div.addEventListener("click", copie)
    

    document.body.appendChild(div)

}
}
square()





// CREATE SQUARES COPY
function copie() {
    const div = document.getElementsByTagName("div")
    const copy = document.querySelector(".displayedsquare-wrapper")  
    copy.className = "displayedsquare"
    
    
    copy.addEventListener("click", clicked)
    div.addEventListener("click", copie)
   // copy.addEventListener("click", list)

    document.body.appendChild(copy)
}



// BODY BACKGROUND COLOR
function backBody() {

 body.addEventListener("keydown", checkKeyPress);


 function checkKeyPress (key){
    if (key.keyCode == "32") {
        body.style.backgroundColor = randomColor()
     }
    
  }

}

backBody()




function deleteSquare() {
    
    body.addEventListener("keydown", keyS);
   
    function keyS(key){
       if (key.keyCode == "83") {
           div.style.backgroundColor = "none"
        }
      
     }
     
   }
   
   deleteSquare()


/* function duplicate() {
   
    const copie = createElement("div")
    copie.className = "displayedsquare"
    copie = div.cloneNode(true);

    document.body.appendChild(copie)
}
div.addEventListener("click", square)
*/