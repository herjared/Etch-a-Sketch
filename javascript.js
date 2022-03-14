const container = document.querySelector(".box");


/** Creates a 16x16 grid */
for (let i=0;i<16;i++){
    const gridColumn = document.createElement('div');
    gridColumn.classList.add("gridColumn");
    container.append(gridColumn);
    for (let i=0;i<16;i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridColumn.appendChild(gridSquare);
    }
}

const squares = document.querySelectorAll(".gridSquare");
squares.forEach(singleSquare => singleSquare.addEventListener('mouseover',()=>{
    singleSquare.setAttribute('style', 'background-color:red');
}));