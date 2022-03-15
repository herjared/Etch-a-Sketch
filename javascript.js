
const container = document.querySelector(".box");


/** createGrid creates a grid based on user input */

function createGrid(userChoice = 16){

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

function deleteGrid(){
    
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
function setGrid(){
    let userInput = prompt("How many squares on each side?");
    createGrid(userInput);
}