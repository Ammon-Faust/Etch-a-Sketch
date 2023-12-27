const grid = document.getElementById("grid");
const reset = document.getElementById("reset");
const slider = document.getElementById("slider");

function makeGrid(rows, cols) {
  
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cells');
        cell.style.width = `calc(${cellWidth}% - 0px)`; 
        cell.style.height = `calc(${cellHeight}% - 0px)`; 

        cell.addEventListener('mouseover', function() {
            this.classList.add('filled');
        });

        grid.appendChild(cell);
    }
}

makeGrid(16, 16);

function gridReset() {
    reset.addEventListener("click", function() {
        const filledCells = grid.querySelectorAll('.filled');
        filledCells.forEach(cell => {
            cell.classList.remove('filled');
            cell.style.backgroundColor = ''; 
        });
    });
}

gridReset();

slider.addEventListener('input', function() {
    const gridSize = parseInt(this.value); 
    makeGrid(gridSize, gridSize);
});
