class Food {
  constructor(ammount) {
    this.food = createVector(random(20, width - 20), random(10, height - 10));
    this.r;
    this.ammount;
    if (ammount === 0) {
      this.ammount=0;
    } else if (ammount === 1) {
      this.ammount=1;
    }
  }
  show() {
    if (this.ammount === 0) {
      this.r = random(10, 20);
    } else if (this.ammount === 1) {
      this.r = random(30,40);
    }
    push();
    fill(200, 200, 250);
    ellipse(this.food.x, this.food.y, this.r);
    pop();
  }
  collide(){
    for (var i = 0; i < barrier.length; i++) {
    let c = dist(this.food.x,this.food.y,barrier[i].x,barrier[i].y);
    if(c < 100){
      food=[]
    food.push(new Food(0));
    }
  }
  }
}
