const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var umbrella;
var walkingBoyImage;
var walkingBoy;
var thunder, thunder1, thunder2, thunder3, thunder4;

function preload(){
    
    //walkingBoyImage = loadImage("Walking Frame/walking_1.png");

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");


}

function setup(){
   var canvas = createCanvas(400, 600);
   engine = Engine.create();
   world = engine.world;

   
    for(var i = 0; i < 100; i++){

        drops.push(new Drop(random(0, 400), random(0, 400)));

    }
    //console.log(drops)

    umbrella = new Umbrella(200, 365);

}

function draw(){
    background(0);
    Engine.update(engine);

    //image(walkingBoyImage, 200, 300);

    for(i = 0; i < 100; i++){

        drops[i].display();

    }

    for(i = 0; i < 100; i++){

        drops[i].reset(); 

    }

    createThunder();

    umbrella.display();

    console.log(thunder);

}   

function createThunder(){

    var rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        //thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        switch(rand){

            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;

        }

        thunder.scale = random(0.3, 0.6);

    }

}
