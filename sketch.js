let gridSize = 16;
let grid = document.querySelector('.grid');
let gridCHange = document.querySelector(".grid_sizing");
const clearGrid = document.querySelector(".grid_clearing");
const rainbowButton = document.querySelector(".color_rainbow");
const blackButton = document.querySelector(".color_black");
let rainbowColor = false;
let blackColor = false;

let options = document.querySelector(".options");


//Call to create the InitialGrid.
createGrid(gridSize);

//Call used to chnage grid dimensions.
gridCHange.addEventListener("click", getGridChange);

//Call used to clear the grid to orignal state.
clearGrid.addEventListener("click", ()=>{
    resetGrid();
    createGrid(gridSize);

});

//Call used to set rainbow color
rainbowButton.addEventListener("click", ()=>{
    rainbowColor = true;
    blackColor =false;
})

//Call used to set black color
blackButton.addEventListener("click", ()=>{
   blackColor = true;
   rainbowColor = false;
})

//Call used to get new color for grid
grid.addEventListener('mouseover', function (e) {
    if (e.target.id !== 'grid') {
        if (rainbowColor) {
            e.target.style.backgroundColor = getRandomColor();
        } else if (blackColor) {
            e.target.style.backgroundColor = 'black';
        } else {
            e.target.style.backgroundColor = 'white';
        }

    }

});

/**
 * Creates the grid based on dimensions entered.
 * @param {*} gridDimension used for size per row/column
 */
function createGrid(gridDimension){
    grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`;
    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) { 

            const square = document.createElement('div');
            square.classList.add('square');
            // grid.appendChild(square);
            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = "black";
            });
    
            grid.appendChild(square);
        }
    }
}

/**
 * Randomly generates a color.
 * @returns color
 */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Used to reset the grid to its original state.
 */
function resetGrid()
{
   while(grid.firstChild)
   {
    grid.removeChild(grid.firstChild);
   }
}

/**
 * Changes the grid dimensions based on valid input.
 */
function getGridChange(){
    let newGridSize = prompt("Enter a new Grid Size (between 1 - 100");
    if( newGridSize > 0 && newGridSize <= 100){
        resetGrid();
        rainbowColor = false;
        blackColor = false;
        createGrid(newGridSize)
    } else if (newGridSize === undefined || newGridSize === null){
        alert("Cancelling , going back to current grid");
    } else {
            alert("Enter a valid number between 1-100. Resetting to 16");
            resetGrid();
            createGrid(gridSize);
    }
}
