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
 

// popups
document.querySelector(".show-login").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
  });
  
  document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  })
  
  document.querySelector(".show-signup").addEventListener("click", function () {
    document.querySelector(".popup-2").classList.add("active");
  });
  
  document.querySelector(".popup-2 .close-btn").addEventListener("click", function () {
    document.querySelector(".popup-2").classList.remove("active");
  })

  document.querySelector(".show-login2").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
  });
  
  document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  })
  
  document.querySelector(".show-signup2").addEventListener("click", function () {
    document.querySelector(".popup-2").classList.add("active");
  });
  
  document.querySelector(".popup-2 .close-btn").addEventListener("click", function () {
    document.querySelector(".popup-2").classList.remove("active");
  })
  

// single product page
var main_img = document.getElementById("mainimg");
var otherimages = document.getElementsByClassName("small-img");


for (let i = 0; i < otherimages.length; i++) {
    otherimages[i].onclick = function(){
    main_img.src = otherimages[i].src
    }
}


