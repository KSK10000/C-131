img = "";
function setup(){
    canvas=createCanvas(550,550);
    canvas.center();
}
function preload(){
  img = loadImage('fruits.jpg');
}
function draw() {
    image(img, 0, 0, 550, 550);
    text("Fruits", 45, 75);
    stroke("#FF0000");
    noFill();
    rect(30, 60, 550, 450 );
}  
function back(){
    window.location="index.html";
}