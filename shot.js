class Shot {
  constructor(pos) {
    (this.addX = 15), (this.addY = 0);
    this.Xpos = 4;
    this.Ypos = 0;
    if (pos === 39) {
      this.Xpos = 4;
      this.Ypos = 0;
    }
    if (pos === 40) {
      this.Xpos = 0;
      this.Ypos = 4;
      this.addX = 0;
      this.addY = 15;
    }
    if (pos === 37) {
      this.Xpos = -4;
      this.Ypos = 0;
      this.addX = -15;
      this.addY = 0;
    }
    if (pos === 38) {
      this.Xpos = 0;
      this.Ypos = -4;
      this.addX = 0;
      this.addY = -15;
    }
    this.x = ship.ship.x + head.addX + this.addX;
    this.y = ship.ship.y + head.addY + this.addY;
    this.out = false;
    this.count = 0;
  }
  show() {
    push();
    fill(255, 0, 100);
    ellipse(this.x, this.y, 13);
    pop();
  }
  move() {
    this.x += this.Xpos;
    this.y += this.Ypos;
  }
  remove() {
    if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {
      this.out = true;
    } else {
      this.out = false;
    }
  }
  collide() {
   for (let i = 0; i < food.length; i++) {
    let d = dist(this.x, this.y, food[i].food.x, food[i].food.y);
    let c = dist(barrier[i].x,barrier[i].y,shot[i].x,shot[i].y);
    if(c < 50){
      this.out=true;
    }
    if (d < 15) {
      this.count++;
      this.out=true;
      barrier=[]
      barrier.push(new Barrier())
      score++;
      food=[];
      fCount = 0;
      if (this.count > 1) {
        if (this.count % 10 !== 1) {
          food.push(new Food(0));
        } else {
          food.push(new Food(1));
        }
      } else {
        food.push(new Food(0));
      }
    }
  }
  }
}
