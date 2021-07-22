var bg;
var gato, tomImg1,tomImg2, tomImg3;
var raton, jerryImg1,jerryImg2, jerryImg3;

function preload() {
    bg = loadImage("images2/fondo.jpg");
    tomImg1= loadImage("images2/tom1.png");
    tomImg2=loadAnimation("images2/tom2.png" , "images2/tom3.png", "images2/tom3.png");
    tomImg3= loadImage("images2/tom4.jpg");
    jerryImg1=loadImage("images2/jerry1.png");
    jerryImg2= loadAnimation("images2/jerry2.png","images2/jerry3.jpg","images2/jerry3.jpg");
    jerryImg3=loadImage("images2/jerry4.png");
}
function setup(){
    createCanvas(1000,800);



    gato = createSprite(870, 600);
    gato.addImage(tomImg1);
    gato.addAnimation("tomRunning", tomImg2);
    gato.scale = 0.2;

    raton = createSprite(200, 600);
    raton.addImage(jerryImg1);
    raton.addAnimation("jerryTeasing", jerryImg2);
    raton.scale = 0.15;

}
function draw() {
 
    background(bg);

    if(keyCode === SPACE){
        gato.velocityX = -5; 
        gato.changeAnimation("tomRunning"); 
 

        raton.frameDelay = 25;
        raton.changeAnimation("jerryTeasing");



    }

    if(gato.x - raton.x < (gato.width - raton.width)/2)
    { 

        gato.addImage(tomImg3);
        gato.velocityX=0;
        gato.x =300;
        gato.scale= 0.1;
        gato.changeImage (tomImg3);
 
        raton.addImage(jerryImg3);
        raton.scale=0.1;
        raton.changeImage(jerryImg3);
    }  
    drawSprites();

}