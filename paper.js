class Paper {
    constructor(x,y,radius){
       var options = {
           isStatic:false,
           restitution:0.3,
           density:1.2,
           friction:0.5,
       } 
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    
   Matter. World.add(world, this.body);
  }
  display(){
    push();
    imageMode(CENTER);
    fill(255);
    image(this.image,this.body.position.x, this.body.position.y,this.radius*2,this.radius*2);
    pop();
  }
    
}