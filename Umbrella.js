class Umbrella {
    constructor(x, y){
        var options = {
            
            isStatic: true,
            restituition: 0.3,
            friction: 0.1,
            density: 1

        }

        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("Walking Frame/walking_1.png");
        World.add(world, this.body);

    }

    display(){

        push();
        rotate(-2);
        fill("black");
        ellipse(this.body.position.x, this.body.position.y, 120, 70);
        pop()

        imageMode(CENTER);
        image(this.image, 200, 450, 300, 350);
        
    }
}