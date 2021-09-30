document.querySelector(`#drink`).addEventListener(`click`,beerInfo());
function beerInfo(){
    document.getElementById(`alcohol`).value = "Beer";
    document.getElementById(`made`).value = "Various grains and Hops";
    document.getElementById(`man`).value = "hello";
}