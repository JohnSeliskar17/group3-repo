let beerButton = document.querySelector('#drink');
let sparkleImage = document.querySelector('#sparkling');
let rumImage = document.querySelector('#reject');
let vodkaImage = document.querySelector('#russia');
let wineImage = document.querySelector('#wine');
function beerInfo(){
    document.getElementById(`alcohol`).innerHTML = "Beer";
    document.getElementById(`made`).innerHTML = "Various grains and Hops";
    document.getElementById(`man`).innerHTML = "hello";
    document.getElementById(`woman`).innerHTML = "FINALLY!!!"
}
function sparkleInfo(){
    document.getElementById(`alcohol`).innerHTML = "Champagne";
    document.getElementById(`made`).innerHTML = "Grapes";
    document.getElementById(`man`).innerHTML = "Fatty"
    document.getElementById(`woman`).innerHTML = "Fatty";
}
function rumInfo(){
    document.getElementById(`alcohol`).innerHTML = "Rum";
    document.getElementById(`made`).innerHTML = "Molasses";
    document.getElementById(`man`).innerHTML = "Help";
    document.getElementById(`woman`).innerHTML = "Me";
}
function vodkaInfo(){
    document.getElementById(`alcohol`).innerHTML = "Vodka";
    document.getElementById(`made`).innerHTML = "Potatoes";
    document.getElementById(`man`).innerHTML = "God fucking damit Kris!";
    document.getElementById(`woman`).innerHTML = "Where the HELL are we?!";
}
function wineInfo(){
    document.getElementById(`alcohol`).innerHTML = "Wine";
    document.getElementById(`made`).innerHTML = "Grapes";
    document.getElementById(`man`).innerHTML = "yufryurfhb";
    document.getElementById(`woman`).innerHTML = "ifrbjerberiqui";
}
beerButton.addEventListener(`click`, beerInfo);
sparkleImage.addEventListener(`click`, sparkleInfo);
rumImage.addEventListener(`click`, rumInfo);
vodkaImage.addEventListener(`click`,vodkaInfo);
wineImage.addEventListener(`click`, wineInfo);
console.log("Help me")