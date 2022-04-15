class Boat{
    constructor(a,b,c,d,boatPos){
        var options = {
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(a,b,c,d,boatPos,options)
        this.width = c
        this.height = d
        this.boatPosition = boatPos
        World.add(world,this.body)
        this.boatImg = loadImage("assets/boat.png")
    }
    remove(index){
        setTimeout(()=>{
            World.remove(world,boats[index].body)
      delete boats[index]
        },2000)
    }
display(){
    var p = this.body.position
    push ()
    translate (p.x,p.y)
    imageMode(CENTER)
    image(this.boatImg,0,this.boatPosition,this.width,this.height)
    pop ()
}
}