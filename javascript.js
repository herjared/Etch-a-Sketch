const container = document.querySelector(".box");


/** createGrid creates a grid based on user input */

function createGrid(){
    for (let i=0;i<32;i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add("gridColumn");
        container.append(gridColumn);
        for (let i=0;i<32;i++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridColumn.appendChild(gridSquare);
        }
    }
}
createGrid();
/**Create event listeners so that when a user hovers over a square it will
 * change color */

const squares = document.querySelectorAll(".gridSquare");
squares.forEach(singleSquare => singleSquare.addEventListener('mouseover',()=>{
    singleSquare.setAttribute('style', 'background-color:red');
}));