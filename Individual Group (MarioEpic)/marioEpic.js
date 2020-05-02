var start = 0;
var week1 = 95;
var week2 = 215;
var week3 = 335;
var week4 = 455;
var week5 = 575;
var week6 = 695;
var week7 = 815;
var week8 = 935;

var temperature = "temperature (C)"
var moisture = "MOIST"
var texture = "fine-large"
var wormPop = "worm population"
var tea = "tea amount (ml)"






function tempData(){

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 160);
ctx.lineTo(week1, 100);
ctx.lineTo(week2, 95);
ctx.lineTo(week3, 90);
ctx.lineTo(week4, 100);
ctx.lineTo(week5, 70);
ctx.lineTo(week6, 70);
ctx.lineTo(week7, 80);
ctx.lineTo(week8, 150);
ctx.stroke();
}



function moistureData(){


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 160);
ctx.lineTo(week1, 50);
ctx.lineTo(week2, 40);
ctx.lineTo(week3, 100);
ctx.lineTo(week4, 80);
ctx.lineTo(week5, 30);
ctx.lineTo(week6, 120);
ctx.lineTo(week7, 90);
ctx.lineTo(week8, 150);
ctx.stroke();
}

function textureData(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 160);
ctx.lineTo(week1, 100);
ctx.lineTo(week2, 95);
ctx.lineTo(week3, 90);
ctx.lineTo(week4, 100);
ctx.lineTo(week5, 70);
ctx.lineTo(week6, 70);
ctx.lineTo(week7, 80);
ctx.lineTo(week8, 150);
ctx.stroke();
}



function wormData(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 160);
ctx.lineTo(week1, 50);
ctx.lineTo(week2, 40);
ctx.lineTo(week3, 100);
ctx.lineTo(week4, 80);
ctx.lineTo(week5, 30);
ctx.lineTo(week6, 120);
ctx.lineTo(week7, 90);
ctx.lineTo(week8, 150);
ctx.stroke();
}

function teaData(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 160);
ctx.lineTo(week1, 50);
ctx.lineTo(week2, 40);
ctx.lineTo(week3, 100);
ctx.lineTo(week4, 80);
ctx.lineTo(week5, 30);
ctx.lineTo(week6, 120);
ctx.lineTo(week7, 90);
ctx.lineTo(week8, 150);
ctx.stroke();
}




