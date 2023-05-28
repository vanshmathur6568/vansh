var randomNumber1 =Math.floor(Math.random()*6+1);
var random = "dice" + randomNumber1 +".png";
var randomsource =   random;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource);
var randomNumber2 =Math.floor(Math.random()*6+1);
var random1 = "dice" + randomNumber2 +".png";
var randomsource1 = "./" + random1;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsource1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player1 won";
}else if(randomNumber2 >randomNumber1){
    document.querySelector("h1").innerHTML="player2 won";
}else{
    document.querySelector("h1").innerHTML="its a tie";
}