let beerButton = document.querySelector('#drink');
let sparkleImage = document.querySelector('#sparkling');
let rumImage = document.querySelector('#reject');
let vodkaImage = document.querySelector('#russia');
let wineImage = document.querySelector('#wine');
function beerInfo(){
    document.getElementById(`alcohol`).innerHTML = "Beer";
    document.getElementById(`made`).innerHTML = "Various grains and Hops";
    document.getElementById(`man`).innerHTML = "66 cups (15.6 L)";
    document.getElementById(`woman`).innerHTML = "56 cups (13.2 L)";
}
function sparkleInfo(){
    document.getElementById(`alcohol`).innerHTML = "Champagne";
    document.getElementById(`made`).innerHTML = "Grapes";
    document.getElementById(`man`).innerHTML = "28 cups (6.6 L)";
    document.getElementById(`woman`).innerHTML = "24 cups (5.6 L)";
}
function rumInfo(){
    document.getElementById(`alcohol`).innerHTML = "Rum";
    document.getElementById(`made`).innerHTML = "Molasses";
    document.getElementById(`man`).innerHTML = "9 cups (2.1 L)";
    document.getElementById(`woman`).innerHTML = "7 cups (1.6 L)";
}
function vodkaInfo(){
    document.getElementById(`alcohol`).innerHTML = "Vodka";
    document.getElementById(`made`).innerHTML = "Potatoes";
    document.getElementById(`man`).innerHTML = "9 cups (2.1 L)";
    document.getElementById(`woman`).innerHTML = "7 cups (1.6 L)";
}
function wineInfo(){
    document.getElementById(`alcohol`).innerHTML = "Wine";
    document.getElementById(`made`).innerHTML = "Grapes";
    document.getElementById(`man`).innerHTML = "29 cups (6.8 L)";
    document.getElementById(`woman`).innerHTML = "24 cups (5.6 L)";
}
beerButton.addEventListener(`click`, beerInfo);
sparkleImage.addEventListener(`click`, sparkleInfo);
rumImage.addEventListener(`click`, rumInfo);
vodkaImage.addEventListener(`click`,vodkaInfo);
wineImage.addEventListener(`click`, wineInfo);
console.log("Help me")