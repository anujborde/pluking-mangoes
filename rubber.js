class Rubber{

  constructor(bodyA,pointB){
  
      var options ={
          bodyA:bodyA,
          pointB:pointB,
           length:1,
    stiffness:0.01
          }
  this.pointB=pointB        
    this.sling = Constraint.create(options)
   World.add(world,this.sling)
  
  }
  
  fly(){
  
    this.sling.bodyA=null  
  
  }

attach(body){

this.sling.bodyA=body

}


  display(){
  

  
  if (this.sling.bodyA){
  
      var slingA=this.sling.bodyA.position
      var slingB=this.pointB
  
      line(slingA.x,slingA.y,slingB.x,slingB.y)
  
  }
  
  }
  
  
  }