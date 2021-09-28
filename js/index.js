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

//WHEN WINDOW (bodyText bc I don't know how to load the window itself) LOADS, ALERT POPS UP "The page is loaded!"

bodyText[0].onload = loadAlert;
function loadAlert() {
    alert("The page is loaded!")
}

//KEYDOWN CHANGES BODYTEXT COLOR
bodyText[0].addEventListener("keydown", function(){
    bodyText[0].style.color = "darkgray";
    console.log("your keydown works!")
})


//DOUBLECLICK (doesn't work? Overwritten by yellow?)
// let advenPic = document.querySelectorAll(".img-content img");
// advenPic[0].dblclick = outlinePic;
// function outlinePic() {
//     advenPic[0].style.backgroundColor = "red";
// }