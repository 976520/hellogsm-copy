const graphContainer: HTMLElement | null = document.getElementById('graph-container');
const textContainer: HTMLElement | null = document.getElementById('text-container');

const container2020: HTMLElement | null = document.getElementById('container-2020');
const container2021: HTMLElement | null = document.getElementById('container-2021');
const container2022: HTMLElement | null = document.getElementById('container-2022');
const container2023: HTMLElement | null = document.getElementById('container-2023');

const graph2020: HTMLElement | null = document.getElementById('graph-2020');
const graph2021: HTMLElement | null = document.getElementById('graph-2021');
const graph2022: HTMLElement | null = document.getElementById('graph-2022');
const graph2023: HTMLElement | null = document.getElementById('graph-2023');

const percent2020: HTMLElement | null = document.getElementById('percent-2020');
const percent2021: HTMLElement | null = document.getElementById('percent-2021');
const percent2022: HTMLElement | null = document.getElementById('percent-2022');
const percent2023: HTMLElement | null = document.getElementById('percent-2023');

const year2020: HTMLElement | null = document.getElementById('year-2020');
const year2021: HTMLElement | null = document.getElementById('year-2021');
const year2022: HTMLElement | null = document.getElementById('year-2022');
const year2023: HTMLElement | null = document.getElementById('year-2023');

const sexyTitle: HTMLElement | null = document.getElementById('sexy-title');
const sexyNumber: HTMLElement | null = document.getElementById('sexy-number');

const timeDelay: number = 800;
let lastClickTime: number = 0;
let index: number = 0;
selectedGraph(index);

function easeOut(t: number, c: number, d: number): number { //easeOutCirc formula
    return c * Math.sqrt(1 - (t = t / d - 1) * t);
}

function counting(element: HTMLElement, value: number, unit: string): void {
    let i: number = 0;
    let delay: number = 10;
    const start: number = performance.now();

    const timer: number = setInterval(function() {
        const elapsed: number = performance.now() - start;
        i = easeOut(elapsed, value, timeDelay+200);
        element.innerText = Math.round(i+1) + unit; //rounding + unit
        i = i + 1;
        delay = delay * 10;
        if (i >= value) {
            clearInterval(timer); //stop
        }
    }, delay);
}

function countingHeight(element: HTMLElement, value: number, unit: string): void {
    let j: number = 0;
    let delay: number = 10;
    const start: number = performance.now();

    const timer: number = setInterval(function() {
        const elapsed: number = performance.now() - start;
        j = easeOut(elapsed, value, timeDelay+200);
        element.style.height = Math.round(j+1) + unit; 
        j = j + 1;
        delay = delay * 10;
        if (j >= value) {
            clearInterval(timer); 
        }
    }, delay);
    j = 0;
}

function countingOpacity(element: HTMLElement, value: number, unit: string): void {
    let k: number = 0;
    let delay: number = 10;
    const start: number = performance.now();

    const timerOpacity: number = setInterval(function() {
        const elapsed: number = performance.now() - start;
        k = easeOut(elapsed, value, 200);
        element.style.opacity = Math.round(k) + unit;
        k = k + 1;
        delay = delay * 10;
        if (k >= value) {
            clearInterval(timerOpacity);
        }
    }, delay);
    k = 0;
}

