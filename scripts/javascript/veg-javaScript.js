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
    document.getElementById(`header`).innerHTML = "Never gonna give you up";
    document.getElementById(`info`).innerHTML = "www.youtube.com";
    document.getElementById(`fact1`).innerHTML = "McDonalds";
    document.getElementById(`fact2`).innerHTML = "KFC";
    document.getElementById(`fact3`).innerHTML = "Wendy's";
    document.getElementById(`fact5`).innerHTML = "Burger King";
}
function veganOption(){
    document.getElementById(`header`).innerHTML = "Meatball alternatives"
    document.getElementById(`info`).innerHTML = "Soybeans, tofu, almonds, Paris, the entirety of Mars";
    document.getElementById(`fact1`).innerHTML = "Made with 0% animals";
    document.getElementById(`fact2`).innerHTML = "Gives you good dreams (Not responsible for nightmares of torture, torment, or anything similar reported in 90% of people who eat)";
    document.getElementById(`fact3`).innerHTML = "Only $149.99!";
    document.getElementById(`fact5`).innerHTML = "Order now!";
}
placeHolderOne.addEventListener(`click`, homeIndex);
placeHolderTwo.addEventListener(`click`, fastFresh);
placeHolderThree.addEventListener(`click`, calorieCalculator);
placeHolderFout.addEventListener(`click`, veganOption);