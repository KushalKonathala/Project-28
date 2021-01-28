class Mango{
    constructor(){
        var options={
isStatic:true,
restitution:0,
friction:0,
        }

        this.body = Bodies.circle(x, y, diametre, options);
        this.diametre = diametre;
        this.image = loadImage("mango.png");
        World.add (world, this.body);
    }

display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    ImageMode(CENTER);
    image(this.image, 0, 0 , this.diametre);
    pop();
}

}