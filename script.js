
let container = document.querySelector(".container");


function createGrid(){
    for(let i =0; i < 256; i++){
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
    let gridSize = Math.min(100,prompt("Enter Grid Size: ",16))

}


function main(){
    createGrid();
    container.addEventListener('mouseover',onMouseOver);
    container.addEventListener('mouseout',onMouseOut);
    document.querySelector("button").addEventListener('click',onSettingsButtonClick);
}


main();


