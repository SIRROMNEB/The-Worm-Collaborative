var start = 0;
var period1 = 190;
var period2 = 380;
var period3 = 690;
var period4 = 800;
var end=1000;


var temperature = "1-4"
var moisture = "4-8"
var texture = "8-12"
var wormPop = "12-16"
var tea = "16-20"



function period1A(){

let hue = 50 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 925, 439);
ctx.beginPath();
ctx.moveTo(start, 430);
ctx.lineTo(period1, 400);
ctx.lineTo(period2, 375);
ctx.lineTo(period3, 350);
ctx.lineTo(period4, 320);
ctx.lineTo(end, 300);

ctx.stroke();

}



function period1B(){

let hue = 100 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.beginPath();
ctx.moveTo(start, 430);
ctx.lineTo(period1, 350);
ctx.lineTo(period2, 340);
ctx.lineTo(period3, 300);
ctx.lineTo(period4, 280);
ctx.lineTo(end, 276);

ctx.stroke();

}


function period1C(){

let hue = 200 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.beginPath();
ctx.moveTo(start, 430);
ctx.lineTo(period1, 420);
ctx.lineTo(period2, 350);
ctx.lineTo(period3, 348);
ctx.lineTo(period4, 320);
ctx.lineTo(end, 310);

ctx.stroke();

}

function period1D(){

let hue = 300 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.beginPath();
ctx.moveTo(start, 430);
ctx.lineTo(period1, 420);
ctx.lineTo(period2, 380);
ctx.lineTo(period3, 375);
ctx.lineTo(period4, 360);
ctx.lineTo(end, 340);

ctx.stroke();

}


function period1E(){

let hue = 320 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.beginPath();
ctx.moveTo(start, 430);
ctx.lineTo(period1, 300);
ctx.lineTo(period2, 250);
ctx.lineTo(period3, 255);
ctx.lineTo(period4, 244);
ctx.lineTo(end, 230);

ctx.stroke();

}


function period2A(){

let hue = 50 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 925, 439);
ctx.beginPath();
ctx.moveTo(start, 300);
ctx.lineTo(period1, 280);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 265);
ctx.lineTo(period4, 260);
ctx.lineTo(end, 250);

ctx.stroke();

}



function period2B(){

let hue = 100 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 276);
ctx.lineTo(period1, 274);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 250);
ctx.lineTo(period4, 245);
ctx.lineTo(end, 210);

ctx.stroke();

}


function period2C(){

let hue = 200 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 310);
ctx.lineTo(period1, 300);
ctx.lineTo(period2, 280);
ctx.lineTo(period3, 270);
ctx.lineTo(period4, 260);
ctx.lineTo(end, 254);

ctx.stroke();

}

function period2D(){

let hue = 300 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 340);
ctx.lineTo(period1, 336);
ctx.lineTo(period2, 330);
ctx.lineTo(period3, 310);
ctx.lineTo(period4, 300);
ctx.lineTo(end, 298);

ctx.stroke();

}


function period2E(){

let hue = 320 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 230);
ctx.lineTo(period1, 226);
ctx.lineTo(period2, 220);
ctx.lineTo(period3, 200);
ctx.lineTo(period4, 198);
ctx.lineTo(end, 190);

ctx.stroke();

}

function period3A(){

let hue = 50 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 925, 439);
ctx.beginPath();
ctx.moveTo(start, 250);
ctx.lineTo(period1, 300);
ctx.lineTo(period2, 240);
ctx.lineTo(period3, 220);
ctx.lineTo(period4, 260);
ctx.lineTo(end, 200);

ctx.stroke();

}



function period3B(){

let hue = 100 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 210);
ctx.lineTo(period1, 200);
ctx.lineTo(period2, 180);
ctx.lineTo(period3, 170);
ctx.lineTo(period4, 190);
ctx.lineTo(end, 210);

ctx.stroke();

}


function period3C(){

let hue = 200 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 254);
ctx.lineTo(period1, 260);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 230);
ctx.lineTo(period4, 220);
ctx.lineTo(end, 225);

ctx.stroke();

}

function period3D(){

let hue = 300 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 298);
ctx.lineTo(period1, 280);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 210);
ctx.lineTo(period4, 240);
ctx.lineTo(end, 270);

ctx.stroke();

}


function period3E(){

let hue = 320 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 190);
ctx.lineTo(period1, 140);
ctx.lineTo(period2, 160);
ctx.lineTo(period3, 165);
ctx.lineTo(period4, 170);
ctx.lineTo(end, );

ctx.stroke();

}


function period4A(){

let hue = 50 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 925, 439);
ctx.beginPath();
ctx.moveTo(start, 300);
ctx.lineTo(period1, 280);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 265);
ctx.lineTo(period4, 260);
ctx.lineTo(end, 250);

ctx.stroke();

}



function period4B(){

let hue = 100 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 276);
ctx.lineTo(period1, 274);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 250);
ctx.lineTo(period4, 245);
ctx.lineTo(end, 210);

ctx.stroke();

}


function period4C(){

let hue = 200 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 310);
ctx.lineTo(period1, 300);
ctx.lineTo(period2, 280);
ctx.lineTo(period3, 270);
ctx.lineTo(period4, 260);
ctx.lineTo(end, 254);

ctx.stroke();

}

function period4D(){

let hue = 300 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 340);
ctx.lineTo(period1, 336);
ctx.lineTo(period2, 330);
ctx.lineTo(period3, 310);
ctx.lineTo(period4, 300);
ctx.lineTo(end, 298);

ctx.stroke();

}


function period4E(){

let hue = 320 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 230);
ctx.lineTo(period1, 226);
ctx.lineTo(period2, 220);
ctx.lineTo(period3, 200);
ctx.lineTo(period4, 198);
ctx.lineTo(end, 190);

ctx.stroke();

}


function period5A(){

let hue = 50 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 925, 439);
ctx.beginPath();
ctx.moveTo(start, 250);
ctx.lineTo(period1, 300);
ctx.lineTo(period2, 240);
ctx.lineTo(period3, 220);
ctx.lineTo(period4, 260);
ctx.lineTo(end, 200);

ctx.stroke();

}



function period5B(){

let hue = 100 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 210);
ctx.lineTo(period1, 200);
ctx.lineTo(period2, 180);
ctx.lineTo(period3, 170);
ctx.lineTo(period4, 190);
ctx.lineTo(end, 210);

ctx.stroke();

}


function period5C(){

let hue = 200 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 254);
ctx.lineTo(period1, 260);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 230);
ctx.lineTo(period4, 220);
ctx.lineTo(end, 225);

ctx.stroke();

}

function period5D(){

let hue = 300 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 298);
ctx.lineTo(period1, 280);
ctx.lineTo(period2, 270);
ctx.lineTo(period3, 210);
ctx.lineTo(period4, 240);
ctx.lineTo(end, 270);

ctx.stroke();

}


function period5E(){

let hue = 320 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue = ++hue % 360;
ctx.clearRect(0, 0, 970, 170);
ctx.beginPath();
ctx.moveTo(start, 190);
ctx.lineTo(period1, 140);
ctx.lineTo(period2, 160);
ctx.lineTo(period3, 165);
ctx.lineTo(period4, 170);
ctx.lineTo(end, );

ctx.stroke();

}












