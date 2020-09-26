class Ball{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':0,
        'density':1.2
    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image=loadImage('images/paper.png')
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    rectMode(CENTER);
    rect(this.image, 0,0, this.width, this.height);
    pop();
  }

  
}