const grid = document.querySelector('grid')
const colorPicker = document.getElementById('colorPicker')
const width = grid.offsetWidth;
let size = 20;

for (let i = 0; i < size * size; i++) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    grid.appendChild(gridElement)
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value)