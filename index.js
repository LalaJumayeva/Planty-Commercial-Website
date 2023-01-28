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
