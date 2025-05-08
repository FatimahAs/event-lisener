let button1 = document.getElementById("btn1")
button1.addEventListener("click", () => {
    button1.innerText = "hello";
})



let button2 = document.getElementById("btn2")
button2.addEventListener("click", () => {
    button2.style.fontSize = "25px";

})

let button3 = document.getElementById("btn3")
button3.addEventListener("click", () => {
    button3.style.fontSize = "2px";

})


let button4 = document.getElementById("btn4")
button4.addEventListener("click", () => {
    button4.style.color = "pink";

})

let button5 = document.getElementById("btn5")
button5.addEventListener("click", () => {
    button5.style.backgroundColor = "blue";

})

let button6 = document.getElementById("btn6")
button5.addEventListener("click", () => {
    let imgs = document.createElement("img")
    imgs.src = "./red-logo";
    imgs.setAttribute("width", "20%");
    document.appendChild(imgs);

})