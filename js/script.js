let hamburger = document.querySelector(".hamburger");

let navLinks = document.querySelector(".nav-main__links")

let navButton = document.querySelector(".nav-main__buttons")

let Logo = document.querySelector(".nav-main__logo")

hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav-main__links_active");
    navButton.classList.toggle("nav-main__buttons_active");
    Logo.classList.toggle("logo_active")
}

Logo.onclick = function () {
    close()
}

let navLinksAll = document.querySelectorAll(".nav-main__links a");

for (let i = 0; i < 4; i++) {
    console.log(i);
    navLinksAll[i].onclick = function () {
        close()
    }
}

let navButtonsAll = document.querySelectorAll(".nav-main__buttons button");

for (let i = 0; i < 3; i++) {
    navButtonsAll[i].onclick = function () {
        close()
    }

}
function close() {
    hamburger.classList.remove("hamburger_active");
    navLinks.classList.remove("nav-main__links_active");
    navButton.classList.remove("nav-main__buttons_active");
    Logo.classList.remove("logo_active");
}