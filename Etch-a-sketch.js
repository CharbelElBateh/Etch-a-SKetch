const grid = document.querySelector('grid')
const colorPicker = document.getElementById('colorPicker')
const width = grid.offsetWidth;
var color = "#000000"
let size = 20;

for (let i = 0; i < size * size; i++) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    grid.appendChild(gridElement)
}

const setColor = (input)=>{
    color = input;
}

colorPicker.addEventListener("input", ()=>{
    setColor(colorPicker.value)
})

const gridElement = document.querySelectorAll('div');

gridElement.forEach(element => {
    element.addEventListener('mousedown', () => {
        gridElement.forEach(box => {
            box.addEventListener('mouseover', ()=>{
                    box.style.backgroundColor = color;
            },false)
        })
    })
})
