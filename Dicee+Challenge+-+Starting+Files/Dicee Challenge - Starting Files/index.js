var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);


//img 2

var randomNumber2 =Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


//Title change 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}