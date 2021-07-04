function createGrid(n) {
    const container = document.querySelector('.container');
    while(container.firstChild != null) {
        container.removeChild(container.lastElementChild);
    }

    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);

    for (let i = 0; i < n**2; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black';
        });
        let width = 100/n;
        gridBox.setAttribute('style', `width:${width}%; height:${width}%`);
        grid.appendChild(gridBox);
    }
}

function clearGrid() {
    const gridBoxes = document.querySelectorAll('.grid-box');

    gridBoxes.forEach(gridBox => {
        gridBox.style.backgroundColor = 'white';
    });
}

const clearButton = document.querySelector('.clear-grid-button');
clearButton.addEventListener('click', () => {
    clearGrid();
});

function updateSizeText(size) {
    const sizeText = document.querySelector('.size-text');
    sizeText.textContent = `Current Size: ${size} x ${size}`;
    createGrid(size);
}

function toggleRainbow() {
    const gridBoxes = document.querySelectorAll('.grid-box');

    gridBoxes.forEach(gridBox => {
        let newGridBox = gridBox.cloneNode(true);
        gridBox.parentNode.replaceChild(newGridBox, gridBox);
        newGridBox.addEventListener('mouseenter', () => {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            newGridBox.style.backgroundColor = randomColor;
        });
    });
}

const rainbowButton = document.querySelector('.toggle-rainbow');
rainbowButton.addEventListener('click', () => {
    toggleRainbow();
});


createGrid(12);


