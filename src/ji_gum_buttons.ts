const jiGumButtonContainer: HTMLElement | null = document.getElementById("ji-gum-buttons");

const wonSeoJakSeong: HTMLElement | null = document.getElementById("won-seo-jak-seong");
const eapHackWonSeoJaeChul: HTMLElement | null = document.getElementById('eap-hack-won-seo-jae-chul');
const firstSeoRyuJeonHyung: HTMLElement | null = document.getElementById('first-seo-ryu-jeon-hyung');
const secondPyungGa: HTMLElement | null = document.getElementById('second-pyung-ga');
const gyoulGwaBalPyo: HTMLElement | null = document.getElementById('gyoul-gwa-bal-pyo');

function selectedButton(button: HTMLElement | null): void {
    if(button) {
        button.style.fontWeight = '600';
        button.style.opacity = '1';
    }
}

function unselectedButton(button: HTMLElement | null): void {
    if(button) {
        button.style.fontWeight = '200';
        button.style.opacity = '0.5';
    }
}

function catchButtonClick(event: MouseEvent): void { 
    if (!(event.target instanceof HTMLElement) || event.target.tagName !== 'H1') {
        return; 
    } else {
        if (event.target.id === "won-seo-jak-seong") {
            if (wonSeoJakSeong) {
                wonSeoJakSeong.innerText = '| 원서 작성 |';
                selectedButton(wonSeoJakSeong);
            }
        } else {
            if (wonSeoJakSeong) {
                wonSeoJakSeong.innerText = '원서 작성';
                unselectedButton(wonSeoJakSeong);
            }
        }
    
        if (event.target.id === "eap-hack-won-seo-jae-chul") {
            if (eapHackWonSeoJaeChul) {
                eapHackWonSeoJaeChul.innerText = '| 입학 원서 제출 |';
                selectedButton(eapHackWonSeoJaeChul);
            }
        } else {
            if (eapHackWonSeoJaeChul) {
                eapHackWonSeoJaeChul.innerText = '입학 원서 제출';
                unselectedButton(eapHackWonSeoJaeChul);
            }
        }
    
        if (event.target.id === "first-seo-ryu-jeon-hyung") {
            if (firstSeoRyuJeonHyung) {
                firstSeoRyuJeonHyung.innerText = '| 1차 서류 전형 |';
                selectedButton(firstSeoRyuJeonHyung);
            }
        } else {
            if (firstSeoRyuJeonHyung) {
                firstSeoRyuJeonHyung.innerText = '1차 서류 전형';
                unselectedButton(firstSeoRyuJeonHyung);
            }
        }
    
        if (event.target.id === "second-pyung-ga") {
            if (secondPyungGa) {
                secondPyungGa.innerText = '| 2차 평가 |';
                selectedButton(secondPyungGa);
            }
        } else {
            if (secondPyungGa) {
                secondPyungGa.innerText = '2차 평가';
                unselectedButton(secondPyungGa);
            }
        }
        
        if (event.target.id === "gyoul-gwa-bal-pyo") {
            if (gyoulGwaBalPyo) {
                gyoulGwaBalPyo.innerText = '| 결과 발표 |';
                selectedButton(gyoulGwaBalPyo);
            }
        } else {
            if (gyoulGwaBalPyo) {
                gyoulGwaBalPyo.innerText = '결과 발표';
                unselectedButton(gyoulGwaBalPyo);
            }
        }
    }
}

if (jiGumButtonContainer) {
    jiGumButtonContainer.addEventListener('click', catchButtonClick);
}
