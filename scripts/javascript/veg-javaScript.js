let placeHolderOne = document.querySelector('#place1');
let placeHolderTwo = document.querySelector('#place2');
let placeHolderThree = document.querySelector('#place3');
let placeHolderFout = document.querySelector('#place4');
function homeIndex(){
    document.getElementById(`info`).innerHTML = "Success";
}
function fastFresh(){
    document.getElementById(`info`).innerHTML = "Failure";
}
function calorieCalculator(){
    document.getElementById(`info`).innerHTML = "www.youtube.com";
}
function veganOption(){
    document.getElementById(`info`).innerHTML = "I'm out of ideas";
}
placeHolderOne.addEventListener(`click`, homeIndex);
placeHolderTwo.addEventListener(`click`, fastFresh);
placeHolderThree.addEventListener(`click`, calorieCalculator);
placeHolderFout.addEventListener(`click`, veganOption);