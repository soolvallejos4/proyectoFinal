//--------toggle navbar------
const navToggler = document.querySelector(".navbar-toggler");
navToggler.addEventListener("click", toggleNav )

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// CERRANDO NAVEGADOR CUANDO HAGO CLICK

document.addEventListener("click", function(e) {

    if (e.target.closest(".nav-item")) {
        toggleNav()
    } 
})

//-------------sticky hader------------------------------
window.addEventListener("scroll", function( ){
    if (this.pageXOffset > 60) {
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
})


//