
var player1 = 0;
var player2 = 0;
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");
var dice = document.querySelectorAll(".dice");

function play() {
    return Math.floor(Math.random()*6 + 1)
}
function start(img1, img2) {
    player1 = play();
    player2 = play();
    if(player1 > player2){
        h1.innerHTML = "player 1 wins!!!"
    } else if ( player2 > player1){
        h1.innerHTML = "player 2 wins!!!"
    } else {
        h1.innerHTML = "DRAW !!!"
    }
    img1.setAttribute("src", "images/dice" + player1 + ".png");
    img2.setAttribute("src", "images/dice" + player2 + ".png");
    console.log(player1, player2)
}

start(img1, img2);

dice.forEach(function (dice) {
    dice.addEventListener("click", function () {
        start(img1, img2);
    });
});
