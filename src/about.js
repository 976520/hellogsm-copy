var navDotElement = document.getElementById('nav-dot');
var homeElement = document.getElementById('home');
var schoolElement = document.getElementById('school');
var faqElement = document.getElementById('faq');
var aboutElement = document.getElementById('about');
function catchMouseLeave() {
    if (navDotElement) {
        navDotElement.style.transform = 'translateX(0px)';
    }
}
function catchHomeMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = 'translateX(-379px)';
    }
}
function catchSchoolMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = 'translateX(-267px)';
    }
}
function catchFaqMouseOver() {
    if (navDotElement) {
        navDotElement.style.transform = 'translateX(-130px)';
    }
}
if (homeElement) {
    homeElement.addEventListener('mouseover', catchHomeMouseOver);
    homeElement.addEventListener('mouseleave', catchMouseLeave);
}
if (schoolElement) {
    schoolElement.addEventListener('mouseover', catchSchoolMouseOver);
    schoolElement.addEventListener('mouseleave', catchMouseLeave);
}
if (faqElement) {
    faqElement.addEventListener('mouseover', catchFaqMouseOver);
    faqElement.addEventListener('mouseleave', catchMouseLeave);
}