function selectedGraph(index: number): void {
    if(index === 0){
        unselectedGraph(1);
        unselectedGraph(2);
        unselectedGraph(3);
        if (year2020) year2020.style.opacity = "1";

        if (graph2020) countingOpacity(graph2020, 100, '%');
        if (graph2020) countingHeight(graph2020, 328, 'px');

        if (percent2020) percent2020.style.opacity = "1";
        
        if (percent2020) counting(percent2020, 82, '%');

        if (sexyTitle) sexyTitle.innerText = "2020년 취업자 수"
        if (sexyNumber) counting(sexyNumber, 59, '명');
    }else if(index === 1){
        unselectedGraph(0);
        unselectedGraph(2);
        unselectedGraph(3);
        if (year2021) year2021.style.opacity = "1";

        if (graph2021) countingOpacity(graph2021, 100, '%');
        if (graph2021) countingHeight(graph2021, 348, 'px');

        if (graph2021) graph2021.style.height = "348px";
        if (percent2021) percent2021.style.opacity = "1";
        if (percent2021) counting(percent2021, 87, '%');

        if (sexyTitle) sexyTitle.innerText = "2021년 취업자 수"
        if (sexyNumber) counting(sexyNumber, 66,'명');
        
    }else if(index === 2){
        unselectedGraph(0);
        unselectedGraph(1);
        unselectedGraph(3);
        if (year2022) year2022.style.opacity = "1";

        if (graph2022) countingOpacity(graph2022, 100, '%');
        if (graph2022) countingHeight(graph2022, 324, 'px');

        if (percent2022) percent2022.style.opacity = "1";
        if (percent2022) counting(percent2022, 81, '%');

        if (sexyTitle) sexyTitle.innerText = "2022년 취업자 수"
        if (sexyNumber) counting(sexyNumber, 59,'명');
        
    }else if(index === 3){
        unselectedGraph(0);
        unselectedGraph(2);
        unselectedGraph(1);
        if (year2023) year2023.style.opacity = "1";

        if (graph2023) countingOpacity(graph2023, 100, '%');
        if (graph2023) countingHeight(graph2023, 312, 'px');

        if (percent2023) percent2023.style.opacity = "1";
        if (percent2023) counting(percent2023, 79, '%'); 

        if (sexyTitle) sexyTitle.innerText = "2023년 취업자 수"
        if (sexyNumber) counting(sexyNumber, 59,'명');
        
    }
}

function unselectedGraph(index: number): void {
    if(index === 0){
        if (graph2020) graph2020.style.opacity = "0";
        if (percent2020) percent2020.style.opacity = "0";
        
        if (year2020) year2020.style.opacity = "0.5";

    }else if(index === 1){
        if (graph2021) graph2021.style.opacity = "0";
        if (percent2021) percent2021.style.opacity = "0";
        if (year2021) year2021.style.opacity = "0.5";
    }else if(index === 2){
        if (graph2022) graph2022.style.opacity = "0";
        if (percent2022) percent2022.style.opacity = "0";
        if (year2022) year2022.style.opacity = "0.5";

    }else if(index === 3){
        if (graph2023) graph2023.style.opacity = "0";
        if (percent2023) percent2023.style.opacity = "0";
        if (year2023) year2023.style.opacity = "0.5";
    }
}

function catch2020Click(container2020: Event, index: number): void {
    const currentTime: number = new Date().getTime();
    const timeDiff: number = currentTime - lastClickTime;
    if (timeDiff < timeDelay) {
        container2020.preventDefault();
        return;
    }
    index = 0;
    selectedGraph(0);
    lastClickTime = currentTime;
}

function catch2021Click(container2021: Event, index: number): void {
    const currentTime: number = new Date().getTime();
    const timeDiff: number = currentTime - lastClickTime;
    if (timeDiff < timeDelay) {
        container2021.preventDefault();
        return;
    }
    index = 1;
    selectedGraph(1);
    lastClickTime = currentTime;
}

function catch2022Click(container2022: Event, index: number): void {
    const currentTime: number = new Date().getTime();
    const timeDiff: number = currentTime - lastClickTime;
    if (timeDiff < timeDelay) {
        container2022.preventDefault();
        return;
    }
    index = 2;
    selectedGraph(2);
    lastClickTime = currentTime;
}

function catch2023Click(container2023: Event, index: number): void {
    const currentTime: number = new Date().getTime();
    const timeDiff: number = currentTime - lastClickTime;
    if (timeDiff < timeDelay) {
        container2023.preventDefault();
        return;
    }
    index = 3;
    selectedGraph(3);
    lastClickTime = currentTime;
}

if (container2020) container2020.addEventListener('click', (event) => catch2020Click(event, index));
if (container2021) container2021.addEventListener('click', (event) => catch2021Click(event, index));
if (container2022) container2022.addEventListener('click', (event) => catch2022Click(event, index));
if (container2023) container2023.addEventListener('click', (event) => catch2023Click(event, index));
