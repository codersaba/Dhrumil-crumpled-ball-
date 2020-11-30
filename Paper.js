class Paper{

    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.6,
            friction:0.3,
            density:1

        }
        

        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }



    display(){
        
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        strokeWeight(3);
        fill("skyblue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}