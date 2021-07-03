function createGrid(n) {
    const container = document.querySelector('.container');
    while(container.firstChild != null) {
        container.removeChild(container.lastElementChild);
    }

    for (let i = 0; i < n**2; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        container.appendChild(gridBox);
        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'aqua';
        });
        let width = 100/n;
        gridBox.setAttribute('style', `width:${width}%; height:${width}%`);
    }
}

function clearGrid() {
    const gridBoxes = document.querySelectorAll('.grid-box');

    gridBoxes.forEach(gridBox => {
        gridBox.style.backgroundColor = 'white';
    })
}

function newGrid(size) {
    createGrid(size)
}

const clearButton = document.querySelector('.clear-grid-button');
clearButton.addEventListener('click', () => {
    clearGrid();
});

function updateSizeText(size) {
    const sizeText = document.querySelector('.size-text');
    sizeText.textContent = `New Size: ${size} x ${size}`;
}

function updateCurrentText(size) {
    const currentText = document.querySelector('.current-size-text');
    
    currentText.textContent = `Current Size: ${size} x ${size}`;
}

const submitSize = document.querySelector('.submit-size');
submitSize.addEventListener('click', () => {
    const newSize = document.querySelector('.new-size');
    newGrid(newSize.value);
    updateCurrentText(newSize.value);
})


createGrid(12);


