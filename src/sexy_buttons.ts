const sexyButtonContainer: HTMLElement | null = document.getElementById('sexy-buttons');

const firstButton: HTMLElement | null = document.getElementById('first-button');
const secondButton: HTMLElement | null = document.getElementById('second-button');
const thirdButton: HTMLElement | null = document.getElementById('third-button');
const fourthButton: HTMLElement | null = document.getElementById('fourth-button');
const fifthButton: HTMLElement | null = document.getElementById('fifth-button');

function chunChunHeeGamSo(sexyButton: HTMLElement | null): void {
    if (sexyButton) {
        sexyButton.style.opacity = '0.6';
    }
}

function bbaLuGaeJungGa(sexyButton: HTMLElement | null): void {
    if (sexyButton) {
        sexyButton.style.opacity = '1';
    }
}

function catchMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === 'first-button') {
        chunChunHeeGamSo(firstButton);
    } else if (target.id === 'second-button') {
        chunChunHeeGamSo(secondButton);
    } else if (target.id === 'third-button') {
        chunChunHeeGamSo(thirdButton);
    } else if (target.id === 'fourth-button') {
        chunChunHeeGamSo(fourthButton);
    } else if (target.id === 'fifth-button') {
        chunChunHeeGamSo(fifthButton);
    }
}

function catchMouseOut(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === 'first-button') {
        bbaLuGaeJungGa(firstButton);
    } else if (target.id === 'second-button') {
        bbaLuGaeJungGa(secondButton);
    } else if (target.id === 'third-button') {
        bbaLuGaeJungGa(thirdButton);
    } else if (target.id === 'fourth-button') {
        bbaLuGaeJungGa(fourthButton);
    } else if (target.id === 'fifth-button') {
        bbaLuGaeJungGa(fifthButton);
    }
}

if (sexyButtonContainer) {
    sexyButtonContainer.addEventListener('mouseover', catchMouseOver);
    sexyButtonContainer.addEventListener('mouseout', catchMouseOut);
}
