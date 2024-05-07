var sexyButtonContainer = document.getElementById('sexy-buttons');
var firstButton = document.getElementById('first-button');
var secondButton = document.getElementById('second-button');
var thirdButton = document.getElementById('third-button');
var fourthButton = document.getElementById('fourth-button');
var fifthButton = document.getElementById('fifth-button');
function chunChunHeeGamSo(sexyButton) {
    if (sexyButton) {
        sexyButton.style.opacity = '0.6';
    }
}
function bbaLuGaeJungGa(sexyButton) {
    if (sexyButton) {
        sexyButton.style.opacity = '1';
    }
}
function catchMouseOver(event) {
    var target = event.target;
    if (target.id === 'first-button') {
        chunChunHeeGamSo(firstButton);
    }
    else if (target.id === 'second-button') {
        chunChunHeeGamSo(secondButton);
    }
    else if (target.id === 'third-button') {
        chunChunHeeGamSo(thirdButton);
    }
    else if (target.id === 'fourth-button') {
        chunChunHeeGamSo(fourthButton);
    }
    else if (target.id === 'fifth-button') {
        chunChunHeeGamSo(fifthButton);
    }
}
function catchMouseOut(event) {
    var target = event.target;
    if (target.id === 'first-button') {
        bbaLuGaeJungGa(firstButton);
    }
    else if (target.id === 'second-button') {
        bbaLuGaeJungGa(secondButton);
    }
    else if (target.id === 'third-button') {
        bbaLuGaeJungGa(thirdButton);
    }
    else if (target.id === 'fourth-button') {
        bbaLuGaeJungGa(fourthButton);
    }
    else if (target.id === 'fifth-button') {
        bbaLuGaeJungGa(fifthButton);
    }
}
if (sexyButtonContainer) {
    sexyButtonContainer.addEventListener('mouseover', catchMouseOver);
    sexyButtonContainer.addEventListener('mouseout', catchMouseOut);
}
