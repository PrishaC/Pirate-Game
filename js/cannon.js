class Cannon{
constructor(x,y,width,height,angle){
this.x = x
this.y = y
this.width = width
this.height = height
this.angle = angle
this.gunImg  = loadImage("assets/canon.png")
this.cannonBaseImg = loadImage("assets/cannonBase.png")

}
display(){
    //controlling the gun with left and right arrow keys
    if(keyIsDown(RIGHT_ARROW) && this.angle<80){
        this.angle = this.angle+1
    }
    if(keyIsDown(LEFT_ARROW)&& this.angle>-30){
        this.angle = this.angle-1
    }
    //code to create cannon gun
    push ()
    imageMode(CENTER)
    translate (this.x,this.y)
    rotate (this.angle)
    image(this.gunImg,0,0,this.width,this.height)
    pop ()
    //code to create the cannon base
    image(this.cannonBaseImg,60,40,200,200)
    
}
}