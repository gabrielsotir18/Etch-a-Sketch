const gridContainer  = document.querySelector(".grid-container");
let clicked;
document.addEventListener('mousedown', e => clicked = e.buttons);
document.addEventListener('mouseup', e => clicked = e.buttons);

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

const gridItems = Array.from(document.querySelectorAll('.grid-element'));
    gridItems.forEach(item =>{
        item.addEventListener("mouseover", e =>{
            if(clicked){
                changeColor(e.target);
            }   
        });
        item.addEventListener("mousedown", e =>{
            changeColor(e.target);
        });
        item.addEventListener("touchmove", e =>{
            changeColor(e.target);
        });
    });

function changeColor(item){
    item.style.backgroundColor = "black";
}

function drawGrid(){
    dimension = document.getElementById("grid-size-input").value;
    while(gridContainer.firstElementChild){
        gridContainer.firstElementChild.remove();
    }
    draw(dimension);
    document.querySelector(".output").textContent = `${dimension} x ${dimension}`;
    const gridItems = Array.from(document.querySelectorAll('.grid-element'));
    gridItems.forEach(item =>{
        item.addEventListener("mouseover", e =>{
            if(clicked){
                changeColor(e.target);
            }    
        });
        item.addEventListener("mousedown", e =>{
            changeColor(e.target);
        });
    });
}




