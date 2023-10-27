
// var RandomImg = [
//     './images/dice1.png/',
//     './images/dice2.png/',
//     './images/dice3.png/',
//     './images/dice4.png/',
//     './images/dice5.png/',
//     './images/dice6.png/'];

// var size = RandomImg.length;
// var size = RandomImg.length;
// var x = Math.floor(Math.random()*size);
// // document.getElementsByClassName("dice").src=RandomImg[x];
// player1 = document.querySelector(".img1").src=RandomImg[x];

// var size = RandomImg.length;
// var y = Math.floor(Math.random()*size);
// player2 = document.querySelector(".img2").src=RandomImg[y];

// if (x>y){
//     document.querySelector("h1").innerHTML="Player1 Win!"
// }
// else if(x<y){
//     document.querySelector("h1").innerHTML="Player2 Win!"
// }
// else{
//     document.querySelector("h1").innerHTML="Draw!"
// }

var randomNumber = Math.floor(Math.random()*6 + 1); // random number

var randomDice = "Dice"+randomNumber+".png"; // use concenation for image

var randomImg = "./images/"+ randomDice; // first line we random the nums and we want to call image so we concante 

var player1 = document.querySelectorAll("img")[0]; // we use DOM and querySelector to call img tag from html.

player1.setAttribute ("src" , randomImg); // and we use setAttribute for src of image and random image


var randomNumber2 = Math.floor(Math.random()*6 +1); // we use the same method but we change the variable.
var randomImg2 = "./images/Dice"+randomNumber2+".png"; 
var player2 = document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if (randomImg>randomImg2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"; //the condition! if the player 1 wins, queryselector select "h1" and and change the value
    document.querySelectorAll("p")[1 ].innerHTML = "Love U"
}// .innerHTML means the p inside h1 will change.
else if (randomImg<randomImg2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Players Draw!"
}

