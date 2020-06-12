class ColourBall {
    constructor(x, y, radius, color) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.color = color;
      this.x = x;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      ellipse(200, 200, this.radius, this.radius);
      fill(this.color);
      pop();
    }
  };