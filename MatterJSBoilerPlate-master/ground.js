class Ground{
    constructor(){
        var options={
            isStatic:true,
            friction:0.4,
        }

this.body = Bodies.rectangle(500,625,200,20,options);
World.add(world, this.body);
    }

display(){

rectMode(CENTER);
fill("brown");
rect(500,625,200,20);

   }

}