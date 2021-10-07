let placeHolderOne = document.querySelector('#place1');
let placeHolderTwo = document.querySelector('#place2');
let placeHolderThree = document.querySelector('#place3');
let placeHolderFout = document.querySelector('#place4');
function homeIndex(){
    document.getElementById(`header`).innerHTML = "Vegan Hot Dogs";
    document.getElementById(`info`).innerHTML = "Yes thats apparently a thing";
    document.getElementById(`fact1`).innerHTML = "Made with soybeans instead of, whatever hot dogs are made of";
    document.getElementById(`fact2`).innerHTML = "42% less calories";
    document.getElementById(`fact3`).innerHTML = "More pottasium";
    document.getElementById(`fact5`).innerHTML = "More protein";
}
function fastFresh(){
    document.getElementById(`header`).innerHTML = "Vegan Water";
    document.getElementById(`info`).innerHTML = "Also known as diet water";
    document.getElementById(`fact1`).innerHTML = "100% less hydrogen";
    document.getElementById(`fact2`).innerHTML = "0 calories";
    document.getElementById(`fact3`).innerHTML = "Fun for the whole family";
    document.getElementById(`fact5`).innerHTML = "Vegan water, now with more oxygen";
}
function calorieCalculator(){
    document.getElementById(`header`).innerHTML = "Burger alternatives";
    document.getElementById(`info`).innerHTML = "Made from tofu, soybeans, or vegetables";
    document.getElementById(`fact1`).innerHTML = "Less meat";
    document.getElementById(`fact2`).innerHTML = "Some can actually taste like meat";
    document.getElementById(`fact3`).innerHTML = "Condiments such as Ketchup and Mustard can still be used.";
    document.getElementById(`fact5`).innerHTML = "No chesse unfortunatly";
}
function veganOption(){
    document.getElementById(`header`).innerHTML = "Meatball alternatives"
    document.getElementById(`info`).innerHTML = "Soybeans, tofu, almonds, Paris, the entirety of Mars";
    document.getElementById(`fact1`).innerHTML = "Made with 0% animals";
    document.getElementById(`fact2`).innerHTML = "Totally better then regular meat balls";
    document.getElementById(`fact3`).innerHTML = "Are you a weirdo if so this is the food for you";
    document.getElementById(`fact5`).innerHTML = "Order now!";
}
placeHolderOne.addEventListener(`click`, homeIndex);
placeHolderTwo.addEventListener(`click`, fastFresh);
placeHolderThree.addEventListener(`click`, calorieCalculator);
placeHolderFout.addEventListener(`click`, veganOption);