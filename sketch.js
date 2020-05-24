var backgroundImg;

function preload(){
  backgroundImg = loadImage("sprites/backgrond.jpg");

}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(backgroundImg);
  fill("red");
  rect (10,200,100,600);
  fill("blue");
  triangle(10,200,110,200,55,55);
   
  fill("red");
  rect (700,200,100,600);
  fill("blue");
  triangle(700,200,800,200,750,50);
   
  fill("yellow");
  rect (110,300,590,150);
  
  rect (200,200,420,100);

  rect (300,100,200,100);

  fill ("#B49573");
  rect (300,300,100,100);
  
  rect (400,300,100,100);

  fill("yellow");
  circle (10,10,94);

}