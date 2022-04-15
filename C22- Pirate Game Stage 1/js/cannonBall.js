class CannonBall{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.r = 30
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
        this.ballImg = loadImage("assets/cannonball.png")
        this.trajactory = []
    }
    shoot (){
        var newAngle = cannon.angle-35
        newAngle = newAngle*(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
    }
    remove(index){
        setTimeout(()=>{
            World.remove(world,this.body)
      delete balls[index]
        },1000)
    }
    display(){
        var pos = this.body.position
        push ()
        imageMode (CENTER)
        image (this.ballImg,pos.x,pos.y,this.r,this.r)
        pop ()

    //storing the current x and y position of the cannoball in the position array
if(this.body.velocity.x>0){
    var position = [pos.x,pos.y]
    //adding the position array in the trajactory array to store all the positions of the ball while it was traveling in the trajactory array
    this.trajactory.push(position)
    
}
//this.trajactory = [[1,2],[3,4],[5,6],[7,8]]

//extracting the posistions of the cannonball one by one from the trajactory array & displaying the image of a tiny cannonball at all of those positions
for(var i=0;i<this.trajactory.length;i=i+1){
    image(this.ballImg,this.trajactory[i][0],this.trajactory[i][1],5,5)
}

    
    }

}