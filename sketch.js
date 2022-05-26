const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,10)
  division1 = new Division(0,630,5,310)
  division2 = new Division(70,630,5,310)
  division3 = new Division(140,630,5,310)
  division4 = new Division(210,630,5,310)
  division5 = new Division(280,630,5,310)
  division6 = new Division(350,630,5,310)
  division7 = new Division(420,630,5,310)
  division8 = new Division(480,630,5,310)
}

function draw() {
  background("black");  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  drawSprites();
}
