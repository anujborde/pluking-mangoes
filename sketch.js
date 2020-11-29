
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint



function preload()
{
	


}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

g=new Ground(590,700,1200,20)

boy=new Boy(240,625,250,250)

t=new Tree(950,450,500,500)

m1=new Mango(950,350,50)

m2=new Mango(900,400,60)

m3=new Mango(900,350,50)

m4=new Mango(800,440,55)

m5 =new Mango(1000,300,60)

m6=new Mango(1100,350,60)

m7=new Mango(950,270,66)

m8=new Mango(830,390,60)

m9=new Mango(1000,400,55)

s=new Stone(140,580,50)

rubber=new Rubber(s.body,{x:140,y:575})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
boy.display();
g.display();
t.display();
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();
m8.display();
m9.display();
s.display();
rubber.display();

  drawSprites();

detect(m1,s)
detect(m2,s)
detect(m3,s)
detect(m4,s)
detect(m5,s)
detect(m6,s)
detect(m7,s)
detect(m8,s)
detect(m9,s)

 
}


function mouseDragged(){

	Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY})
	
	
	}
	
	
	function mouseReleased(){
	
	rubber.fly()
	
	}

function keyPressed(){

if(keyCode===32){
	rubber.attach(s.body)
}

}

function detect (object1,object2){

	var distance =dist(object1.body.position.x,object1.body.position.y,
		object2.body.position.x,object2.body.position.y	)

		if(distance<=object1.r+object2.r){
			Matter.Body.setStatic(object1.body,false)
		}

}




