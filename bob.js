class Bob{
    constructor(x,y,r){
        var balloption={
            
            density:1.2,
            
            restitution:1.2
        }
        this.body=Bodies.circle(x,y,r,balloption)
       this.radius=r 
        World.add(world,this.body);
        
    
        
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
    ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r);
    pop();
    
    
    }
    
    
    }
    