// AUTO MAIN HEIGHT func
function setMainHeight(){
    var main = document.querySelector('main');
    var ftrH = document.querySelector('footer').offsetHeight;
    var newMainH = window.innerHeight - ftrH;

    main.style.minHeight = newMainH + "px";
};

// HEADER RESIZE func
function setHeaderSize(){
    var hdr = document.querySelector('body > header');

    scrollY > 20 ? hdr.style.boxShadow = "0px 0px 2px #aaa" : hdr.style.boxShadow = "0px 0px 12px #ccc";

    if (matchMedia("(min-width: 1000px)").matches){
        scrollY > 20 ? hdr.style.padding = "6px 32px 7px 30px" : hdr.style.padding = "24px 32px 23px 32px";
    } else if (matchMedia("(min-width: 768px)").matches){
        scrollY > 20 ? hdr.style.padding = "6px 6px 7px 24px" : hdr.style.padding = "24px 6px 23px 20px";
    } else {
        scrollY > 20 ? hdr.style.padding = "0 0 2px 0" : hdr.style.padding = "3px 0 6px 0";
        hdr.style.boxShadow = "0px 0px 2px #ccc";
    };
};

// LOGO IMAGE RESIZE func
function setLogoWidth(){
    var logoIm = document.getElementById("logoIm");

    if(matchMedia("(min-width:768px)").matches){
        logoIm.style.height = "54px";
        if(scrollY > 20){
            logoIm.style.width = "102px";
            logoIm.style.height = "28px";
        } else {
            matchMedia("(min-width:1000px)").matches ? logoIm.style.width = "205px" : logoIm.style.width = "20vw";
        };
    } else {
        if(scrollY > 20){
            logoIm.style.width = "0";
            logoIm.style.height = "0";
        } else {
            logoIm.style.width = "60px";
            logoIm.style.height = "26px";
        }
    };
};

// events
["load", "scroll", "resize"].forEach(item => addEventListener(item, ()=>{
    setHeaderSize();
    setLogoWidth();
    setMainHeight();
}));