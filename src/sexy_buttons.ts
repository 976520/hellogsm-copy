const sexyButtonContainer: HTMLElement | null = document.getElementById('sexy-buttons');

const firstButton: HTMLElement | null = document.getElementById('first-button');
const secondButton: HTMLElement | null = document.getElementById('second-button');
const thirdButton: HTMLElement | null = document.getElementById('third-button');
const fourthButton: HTMLElement | null = document.getElementById('fourth-button');
const fifthButton: HTMLElement | null = document.getElementById('fifth-button');

function no(sexyButton: HTMLElement | null): void {
    if (sexyButton) {
        sexyButton.style.opacity = '0.6';
    }
}

function yes(sexyButton: HTMLElement | null): void {
    if (sexyButton) {
        sexyButton.style.opacity = '1';
    }
}

function catchMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === 'first-button') {
        no(firstButton);
    } else if (target.id === 'second-button') {
        no(secondButton);
    } else if (target.id === 'third-button') {
        no(thirdButton);
    } else if (target.id === 'fourth-button') {
        no(fourthButton);
    } else if (target.id === 'fifth-button') {
        no(fifthButton);
    }
}

function catchMouseOut(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === 'first-button') {
        yes(firstButton);
    } else if (target.id === 'second-button') {
        yes(secondButton);
    } else if (target.id === 'third-button') {
        yes(thirdButton);
    } else if (target.id === 'fourth-button') {
        yes(fourthButton);
    } else if (target.id === 'fifth-button') {
        yes(fifthButton);
    }
}

if (sexyButtonContainer) {
    sexyButtonContainer.addEventListener('mouseover', catchMouseOver);
    sexyButtonContainer.addEventListener('mouseout', catchMouseOut);
}
