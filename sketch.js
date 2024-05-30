let gridSize = 16;
const grid = document.querySelector('.grid');
let gridCHange = document.querySelector(".grid_sizing");
const clearGrid = document.querySelector(".grid_clearing");


//Call to create the InitialGrid.
createGrid(gridSize);

//Call used to chnage grid dimensions.
gridCHange.addEventListener("click", getGridChange);

//Call used to clear the grid to orignal state.
clearGrid.addEventListener("click", ()=>{
    resetGrid();
    createGrid(gridSize);

})

/**
 * Creates the grid based on dimensions entered.
 * @param {*} gridDimension used for size per row/column
 */
function createGrid(gridDimension){
    const grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`;
    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) { 

            const square = document.createElement('div');
            square.classList.add('square');
            // grid.appendChild(square);
            console.log("Added new child " + i);

            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = getRandomColor();
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
    resetGrid();
    let newGridSize = prompt("Enter a new Grid Size (between 1 - 100");
    if( newGridSize > 0 && newGridSize <= 100){
        createGrid(newGridSize)
    } else {
        alert("Enter a valid number between 1-100. Resetting to 16");
        createGrid(gridSize);
    }
}
