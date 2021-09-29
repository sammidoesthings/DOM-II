// Your code goes here

//BODY CHANGES COLOR WHEN FUNBUS IMAGE IS CLICKED
let funbusHeader = document.querySelectorAll(".intro img")
// console.log(funbusHeader)

funbusHeader[0].onclick = turnYellow;
function turnYellow() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
    document.getElementsByTagName("header")[0].style.backgroundColor = "lightgreen";
};

//FUNBUS SITE TITLE CHANGES COLOR WHEN CLICKED
let funbusTitle = document.querySelectorAll(".logo-heading")
// console.log(funbusTitle)

//the first way: 
// funbusTitle[0].onclick = turnFontPink;
// IS THE SAME THING AS 
//the correct way: 
// funbusTitle[0].addEventListener("click", turnFontPink)
// function turnFontPink() {
//     funbusTitle[0].style.color = "pink";
// }
// IS THE SAME AS 
funbusTitle[0].addEventListener("click", function(){
    funbusTitle[0].style.color = "pink";
});

//WELCOME ALERT POPS UP ON HOVER OF H2
let welcomeMsg = document.querySelectorAll(".intro h2")
// console.log(welcomeMsg)

welcomeMsg[0].onmouseover = sendAlert;
function sendAlert() {
    alert("Welcome to the Fun Bus!");
}

//WINDOW CLICK CHANGES BODY TEXT COLOR
let bodyText = document.querySelectorAll("body");
// console.log(bodyText)

bodyText[0].onclick = changeTextColor;
function changeTextColor() {
    bodyText[0].style.color = "orange";
}

//NAVLINK BACKGROUND CHANGES
let navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks)

navLinks[0].onmouseover = changeNavColor;
function changeNavColor(){
    navLinks[0].style.backgroundColor = "powderblue";
    navLinks[0].style.color = "white";
    navLinks[2].style.backgroundColor = "pink";
    navLinks[2].style.color = "white";

}
navLinks[0].onmouseleave = rotateNavColor;
function rotateNavColor() {
    navLinks[1].style.backgroundColor = "burlywood";
    navLinks[1].style.color = "black";
    navLinks[3].style.backgroundColor = "lavender";
    navLinks[3].style.color = "black";
}

//WHEN WINDOW (bodyText bc I don't know how to load the window itself) LOADS, ALERT POPS UP

// bodyText[0].onload = loadAlert;
// function loadAlert() {
//     alert("The page is loaded!")
// }

//KEYDOWN CHANGES BODYTEXT COLOR
bodyText[0].addEventListener("keydown", function(){
    bodyText[0].style.color = "darkgray";
    console.log("your keydown works!")
})

//DOUBLECLICK
let advenAwaits = document.querySelectorAll(".img-content img");

advenAwaits[0].addEventListener("dblclick", function(){
    console.log("you're double clicking!")
    advenAwaits[0].setAttribute('src', "/fun.1d28a3ac.jpg")
    advenAwaits[0].setAttribute('alt', "your picture is gone!");
})

//ONWHEEL ZOOM ON PHOTOS

//this works but idk how to add it to anything else
const contentImg = document.querySelector('.content-section img')
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.300, scale), 1.3);
    contentImg.style.transform = `scale(${scale})`;
}
let scale = 1;
contentImg.onwheel = zoom;