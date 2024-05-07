var navDotElement = document.getElementById("nav-dot");
var homeElement = document.getElementById("home");
var schoolElement = document.getElementById("school");
var faqElement = document.getElementById("faq");
var aboutElement = document.getElementById("about");
function mouseLeave() {
    if (navDotElement) {
        navDotElement.style.transform = "translateX(0px)";
    }
}
function homeMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = "translateX(-250px)";
    }
}
function schoolMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = "translateX(-137px)";
    }
}
function aboutMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = "translateX(130px)";
    }
}
homeElement.addEventListener("mouseover", homeMouseOver);
homeElement.addEventListener("mouseleave", mouseLeave);
schoolElement.addEventListener("mouseover", schoolMouseOver);
schoolElement.addEventListener("mouseleave", mouseLeave);
aboutElement.addEventListener("mouseover", aboutMouseOver);
aboutElement.addEventListener("mouseleave", mouseLeave);
