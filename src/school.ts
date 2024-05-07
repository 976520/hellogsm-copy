const navDotElement = document.getElementById("nav-dot");

const home = document.getElementById("home");
const faq = document.getElementById("faq");
const about = document.getElementById("about");

function mouseLeave() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(0px)`;
    }
}

function homeMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(-112px)`;
    }
}

function faqMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(138px)`;
    }
}

function aboutMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = `translateX(267px)`;
    }
}

if (home) {
    home.addEventListener("mouseover", homeMouseOver);
    home.addEventListener("mouseleave", mouseLeave);
}

if (faq) {
    faq.addEventListener("mouseover", faqMouseOver);
    faq.addEventListener("mouseleave", mouseLeave);
}

if (about) {
    about.addEventListener("mouseover", aboutMouseOver);
    about.addEventListener("mouseleave", mouseLeave);
}

export{}