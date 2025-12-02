let topLayer;
let motorcycle;

function preload() {
  motorcycle = loadImage("motorcycle.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);

  
  topLayer = createGraphics(width, height);
  topLayer.background(200); 


  topLayer.textAlign(CENTER, CENTER);
  topLayer.textSize(48);
  topLayer.fill(0);
  topLayer.text("Myrtle Beach Motorcycle Project", width / 2, height / 2);
}

function draw() {
 
  image(motorcycle, 0, 0);


  image(topLayer, 0, 0);
}

function mouseDragged() {

  topLayer.erase();
  topLayer.circle(mouseX, mouseY, 80);
  topLayer.noErase();
}
