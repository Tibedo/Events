const body = document.querySelector("body")


function clicked(e) {
    const bgColor = e.target.style.backgroundColor
    alert(bgColor)
}



function randomColor() {
    const rgb = Math.floor(Math.random() * 256)
    const rgb2 = Math.floor(Math.random() * 256)
    const rgb3 = Math.floor(Math.random() * 256)
    return "rgb(" + rgb + "," + rgb2 + "," + rgb3 + ")" ;
}



function clicked(e) {
    const bgColor = e.target.style.backgroundColor
    alert(bgColor)
    
}

function list() {
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    li.innerHTML = "color"

    document.body.appendChild(ul)
    document.ul.appendChild(li)

}


function copie() {

    const copy = document.querySelector(".displayedsquare-wrapper")  
    copy.className = "displayedsquare"
    
    
    copy.addEventListener("click", clicked)
    div.addEventListener("click", copie)

   // copy.addEventListener("click", list)

    document.body.appendChild(copy)
}



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






/* function duplicate() {
   
    const copie = createElement("div")
    copie.className = "displayedsquare"
    copie = div.cloneNode(true);

    document.body.appendChild(copie)
}
div.addEventListener("click", square)
*/