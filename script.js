const grid = document.getElementById("grid");

function makeGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cells');

        // Add hover effect using JavaScript
        cell.addEventListener('mouseover', function() {
            this.classList.add('filled');
        });

        grid.appendChild(cell);
    }
}

makeGrid(16, 16);
