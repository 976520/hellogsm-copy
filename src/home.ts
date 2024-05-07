const navDot = document.getElementById("nav-dot");

const school = document.getElementById("school");
const faq = document.getElementById("faq");
const about = document.getElementById("about");

function mouseLeave() {
    if (navDot) {
        navDot.style.transform = `translateX(0px)`;
    }
}

function schoolMouseOver() {
    if (navDot) {
        navDot.style.transform = `translateX(112px)`;
    }
}

function faqMouseOver() {
    if (navDot) {
        navDot.style.transform = `translateX(249px)`;
    }
}

function aboutMouseOver() {
    if (navDot) {
        navDot.style.transform = `translateX(379px)`;
    }
}

if (school) {
    school.addEventListener("mouseover", schoolMouseOver);
    school.addEventListener("mouseleave", mouseLeave);
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