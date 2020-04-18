function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

let x = document.body;
let y = document.getElementById("myNav");
let sym = 1;
let z = document.getElementById("sechint");
let a = document.getElementById("info");
let aone = document.getElementById("infoOne");
let atwo = document.getElementById("infoTwo");
let athree = document.getElementById("infoThree");
let afour = document.getElementById("infoFour");
let afive = document.getElementById("infoFive");
let asix = document.getElementById("infoSix");

let b = document.getElementsByTagName("input")[0];
let e = document.getElementsByTagName("input")[1];
let f = document.getElementsByTagName("input")[2];

let c = document.getElementsByTagName("textarea")[0];
let d = document.getElementsByTagName("button")[1];
let m = document.getElementsByTagName("button")[0];


function topFunction() {
    sym = sym + 1;

    x.classList.toggle("bodydark");


    if (sym % 2 == 0){
        y.style["background"] = "black";
    } else {
        y.style["background"] = "linear-gradient(90deg, rgba(98,189,252,1) 0%, rgba(115,165,253,1) 55%, rgba(132,144,255,1) 100%)";
    }

    if (sym % 2 == 0){
        z.style["background"] = "black";
    } else {
        z.style["background"] = "linear-gradient(90deg, rgba(98,189,252,1) 0%, rgba(115,165,253,1) 55%, rgba(132,144,255,1) 100%)";
    }

    if (sym % 2 == 0){
        a.style["color"] = "black";
        aone.style["color"] = "black";
        atwo.style["color"] = "black";
        athree.style["color"] = "black";
        afour.style["color"] = "black";
        afive.style["color"] = "black";
        asix.style["color"] = "black";
    } else {
        a.style["color"] = "#8195FF";
        aone.style["color"] = "#8195FF";
        atwo.style["color"] = "#8195FF";
        athree.style["color"] = "#8195FF";
        afour.style["color"] = "#8195FF";
        afive.style["color"] = "#8195FF";
        asix.style["color"] = "#8195FF";
    }

    if (sym % 2 == 0){
        b.style["background-color"] = "#D9D9D9D9";
        e.style["background-color"] = "#D9D9D9D9";
        f.style["background-color"] = "#D9D9D9D9";
    } else {
        b.style["background-color"] = "white";
        e.style["background-color"] = "white";
        f.style["background-color"] = "white";
    }

    if (sym % 2 == 0) {
        c.style["background-color"] = "#D9D9D9D9";
    } else {
        c.style["background-color"] = "white";
    }

    if (sym % 2 == 0) {
        m.style["background-color"] = "#323232";
        m.style["color"] = "white";
        m.style["border"] = "2px solid white";
        d.style["background"] = "#323232";
        d.style["border"] = "2px solid white";
    } else {
        m.style["background-color"] = "white";
        m.style["color"] = "black";
        d.style["border"] = "none";
        d.style["background"] = "linear-gradient(90deg, rgba(98,189,252,1) 0%, rgba(115,165,253,1) 55%, rgba(132,144,255,1) 100%)";
        d.style["border"] = "none";
    }

}