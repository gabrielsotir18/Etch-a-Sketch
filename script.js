const gridContainer  = document.querySelector(".grid-container");


function draw(gridDimension){
    for(let i = 0 ; i < gridDimension ; i++){
        const gridDivRow = document.createElement("div");
        gridDivRow.classList.add("row-container");
        for(let j = 0 ; j < gridDimension ; j++){
            const gridDiv = document.createElement("div")
            gridDiv.classList.add("grid-element");
            gridDivRow.appendChild(gridDiv);
        }
        gridContainer.appendChild(gridDivRow);
    }
}

let dimension;
const slider = document.getElementById("grid-size-input");
dimension = document.getElementById("grid-size-input").value;
draw(dimension);

slider.addEventListener("input", drawGrid);


function drawGrid(){
    dimension = document.getElementById("grid-size-input").value;
    while(gridContainer.firstElementChild){
        gridContainer.firstElementChild.remove();
    }
    draw(dimension);
    document.querySelector(".output").textContent = dimension;
}
