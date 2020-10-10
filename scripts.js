let activeColor = '#000000'

function changeColor (e) {

    color = e.target.id;
    if (color=='red') {
        activeColor = '#d16a6a';
    } else if (color=='blue') {
        activeColor = '#6388d8';
    } else if (color=='green') {
        activeColor = '#71c784';
    } else if (color=='black') {
        activeColor = '#000000'
    };

    for (i=0; i<colorChoices.length; i++) {
        if (e.target.id == colorChoices[i].id){
        colorChoices[i].classList.add('active');
        } else {
            colorChoices[i].classList.remove('active');
        };
    };
};

function hoverEffect (e) {
    e.target.style.backgroundColor = activeColor;
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

const colorChoices = document.querySelectorAll('.color');

for (i=0;i<colorChoices.length; i++) {
    colorChoices[i].addEventListener('click',changeColor);
}

createGrid(16);

