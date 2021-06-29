class Drop {
    constructor(x, y){

        var options = {

            isStatic: false,
            restituition: 0.3,
            friction: 0.1,
            density: 1

        }

        this.body = Bodies.circle(x, y, 3, options);
        World.add(world, this.body);

    }

    reset(){
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})

        }
    }

    display(){

        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, 6, 6);

    }
}