class Barrier{
	constructor(){
		this.w = random(30,100)
		this.h = random(30,100)
		this.x =random(this.w,width-this.w)
		this.y = random(this.h,height-this.h)
	}
	show(){
		push()
		fill(255,0,0,random(150,255))
		rect(this.x,this.y,this.w,this.h,3)
		textSize(42);
  		fill(0);
  		text("X", this.x-15, this.y+15);
		pop()
	}
	collide(){
    	for (var i = 0; i < barrier.length; i++) {
    		let c = dist(barrier[i].x,barrier[i].y,ship.ship.x,ship.ship.y);
    		if(c < 30 && score!==0){
    			barrier=[]
    			noLoop()
			    textSize(40);
			    push();
			    fill(255, 0, 0);
			    text("GAME OVER", width/3.5, height/2);
			    pop();
    		}
  		}	
    }
}