// *** STYLE SELECTED li ELEMENTS *** //
var sideTitle = document.getElementById("aside-theme-title");
var lis1 = document.querySelectorAll("#aside-ul > li");
var lis2 = document.querySelectorAll("#aside-ul-nested > li");

// exclude any li with id "nonstyled-li" from lis1
var lis1Arr = Array.from(lis1);
for (let i = 0; i < lis1Arr.length; i++) {
    if(lis1Arr[i].id == "nonstyled-li"){lis1Arr.splice(i,1);}
}

// merging all li's from 2 ul's, without unwanted li
var allSideLis = [...lis1Arr, ...lis2];


















// *** OVO SVE NACINITI DA RADI I KAD SE SAS DRUGE STRANE DOLAZI NA DIJALOG

// adding hover style
allSideLis.forEach(item => item.classList.add('aside-li-hover'));

// class "selected" reset
sideTitle.addEventListener('click', ()=>{
    for (let y = 0; y < allSideLis.length; y++) {
        allSideLis[y].classList.remove("selected");
    }
});

// class "selected" manipulation
allSideLis.forEach(item => {item.addEventListener("click", ()=>{
        for (let i = 0; i < allSideLis.length; i++) {
            if(allSideLis[i].classList.contains("selected")){allSideLis[i].classList.remove("selected");}
        }
        item.classList.add("selected");
    })
});

// *** SHOW AND HIDE ELEMENTS *** //
var nestedUlOpener = document.getElementById("nested-ul-opener");
var nestedUl = document.getElementById("aside-ul-nested");
// show and hide secondary ul
nestedUlOpener.addEventListener("click", ()=>{
    nestedUl.classList.toggle("flexUl");
});









// ** OVO SREDITI

var mainSecH = document.getElementsByClassName("main-sec-hidden");
var mainSec = document.querySelector(".main-sec");

// hide main sections
for (let i = 0; i < mainSecH.length; i++) {
    mainSecH[i].style.display = "none";
}

// show adequate main section
//WHEN LI's ARE CLICKED
for (let i = 0; i < allSideLis.length; i++) {
    allSideLis[i].addEventListener('click', ()=>{   // KLIKOM NA SVAKI POEDINACNI li:
        localStorage.setItem("item", i);    // -SETUJEMO NJHOV INDEX U localstorage - magija !!!
        mainSec.style.display = "none";     // -BRISEMO NASLOV "DIJALOG" SVAKI PUT KAD KLIKNEMO li
        Array.from(mainSecH).map(item => item.style.display = "none");
        mainSecH[i].style.display = "block"; // -svaki section sakrivamo pa otkrivamo sa indexom kliknutog li-a
        
    }); 
};

// onclick WHEN LI's ARE CLICKED ON OTHER PAGES
function test1(){
    window.location.href = "mainL.html";
}

// ONLOAD - prikazi "li" sa indexom setovanom u storage!!!
addEventListener('load', ()=>{
    var getItem = localStorage.getItem("item");
    console.log("get item je " + getItem);
    if(getItem !== null){
        mainSecH[getItem].style.display = "block";
        mainSec.style.display = "none";
        allSideLis[getItem].classList.add("selected");
        
        nestedUl.classList.add("flexUl");
    };

});


// local storage clear when clicked on DIJALOG
function locStorageClear(){
    localStorage.clear();
};
























// *** POSITION aside *** //
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