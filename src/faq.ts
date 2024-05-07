const navDotElement = document.getElementById("nav-dot");

const homeElement = document.getElementById("home");
const schoolElement = document.getElementById("school");
const faqElement = document.getElementById("faq");
const aboutElement = document.getElementById("about");

function mouseLeave() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(0px)`;
    }
}

function homeMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(-250px)`;
    }
}

function schoolMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(-137px)`;
    }
}

function aboutMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(130px)`;
    }
}

if (homeElement) {
    homeElement.addEventListener("mouseover", homeMouseOver);
    homeElement.addEventListener("mouseleave", mouseLeave);
}

if (schoolElement) {
    schoolElement.addEventListener("mouseover", schoolMouseOver);
    schoolElement.addEventListener("mouseleave", mouseLeave);
}

if (aboutElement) {
    aboutElement.addEventListener("mouseover", aboutMouseOver);
    aboutElement.addEventListener("mouseleave", mouseLeave);
}
