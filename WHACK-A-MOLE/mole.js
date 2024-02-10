//This will help to find the track which tile hase mole
let currMoleTile;

let currPlantTile;

let score = 0;
let gameOver = false;

// Whwen our page loades
window.onload = function()
{
    setGame();
}


function setGame()
{
    //setup th grid for the game board in html = 3*3
    //creating 9 div tage inside board with id = "0","1"...
    for(let i=0;i<9;i++)//i gose from 0 t 8, stops at 9
    {
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener('click',selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,1000);//1000 miliseconds --> 1 seconds
    setInterval(setPlant,2000);//2000 miliseconds --> 2 seconds
    
}

function getRamdomTile()
{
    //math.random --> (0-1) * 9 --> (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random()*9);
    return num.toString();//it will covrt it to string
}

function setMole()
{
    if(gameOver)
    {
        return;
    }

    //This will clear all the tile within this div tag
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    //to place the mole on randome tile
    let num = getRamdomTile();

    //if plant and mole occupy same tile
    if(currPlantTile && currPlantTile.id == num)
    {
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPlant()
{

    if(gameOver)
    {
        return;
    }

    if(currPlantTile)
    {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRamdomTile();

     //if plant and mole occupy same tile
     if(currMoleTile && currMoleTile.id == num)
     {
        return;
     }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile()
{

    if(gameOver)
    {
        return;
    }

       if(this == currMoleTile)
       {
            score += 10;
            document.getElementById("score").innerHTML = score.toString();
       }
       else if(this == currPlantTile)
       {
            document.getElementById("score").innerText = "Game Over : " + score.toString();
            gameOver = true;
       }
}