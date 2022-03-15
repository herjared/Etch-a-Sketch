
const container = document.querySelector(".box");


/** createGrid creates a grid based on user input */

function createGrid(userChoice = 4){

    /**Create grid columns */
    for (let i=0;i<userChoice;i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add("gridColumn");
        container.append(gridColumn);
        
        /**Create grid squares for columns */
        for (let i=0;i<userChoice;i++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridColumn.appendChild(gridSquare);
        }
    }
    addListeners();
}
createGrid();

/**deleteGrid removes the current grids nodes from the tree */
function deleteGrid(){
    const grid = document.querySelectorAll('.gridColumn');
    grid.forEach(grids=>grids.remove());
}
/**Create event listeners so that when a user hovers over a square it will
 * change color */

function addListeners(){
    const squares = document.querySelectorAll(".gridSquare");
    squares.forEach(singleSquare => singleSquare.addEventListener('mousemove',()=>{
        singleSquare.setAttribute('style', 'background-color:red');
    }));
}


/**clearGrid returns grid back to its original color */
function clearGrid(){
    const squares = document.querySelectorAll(".gridSquare");
    squares.forEach(singleSquare=>singleSquare.setAttribute('style', 'background-color:black'));
}
/**setGrid asks user for new grid size and calls necessary functions needed to
 * create new grid */
function setGrid(){
    let userInput = prompt("How many squares on each side?");
    deleteGrid();
    createGrid(userInput);
}