// *** STYLE SELECTED li's *** //
var sideTitle = document.getElementById("aside-theme-title");
var listItems1 = document.querySelectorAll("#aside-ul > li");
var listItems2 = document.querySelectorAll("#aside-ul-nested > li");
var listItems1b = Array.from(listItems1);

// MERGE all li's from 2 ul's
var everySideLi = [...listItems1b, ...listItems2];

// REMOVE unwanted li
for (let y = 0; y < everySideLi.length; y++) {
    if(everySideLi[y].id == "nonstyled-li"){everySideLi.splice(y,1);}
}

// adding HOVER style
everySideLi.forEach(item => item.classList.add('aside-li-hover'));

// Class "selected" REMOVE from every LI, on aside title click
sideTitle.addEventListener('click', ()=>{
    for (let y = 0; y < everySideLi.length; y++) {
        everySideLi[y].classList.remove("selected");
    }
});

// Class "selected" REMOVE and ADD, on LI click
everySideLi.forEach(item => item.addEventListener("click", ()=>{
    for (let i = 0; i < everySideLi.length; i++) {
        if(everySideLi[i].classList.contains("selected")){everySideLi[i].classList.remove("selected");}
    }
    item.classList.add("selected");
}));


// *** SHOW & HIDE ELEMENTS *** //
var nestedUlOpener = document.getElementById("nested-ul-opener");   // li
var nestedUl = document.getElementById("aside-ul-nested");          // ul
var mainSecH = document.getElementsByClassName("main-sec-hidden");  // section hidden
var mainSec = document.querySelector(".main-sec");                  // section visible
var page = window.location.pathname.split("/").pop();               // name of current html file

// show & hide nested ul
nestedUlOpener.addEventListener("click", ()=>{
    nestedUl.classList.toggle("flexUl");
});

// hide sections with class "main-sec-hidden"
for (let i = 0; i < mainSecH.length; i++) {
    mainSecH[i].style.display = "none";
}


function toMainL(){
    if (page != "mainL.html"){                      // if page is not mainL.html...
        window.location.href = "mainL.html";        // ...go to page mainL.html    
    }
};

function toMainP(){
    if (page != "mainP.html"){                      // if page is not mainP.html...
        window.location.href = "mainP.html";        // ...go to page mainL.html    
    }
};

for (let i = 0; i < everySideLi.length; i++) {          // for every side li...
    everySideLi[i].addEventListener('click', ()=>{      // when clicked...
        localStorage.setItem("item", i);                // set their index inside localstorage,
        mainSec.style.display = "none";                 // hide default section,
        Array.from(mainSecH).map(item => item.style.display = "none"); // hide every other sectioon
        mainSecH[i].style.display = "block";            // show section with index of clicked button
    });
};

// ONLOAD - prikazi "li" sa indexom setovanom u storage!!!
if(page == "mainL.html" || page == "mainP.html"){
    addEventListener('load', ()=>{
        var getItem = localStorage.getItem("item");
        if(getItem !== null){
            mainSec.style.display = "none";
            mainSecH[getItem].style.display = "block";
            everySideLi[getItem].classList.add("selected");
            if(everySideLi[getItem].classList.contains('nested-ul-opener')){
                nestedUl.classList.add("flexUl");
            }
        };
    });
}

// local storage clear, when clicked on DIJALOG
function locStorageClear(){
    localStorage.clear();
};


// *** aside POSITION *** //
function asidePosition(){
    var sideNav = document.querySelector("aside>nav");
    if(matchMedia("(min-width: 768px)").matches){
        if(scrollY > 60){
            sideNav.style.position = "fixed";
            sideNav.style.width = "inherit";
        } else {
            sideNav.style.position = "initial";
            sideNav.style.width = "initial";
        }
    } else {
        sideNav.style.position = "initial";
    }
};

["load","scroll","resize"].forEach(item => addEventListener(item, ()=>{
    asidePosition();
}));