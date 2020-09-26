class Bin {

    constructor(x, y, width, height) {

        var option = {
          isStatic: true,
          'restitution':0,
          'friction':0.1,
          'density':100
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        //this.image=loadImage('images/dustbingreen.png');
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        //fill("yellow")
        rect( pos.x,pos.y, this.width, this.height);
        pop();
      }
}