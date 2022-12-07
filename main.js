img="";
status:"";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="detecting objects"
}

function draw() { 
    image(img, 0, 0, 400, 400);
    fill("red");
    text("dog", 100,100);
    noFill();
    stroke("red");
    rect(20,50, 180,380);

    fill("red");
    text("cat", 350,100);
    noFill();
    stroke("red");
    rect(210,100, 250,380);
}

function modelLoaded(){
    console.log("Model Loaded");
    status:true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.error(error);
}
else {
    console.log(results);
}
}