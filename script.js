
let container = document.querySelector(".container");


function createGrid(gridSize){
    container.replaceChildren();
    if (gridSize <= 0){
        return;
    }
    for(let i =0; i < gridSize * gridSize; i++){
        let div = document.createElement("div");
        div.innerHTML = "test";
        div.classList.add('grid-square')
        container.appendChild(div);
    }
}

function onMouseOver(e){
    let target = e.target;
    console.log(target);

    if (!target.classList.contains('grid-square')){
        return;
    }

    target.style.backgroundColor = "red";
}

function onMouseOut(e){
    let target = e.target;
    console.log(target);

    if (!target.classList.contains('grid-square')){
        return;
    }

    target.style.backgroundColor = "white";
}


function onSettingsButtonClick(){
    let userInput = prompt("Enter Grid Size (Max:100): ",16);
    if (userInput === null || userInput === "") return;

    let gridSize = parseInt(userInput);
    if(isNaN(gridSize) || gridSize < 1){
        alert("Enter a valid num")
        return;
    }
    console.log(gridSize);
    createGrid(Math.min(100,gridSize));
}


function main(){
    createGrid(16);
    container.addEventListener('mouseover',onMouseOver);
    container.addEventListener('mouseout',onMouseOut);
    document.querySelector("button").addEventListener('click',onSettingsButtonClick);
}


main();


