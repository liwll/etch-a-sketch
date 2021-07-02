function createGrid(n) {
    const container = document.querySelector(".container");
    for (let i = 0; i < n**2; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        container.appendChild(gridBox);
        gridBox.addEventListener("mouseenter", () => {
            gridBox.style.backgroundColor = "aqua";
        });
        let width = 100/n;
        gridBox.setAttribute("style", `width:${width}%; height:${width}%`);
    }
}

createGrid(12);

const gridBoxes = document.querySelectorAll('.grid-box');

function clearGrid() {
    gridBoxes.forEach(gridBox => {
        gridBox.style.backgroundColor = "white";
    })
}

const clearButton = document.querySelector('.clear-grid-button');

clearButton.addEventListener("click", () => {
    clearGrid();
});



