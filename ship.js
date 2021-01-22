class Ship {
  constructor() {
    this.ship = createVector(width / 2, height / 2);
    (this.Xpos = 0), (this.Ypos = 0);
    (this.w = 20), (this.h = 10);
  }
  show() {
    push();
    fill(255, 255, 0);
    rect(this.ship.x, this.ship.y, this.w, this.h, 10);
    pop();
  }
  move(_dist) {
    this.ship.x += this.Xpos;
    this.ship.y += this.Ypos;
    if (_dist === 39) {
      this.w = 20;
      this.h = 10;
      head.addX = 10;
      head.addY = 0;
      this.Xpos = 3;
      this.Ypos = 0;
    }
    if (_dist === 40) {
      this.w = 10;
      this.h = 20;
      head.addX = 0;
      head.addY = 10;
      this.Xpos = 0;
      this.Ypos = 3;
      shot.Xpos = 0;
      shot.Ypos = 2;
    }
    if (_dist === 37) {
      this.w = 20;
      this.h = 10;
      head.addX = -10;
      head.addY = 0;
      this.Xpos = -3;
      this.Ypos = 0;
    }
    if (_dist === 38) {
      this.w = 10;
      this.h = 20;
      head.addX = 0;
      head.addY = -10;
      this.Xpos = 0;
      this.Ypos = -3;
    }
  }
}
