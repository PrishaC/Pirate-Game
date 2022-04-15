const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bgImg
var tower,towerImg
var balls = []
var boats = []


function preload() {
 bgImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-10, width*2,10,options);
 World.add(world,ground);
tower = Bodies.rectangle(140,350,150,300,options)
 World.add(world,tower)
 angleMode(DEGREES)
 angle = 20
 cannon = new Cannon(185,140,100,100,angle)
 
 
 
}

function draw() {
  background(189);
  image(bgImg,0,0,1200,600)
  Engine.update(engine);
 fill ("pink")
 strokeWeight (1)
 rect(ground.position.x, ground.position.y,width*2,10);
 push ()
 imageMode(CENTER)
 image(towerImg,tower.position.x, tower.position.y,150,300)
 
  pop () 
  for(var i = 0;i< balls.length;i = i+1){
    showCannonBalls(balls[i],i)
    collisionWithBoat(i)
  }
  cannon.display()
  showBoats()
  
}



function showCannonBalls(ball,i){
  if(ball){
    ball.display()
    if(ball.body.position.x>=width || ball.body.position.y>height-50){
      ball.remove(i)
    }
  }
}

function showBoats(){
  if(boats.length>0){
    if(boats[boats.length-1].body.position.x<width-300 || boats[boats.length-1] == undefined){
      var positions = [-40,-20,-60,-70]
      var p = random(positions)
      boat = new Boat(width-80,height-60,170,170,p)
      boats.push(boat)
    }
    for(var i = 0;i<boats.length;i = i+1){
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].body,{x:-1,y:0})
        boats[i].display()
      }
    }
  }

  else{
    boat = new Boat(width-80,height-60,170,170,-80)
    boats.push(boat)
  }
}
function keyPressed(){
  if(keyCode == DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x,cannon.y)
    balls.push(cannonBall)
    
  }
}
function keyReleased(){
  if(keyCode == DOWN_ARROW){
    balls [balls.length-1].shoot()
    

  }
}

function collisionWithBoat(bIndex){
  for(var i = 0;i<boats.length;i=i+1){
    if(balls[bIndex]!== undefined && boats[i]!==undefined){
      var collision = Matter.SAT.collides(balls[bIndex].body,boats[i].body)
      if(collision.collided){
        boats[i].remove(i)
      World.remove(world,balls[bIndex].body)
      delete balls[bIndex]
  

      }
    }
  }
}




