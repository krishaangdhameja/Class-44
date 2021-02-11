var character, characterimage, characterimageleft, characterimageright;
var trampoline, trampolineimage1, trampolineimage2, trampolineimage3;
var grass1, grass2, grass3, grass4, grass5, grass6, grass7, grass8, grassimage1, grassimage2, grassimage3;
var water, waterimage1, waterimage2;
var coin, coinimage1, coinimage2, coinimage3, coinimage4;

function preload() {
characterimage = loadImage("characterright2.png");
characterimageleft = loadAnimation("characterleft1.png", "characterleft2.png", "characterleft3.png", "characterleft4.png");
characterimageright = loadAnimation("characterright1.png", "characterright2.png", "characterright3.png", "characterright4.png")
grassimage1 = loadImage("grass.jpg");

}

function setup() {
createCanvas(1300,600);

grass1 = createSprite(45,555,10,10);
grass1.addImage(grassimage1);

grass2= createSprite(140,555,10,10);
grass2.addImage(grassimage1);

grass3 = createSprite(235,555,10,10);
grass3.addImage(grassimage1);

grass4 = createSprite(330,555,10,10);
grass4.addImage(grassimage1);

grass5 = createSprite(425,555,10,10);
grass5.addImage(grassimage1);

grass6 = createSprite(520,555,10,10);
grass6.addImage(grassimage1);

grass7 = createSprite(615,555,10,10);
grass7.addImage(grassimage1);

character = createSprite(200,300,30,30);
character.addImage(characterimage);
character.scale = 0.2;

}

function draw() {
background("white");

if(keyCode === 77) {
character.addAnimation("right", characterimageright);

}

drawSprites();
}