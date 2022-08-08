/***********Project Etch-A-Sketch ***********/

//Constants and Default Values
const grid = document.querySelector('grid');
const slider = document.querySelector('input.slider');
const colorPicker = document.getElementById('colorPicker');
const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('button.clear');
const colorButton = document.querySelector('button.color');
const rainbowButton = document.querySelector('button.rainbow');
const eraser = document.querySelector('button.eraser');
let currentMode = 'COLOR';
let mouseDown = false;
var color = "#000000";
let size = 10;

//Loading Phase
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
window.onload = () => {
    colorButton.classList.add('active');
    setupGrid(size);
}

//Grid setup
function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mousedown', changeColor);
        gridElement.addEventListener('mouseover', changeColor);
        grid.appendChild(gridElement);
    }
}
const gridElement = document.querySelectorAll('div.gridElement');

//Event Listeners
colorPicker.addEventListener("input", ()=>{
    color = colorPicker.value;
})

slider.addEventListener('input', ()=>{
    clearGrid();
    setupGrid(slider.value);
})

clearButton.addEventListener('click', ()=>{
    clearGrid();
})

colorButton.addEventListener('click', ()=>{
    clearMode();
    colorButton.classList.add('active');
    currentMode = 'COLOR';
})

rainbowButton.addEventListener('click', ()=>{
    clearMode();
    rainbowButton.classList.add('active');
    currentMode = 'RAINBOW';
})

eraser.addEventListener('click', ()=>{
    clearMode();
    eraser.classList.add('active');
    currentMode = 'ERASER';
})

// Color changes for the grid
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown){
        return;
    }else{
        switch (currentMode) {
            case 'COLOR':
                e.target.style.backgroundColor = color;
                break;
            case 'ERASER':
                e.target.style.backgroundColor = '#ffffff';
                break;
            case 'RAINBOW':
                const R = Math.floor(Math.random() * 256)
                const G = Math.floor(Math.random() * 256)
                const B = Math.floor(Math.random() * 256)
                e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
                break;
            default:
                break;
        }
    }
}

//Basic Functions
function clearGrid(){
    grid.innerHTML='';
    setupGrid(slider.value);
}

function clearMode(){
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}