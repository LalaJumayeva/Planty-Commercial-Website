const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navbar");
const closebutton = document.getElementById("close");

if(hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.add("active");
    })
}

if(closebutton) {
    closebutton.addEventListener("click", function(){
        nav.classList.remove("active");
    })
}

// single product page
var main_img = document.getElementById("mainimg");
var otherimages = document.getElementsByClassName("small-img");


for (let i = 0; i < otherimages.length; i++) {
    otherimages[i].onclick = function(){
    main_img.src = otherimages[i].src
    }
}
