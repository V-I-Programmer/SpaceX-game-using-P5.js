class Head extends Ship {
  constructor() {
    super();
    this.addX = 10;
    this.addY = 0;
    this.x;
    this.y;
  }
  show() {
    this.x = ship.ship.x + this.addX;
    this.y = ship.ship.y + this.addY;
    push();
    fill(200, 200, 0);
    ellipse(this.x, this.y, 15, 15);
    pop();
  }
  barrier(){
    if(this.x > width - 5 || this.x < 5 || this.y > height - 5 || this.y < 5){
      noLoop()
      textSize(40);
      push();
      fill(255, 0, 0);
      text("GAME OVER", width/3.5, height/2);
      barrier=[]
      shot=[]
      pop();
    }
  }
}
