document.getElementById("calorieNumber").addEventListener('click', function() {
    var text = document.getElementById('calorieNumber');
    text.value = "";
});
/*for the calorie calculator, the goal is to click the picture, and to have an individual function run for each picture that adds the number of calories to a specific text box, preferably you wont be allowed to type in the text box*/
let newNumber = 0;

function fries(){
    let newNumber = document.getElementById("calorieNumber") + 378;
    document.getElementById("calorieNumber").innerHTML = newNumber;
}