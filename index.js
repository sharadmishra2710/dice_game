
var dice1 = (Math.floor(Math.random()*6)+1);
var dice2 = (Math.floor(Math.random()*6)+1)

var random1 = "images/dice"+dice1+".png";
var random2 = "images/dice"+dice2+".png";

document.querySelector("img.img1").setAttribute("src",random1);
document.querySelector("img.img2").setAttribute("src",random2);

var winner = winnerString(dice1,dice2);
document.querySelector("h1").textContent=winner;


function winnerString(num1,num2){
  if(num1 === num2){return "Match Draw";}
  else if ( num1 > num2){return "Player 1 Wins";}
  else{return "Player 2 Wins";}
}
