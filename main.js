let ship,
  head,
  food = [],
  shot = [],
  barrier=[],
  _dist = 0,
  score = 0,
  timer =0,
  fCount=0;
function setup() {
  createCanvas(500, 400);
  rectMode(CENTER);
  ship = new Ship();
  head = new Head();
  food.push(new Food(0));
  barrier.push(new Barrier())
}
function draw() {
  display()
  ship.show();
  head.show();
  ship.move(_dist);
  for (let i = 0; i < food.length; i++) {
    food[i].show()
    food[i].collide()
  }
  fCount++;
  timer = fCount%350;
  if (timer===0 && food.length!==0) {
    food=[]
    barrier=[]
    food.push(new Food(0));
    barrier.push(new Barrier())
  }
  for (let i = 0; i < shot.length; i++) {
    shot[i].show();
    shot[i].move();
    shot[i].remove();
    shot[i].collide();
    if (shot[i].out === true) {
      shot.splice(i, 1);
    }
  }
  head.barrier();
  for (var i = 0; i < barrier.length; i++) {
    barrier[i].show()
    barrier[i].collide()
  }
}
function keyPressed() {
  if (keyCode === 39) {
    _dist = 39;
  }
  if (keyCode === 40) {
    _dist = 40;
  }
  if (keyCode === 38) {
    _dist = 38;
  }
  if (keyCode === 37) {
    _dist = 37;
  }
  if (keyCode === 32) {
    shot.push(new Shot(_dist));
  }
}
function display(){
  background(0);
  textSize(26);
  push();
  fill(255, 255, 255, 100);
  text("SCORE : " + score, 10, 30);
  pop();
  for(let i =0; i < 10;i++){
  ellipse(random(width),random(height),random(0,3))
  }
  push()
  fill(100,100,100,random(0,20))
  ellipse(width/2,height/2,random(50,300))
  pop()
}