const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 = [], box2 = [],box3 = [], box4 = [], box5 = [], box6 = [];
var ball;
var ground, ground2, roof;
var colour;
var slingthing;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(100, 260, 400, 20);
  roof = new Ground(400, 10, 800, 20);
  ground2 = new Ground(650, 170, 500, 20);
  sling = new Ground(350, 250, 10, 80);

  ball = new ColourBall(300, 300, 20, "red");
  console.log(ball.x);
  slingthing = new SlingShot(ball.body, {x:350, y:250})

  for (var i = 110, j = 0; i < 200; i=i+20, j++) {
   box1[j] = new ColorBox(i, 200, 20, 20, "pink"); 
   
  }
  for (var i = 50, k = 0; i < 270; i=i+20, k++) {
    box2[k] = new ColorBox(i, 220, 20, 20,"green");
    
  }
  for (var i = 20, l = 0; i < 300; i=i+20, l++) {
  box3[l] = new ColorBox(i, 240, 20, 20, "blue"); 
  
  }


  for (var i = 540, j = 0; i < 700; i=i+30, j++) {
    box4[j] = new ColorBox(i, 100, 30, 30, "pink"); 
    
   }
   for (var i = 480, k = 0; i < 770; i=i+30, k++) {
     box5[k] = new ColorBox(i, 130, 30, 30,"green");
    
   }
   for (var i = 450, l = 0; i < 800; i=i+30, l++) {
   box6[l] = new ColorBox(i, 160, 30, 30, "blue"); 
   
   }

}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground.display(); 
  ground2.display();
  ball.display();
  roof.display();
  slingthing.display();
  for (var i = 0; i < box1.length; i++){
    box1[i].display();
  }
  for (var n = 0; n < box2.length; n++){
    box2[n].display();
  }
  for (var z = 0; z < box3.length; z++){
    box3[z].display();
  }
  for (var m = 0; m < box4.length; m++){
    box4[m].display();
  }
  for (var k = 0; k < box5.length; k++){
    box5[k].display();
  }
  for (var j = 0; j < box6.length; j++){
    box6[j].display();
  }
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY-200});

}


function mouseReleased(){
  slingthing.fly();
}
