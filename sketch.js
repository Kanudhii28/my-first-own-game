let ground;
let lander;
var lander_img;
var bg_img;
var rcs_left;
var rcs_right;
var bike,bikeimg;



var vx = 2;
var vy = 2;
var g = 0.05;


function preload()
{
  bikeimg = loadImage("bike.JPEG");
  bg_img = loadImage("bg.png");
  rcs_left = loadAnimation("left_thruster_1.png","left_thruster_2.png");
  rcs_right = loadAnimation("right_thruster_1.png","right_thruster_2.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  timer = 1500;

  
  bike = createSprite(100,50,30,30);
  bike.addImage(bikeimg);
  bike.scale = 0.1;

  /*lander.addAnimation('thrust',"b_thrust_1.png","b_thrust_2.png","b_thrust_3.png" );
  lander.addAnimation('thrusting',thrust);
  lander.addAnimation('left',rcs_left);
  lander.addAnimation('normal',normal);
  lander.addAnimation('right',rcs_right);*/

  ground = createSprite(500,690,1000,20);

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  bike.position.y=vy;
  bike.position.x=vx;

  
 

 

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW );
  {
    upward_thrust();
    
  }
  if(keyCode==RIGHT_ARROW );
  {
    right_thrust();
  }

  if(keyCode==LEFT_ARROW );
  {
    left_thrust();
  }
}

function upward_thrust()
{
  vy = -1;
}

function right_thrust()
{ 
  vx += 0.2;
}

function left_thrust()
{
  vx -= 0.2;
}
