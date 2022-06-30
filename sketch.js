let sentence = ['HOMERUN', 'Jackie Robinson', 'Dodgers Win!'];
let word;
let ts = 50;
let a = 50;
let b = 100;
let x = 450;
let y = 200;
let goLeft = false;

//Pre-load Image
function preload() {
  Jackie = loadImage('Jackie.jpg');
  Pitch = loadImage('Pitching.jfif');
  Font = loadFont("RubikMoonrocks-Regular.ttf");
}

function setup() {
  createCanvas(600, 400);
  textFont(Font);

  setTimeout(one, 6000);
  setTimeout(two, 8000);
  setTimeout(three,12000);
}

function one() {
  word = sentence[0];
  ts = 100;
}

function two() {
  word = sentence[1];
  ts = 60;
}

function three() {
  word = sentence[2];
  ts = 70;
}

function draw() {
  background(0);
  fill(100,255,30);
  image(Jackie, 0, 220);
  image(Pitch, 400,200);
  textSize(ts);
  text(word, a, b); 
  
  fill(255);
  ellipse(x, y, 25, 25);
  if(goLeft==false){
      x = x-1;
  }
  if(goLeft==true){
     x = x+7;
  }
  if(x<200){
    goLeft=true;
  }
   if(goLeft==false){
      y = y+ .4;
  }
  if(goLeft==true){
     y = y-5;
  }
  if(y<200){
    goLeft=true;
  }
   
}

