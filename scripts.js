function hoverEffect (e) {
    e.target.classList.add('hover');
};

function createGrid (size) {
    if (size>200) {
        alert('Too many squares. Please try again and enter a number 200 or less.');
        resetGrid();
    } else {
        let totalSquares = Math.pow(size,2);
        const container = document.getElementById('grid-container');

        container.style.gridTemplateColumns = `repeat(${size}, auto)`;

        for (i=0; i<totalSquares; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', hoverEffect);

            container.appendChild(square);
        };
    };
};

function resetGrid () {
    const container = document.getElementById('grid-container');
    container.textContent = null;

    let squares = prompt('How many squares per each side of your grid?');
    createGrid(squares);
};

const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid);

createGrid(16);

