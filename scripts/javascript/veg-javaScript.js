let placeHolderOne = document.querySelector('#place1');
let placeHolderTwo = document.querySelector('#place2');
let placeHolderThree = document.querySelector('#place3');
let placeHolderFout = document.querySelector('#place4');
function homeIndex(){
    document.getElementById(`header`).innerHTML = "You did it!";
    document.getElementById(`info`).innerHTML = "Success";
    document.getElementById(`fact1`).innerHTML = "Fact";
    document.getElementById(`fact2`).innerHTML = "Chaos";
    document.getElementById(`fact3`).innerHTML = "Goose";
    document.getElementById(`fact5`).innerHTML = "Oppih";
}
function fastFresh(){
    document.getElementById(`header`).innerHTML = "How did you fail?!";
    document.getElementById(`info`).innerHTML = "Failure";
    document.getElementById(`fact1`).innerHTML = "Hippopotomonstrosesquippedaliophobia";
    document.getElementById(`fact2`).innerHTML = "Is the fear of long words";
    document.getElementById(`fact3`).innerHTML = "Aibohphobia";
    document.getElementById(`fact5`).innerHTML = "The fear of palindromes";
}
function calorieCalculator(){
    document.getElementById(`header`).innerHTML = "Never gonna give you up";
    document.getElementById(`info`).innerHTML = "www.youtube.com";
    document.getElementById(`fact1`).innerHTML = "McDonalds";
    document.getElementById(`fact2`).innerHTML = "KFC";
    document.getElementById(`fact3`).innerHTML = "Wendy's";
    document.getElementById(`fact5`).innerHTML = "Burger King";
}
function veganOption(){
    document.getElementById(`header`).innerHTML = "I have loads of ideas!"
    document.getElementById(`info`).innerHTML = "I'm out of ideas";
    document.getElementById(`fact1`).innerHTML = "Seriously help";
    document.getElementById(`fact2`).innerHTML = "I ran out of funny";
    document.getElementById(`fact3`).innerHTML = "I need funny!";
    document.getElementById(`fact5`).innerHTML = "Welp, ciao!";
}
placeHolderOne.addEventListener(`click`, homeIndex);
placeHolderTwo.addEventListener(`click`, fastFresh);
placeHolderThree.addEventListener(`click`, calorieCalculator);
placeHolderFout.addEventListener(`click`, veganOption);